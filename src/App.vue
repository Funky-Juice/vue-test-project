<template>
  <div id="app">
    <users-table @delete="deleteUserFromData" :users="users"></users-table>
  </div>
</template>

<script>
  import UsersTable from './components/UsersTable'
  import usersData from '@/data.js'
  //  import hello from './components/Hello.vue'

  export default {
    name: 'app',
    data() {
      return {
        users: usersData.users
      }
    },
    components: {
      UsersTable
    },
    methods: {
      deleteUserFromData(id) {
        console.log(id)
        this.users = this.users.filter(function (user) {
          return user.id !== id
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
