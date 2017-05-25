<template>
  <div id="app">
    <img src="./assets/logo.png">
    <users-table></users-table>
  </div>
</template>

<script>
  import UsersTable from './components/UsersTable'
  export default {
    components: {
      UsersTable
    },
    name: 'app'
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
