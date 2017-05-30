<template>
  <div>
    <table class="users-table">
      <tbody>
      <tr>
        <th v-for="header in tableHeaders">{{header}}</th>
      </tr>
      <tr v-for="user in users" :key="user.id"
          class=""
          :class="{editing: user == editedTodo}">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td @dblclick="editField(user)">
          <span>{{user.login}}</span>
          <input class="editInput"
                 type="text"
                 v-model.trim="user.login"
                 v-todo-focus="user == editedTodo"
                 @blur="doneEdit"
                 @keyup.enter="doneEdit"
                 @keyup.esc="cancelEdit(user)">
        </td>
        <td>{{user['e-mail']}}</td>
        <td>{{user.created}}</td>
        <button @click="deleteUser(user.id)" class="delete-btn">Удалить</button>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'UsersTable',
    props: ['users'],
    data() {
      return {
        editedTodo: null,
        tableHeaders: ['id', 'Имя', 'Логин', 'E-mail', 'Дата регистрации']
      }
    },
    methods: {
      deleteUser(id) {
        this.$emit('delete', id)
      },
      editField(user) {
        this.beforeEditCache = user.login
        this.editedTodo = user
      },
      doneEdit() {
        if (!this.editedTodo) {
          return
        }
        this.editedTodo = null
      },
      cancelEdit(user) {
        this.editedTodo = null
        user.login = this.beforeEditCache
      }
    },
    // ставит фокус на поле ввода при его активировании
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  }
</script>

<style>
  .users-table {
    position: relative;
    min-width: 700px;
    margin: 50px auto;
    border-collapse: collapse;
  }

  .users-table th,
  .users-table td {
    padding: 10px;
    border: 1px solid grey;
    text-align: center;
  }

  .delete-btn {
    position: absolute;
    right: -80px;
    margin-top: 4px;
    padding: 5px;
  }

  .editInput {
    display: none;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: inherit;
    color: inherit;
    border: none;
    outline: none;
    text-align: center;
  }

  .editing .editInput {
    display: block;
  }

  .editing span {
    display: none;
  }
</style>
