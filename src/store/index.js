import Vue from 'vue'
import Vuex from 'vuex'
import usersData from '@/data.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: usersData.users
  },
  getters: {
    lastId(state) {
      if (state.users.length === 0) {
        return 0
      } else {
        return state.users[state.users.length - 1].id
      }
    }
  },
  mutations: {
    deleteUser(state, id) {
      state.users = state.users.filter((user) => {
        return user.id !== id
      })
    },
    addNewUser(state, newUser) {
      state.users.push({...newUser})
    },
    updateUser(state, {id, login}) {
      state.users = state.users.map((user) => {
        if (user.id === id) {
          user.login = login
        }
        return user
      })
    }
  }
})

export default store
