<template>
  <div id="app" class="app-container">
    <user-form @addNewUser="addNewUser" :lastId="lastId"></user-form>
    <users-table @delete="deleteUserFromData" :users="users"></users-table>
  </div>
</template>

<script>
  import UsersTable from './components/UsersTable'
  import UserForm from './components/UserForm'
  import usersData from '@/data.js'

  export default {
    name: 'app',
    data() {
      return {
        users: usersData.users
      }
    },
    components: {
      UsersTable, UserForm
    },
    computed: {
      lastId() {
        if (this.users.length === 0) {
          return 0
        } else {
          return this.users[this.users.length - 1].id
        }
      }
    },
    methods: {
      deleteUserFromData(id) {
        this.users = this.users.filter((user) => {
          return user.id !== id
        })
      },
      addNewUser(user) {
        this.users.push({...user})
      }
    }
  }
</script>

<style>
  .app-container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 50px 0;
  }
</style>
