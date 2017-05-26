<template>
  <div>
    <table>
      <tbody>
      <tr>
        <th v-for="header in tableHeaders">{{header}}</th>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user['e-mail']}}</td>
        <td>{{user.login}}</td>
        <td>{{user.created}}</td>
        <td>
          <button @click="deleteUser(user.id)">&times;</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'UsersTable',
    props: ['users'],
    data () {
      return {
        tableHeaders: ['id', 'Имя', 'Логин', 'E-mail', 'Дата регистрации']
      }
    },
    methods: {
      deleteUser(id) {
        console.log(id)
        this.$emit('delete', id)
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

