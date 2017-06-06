<template>
  <div id="app" class="app-container">
    <user-form></user-form>
    <users-table></users-table>
  </div>
</template>

<script>
  import UsersTable from './components/UsersTable'
  import UserForm from './components/UserForm'

  export default {
    name: 'app',
    components: {
      UsersTable, UserForm
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
