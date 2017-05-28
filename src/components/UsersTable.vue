<template>
  <div>
    <user-form @addRow="addNewRow"></user-form>

    <table class="users-table">
      <tbody>
      <tr>
        <th v-for="header in tableHeaders">{{header}}</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.login}}</td>
        <td>{{user['e-mail']}}</td>
        <td>{{user.created}}</td>
        <button @click="somenewevt; deleteUser(user.id)" class="delete-btn">Удалить</button>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import UserForm from './UserForm'

  export default {
    name: 'UsersTable',
    props: ['users'],
    data() {
      return {
        tableHeaders: ['id', 'Имя', 'Логин', 'E-mail', 'Дата регистрации']
      }
    },
    components: {
      UserForm
    },
    methods: {
      deleteUser(id) {
        this.$emit('delete', id)
      },
      somenewevt() {
        this.$emit('someNewEvt', 'someNewEvt')
      },
      addNewRow(msg) {
        console.log(msg)
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
</style>
