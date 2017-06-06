<template>
  <div>
    <table class="users-table">
      <tbody>
      <tr>
        <th v-for="header in tableHeaders">{{header}}</th>
      </tr>
      <tr v-for="user in users" :key="user.id"
          :class="{editing: user === fieldValue}">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td @dblclick="editField(user)">
          <span>{{user.login}}</span>
          <input class="editInput"
                 type="text"
                 v-model.trim="user.login"
                 v-edit-focus="user === fieldValue"
                 @blur="doneEdit"
                 @keyup.enter="doneEdit"
                 @keyup.esc="cancelEdit(user)">
        </td>
        <td>{{user['e-mail']}}</td>
        <td>{{formatDate(user.created)}}</td>
        <button @click="deleteUser(user.id)" class="delete-btn">Удалить</button>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'UsersTable',
    data() {
      return {
        fieldValue: null,
        tableHeaders: ['id', 'Имя', 'Логин', 'E-mail', 'Дата регистрации']
      }
    },
    computed: {
      users() {
        return this.$store.state.users
      }
    },
    methods: {
      deleteUser(id) {
        this.$store.commit('deleteUser', id)
      },
      editField(user) {
        this.beforeEditCache = user.login
        this.fieldValue = user
      },
      doneEdit() {
        if (!this.fieldValue) {
          return
        }
        this.$store.commit('updateUser', {id: this.fieldValue.id, login: this.fieldValue.login})
        this.fieldValue = null
      },
      cancelEdit(user) {
        this.fieldValue = null
        user.login = this.beforeEditCache
      },
      formatDate(data) {
        var msUTC = Date.parse(data)

        if (isNaN(msUTC)) {
          var date = new Date()
        } else {
          date = new Date(msUTC)
        }

        function getMonthName(date) {
          var months = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.']
          return months[date.getMonth()]
        }

        var newData = date.toLocaleString('ru', {weekday: 'short'}) + ', ' + date.getDate() + ' ' + getMonthName(date) + ' ' + date.getFullYear() + 'г.'
        return (newData)
      }
    },
    // ставит фокус на поле ввода при его активировании
    directives: {
      'edit-focus': function (el, binding) {
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
