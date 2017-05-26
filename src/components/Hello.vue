<template>
  <div>
    <span v-bind:title="newMsg">{{msg}}</span>
    <p v-if="seen">Сейчас меня видно</p>
    <button @click="reverseMsg">reverse title</button>

    <br>
    <br>
    <input v-model="field">
    <p>{{field}}</p>

    <todo-item
      v-for="item in someNewList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>

    <br>
    <button @click="reverseMsg" v-bind:disabled="reverseMsg">Выключенная кнопка</button>
  </div>
</template>

<script>
  import usersData from '@/data.js'
  import todoItem from './TodoComponent.vue'

  export default {
    name: 'hello',
    components: {
      todoItem
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        newMsg: 'Some new message',
        field: 'some new field',
        users: usersData,
        seen: true,
        someNewList: [
          {id: 0, text: 'Пункт 1'},
          {id: 1, text: 'Пункт 2'},
          {id: 2, text: 'Пункт 3'}
        ]
      }
    },
    methods: {
      reverseMsg() {
        this.msg = this.msg.split('').reverse().join('')
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
