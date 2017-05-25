<template>
  <div>{{users}}
    <table>
      <tr>
        <th v-for="header in tableHeaders">{{header}}</th>
      </tr>
      <tr v-for=""></tr>
    </table>
  </div>
</template>

<script>
  import usersData from '@/data.js'

  export default {
    name: 'UsersTable',
    data () {
      return {
        users: usersData,
        tableHeaders: ['id', 'Имя', 'Логин', 'E-mail', 'Дата регистрации']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

