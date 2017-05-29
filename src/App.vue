<template>
  <div id="app" class="app-container">
    <user-form @addNewUser="addNewUser"></user-form>
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
    methods: {
      deleteUserFromData(id) {
        this.users = this.users.filter((user) => {
          return user.id !== id
        })
      },
      addNewUser(obj) {
        this.users.push({...obj})
//        console.log(this.users)
//        console.log(this.users[this.users.length - 1].id)
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
