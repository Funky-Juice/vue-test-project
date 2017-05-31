<template>
  <div>
    <form class="user-form" @submit.prevent="addUser">
      <label class="user-form__item">
        <span class="user-form__field-name">Имя: </span>
        <input v-model="newUser.name"
               class="user-form__input"
               type="text" name="user_name"
               placeholder="Иванов Иван">
        <span class="error-msg"
              v-show="!validation.name">Укажите имя кириллицей</span>
      </label>

      <label class="user-form__item">
        <span class="user-form__field-name">Логин: </span>
        <input v-model="newUser.login"
               class="user-form__input"
               type="text"
               name="user_login"
               placeholder="Ivan1988">
        <span class="error-msg"
              v-show="!validation.login">Не менее 5 латинских символов</span>
      </label>

      <label class="user-form__item">
        <span class="user-form__field-name">Электронная почта: </span>
        <input v-model="newUser['e-mail']"
               class="user-form__input"
               type="text"
               name="user_e-mail"
               placeholder="example@mail.com">
        <span class="error-msg"
              v-show="!validation['e-mail']">Укажите почту</span>
      </label>

      <label class="user-form__item">
        <span class="user-form__field-name">Дата регистрации: </span>
        <input v-model="newUser.created"
               class="user-form__input"
               type="date"
               name="user_reg-date"
               placeholder="mm.dd.yyyy">
        <span class="error-msg"
              v-show="!validation.created">Укажите дату регистрации</span>
      </label>

      <input id="form-sbmt" class="user-form__send-btn" type="submit" value="Добавить пользователя">
    </form>
  </div>
</template>

<script>
  var nameRE = /[А-Яа-яЁё\s]{3,10}$/
  var loginRE = /^[A-Za-z0-9]{5,20}$/
  var emailRE = /[A-Za-z0-9]{1,20}@[A-Za-z]{1,10}.[A-Za-z]{2,6}/
  export default {
    name: 'UserForm',
    props: ['lastId'],
    data() {
      return {
        newUser: {
          id: '',
          name: '',
          login: '',
          'e-mail': '',
          created: ''
        }
      }
    },
    computed: {
      validation() {
        return {
          name: nameRE.test(this.newUser.name),
          login: loginRE.test(this.newUser.login),
          'e-mail': emailRE.test(this.newUser['e-mail']),
          created: !!this.newUser.created
        }
      },
      isValid() {
        var validation = this.validation
        return Object.keys(validation).every(function (key) {
          return validation[key]
        })
      }
    },
    methods: {
      addUser() {
        if (this.isValid) {
          this.newUser.id = this.lastId + 1
          this.$emit('addNewUser', this.newUser)
          this.newUser.name = ''
          this.newUser.login = ''
          this.newUser['e-mail'] = ''
          this.newUser.created = ''
        }
      }
    }
  }
</script>

<style>
  .user-form {
    width: 360px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid grey;
    text-align: center;
  }

  .user-form__item {
    display: block;
    width: 200px;
    margin: 0 auto 15px;
    padding: 5px;
  }

  .user-form__field-name {
    display: block;
    text-align: left;
    margin-bottom: 5px;
  }

  .user-form__input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid grey;
  }

  .user-form__send-btn {
    margin: 30px auto;
    padding: 5px;
  }

  .user-form .error-msg {
    position: absolute;
    display: block;
    text-transform: none;
    color: red;
    font-size: 14px;
  }
</style>
