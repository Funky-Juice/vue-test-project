<template>
  <div>
    <form class="user-form" @submit.prevent="addUser">
      <label class="user-form__item">
        <span class="user-form__field-name">Имя: </span>
        <input v-model="newUser.name"
               class="user-form__input"
               type="text" name="user_name"
               placeholder="Иванов Иван"
               data-error="Укажите имя кириллицей">
      </label>

      <label class="user-form__item">
        <span class="user-form__field-name">Логин: </span>
        <input v-model="newUser.login"
               class="user-form__input"
               type="text"
               name="user_login"
               placeholder="Ivan1988"
               data-error="Не менее 5 символов">
      </label>

      <label class="user-form__item">
        <span class="user-form__field-name">Электронная почта: </span>
        <input v-model="newUser['e-mail']"
               class="user-form__input"
               type="text"
               name="user_e-mail"
               placeholder="example@mail.com"
               data-error="Перепроверьте почту">
      </label>

      <label class="user-form__item">
        <span class="user-form__field-name">Дата регистрации: </span>
        <input v-model="newUser.created"
               class="user-form__input"
               type="date"
               name="user_reg-date"
               placeholder="mm.dd.yyyy"
               data-error="Укажите дату регистрации">
      </label>

      <input id="form-sbmt" class="user-form__send-btn" type="submit" value="Добавить пользователя">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'UserForm',
    data() {
      return {
        newUser: {
          name: '',
          login: '',
          'e-mail': '',
          created: ''
        }
      }
    },
    methods: {
      addUser() {
        this.$emit('addNewUser', this.newUser)
        this.newUser.name = ''
        this.newUser.login = ''
        this.newUser['e-mail'] = ''
        this.newUser.created = ''
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
    margin: 0 auto 10px;
    padding: 5px;
  }

  .user-form__field-name {
    display: block;
    text-align: left;
    margin-bottom: 5px;
  }

  .user-form__input {
    display: block;
    padding: 10px;
    border: 1px solid grey;
  }

  .user-form__send-btn {
    margin: 30px auto;
    padding: 5px;
  }

  .user-form .error {
    border: 1px solid red;
  }

  .user-form .error-text {
    position: absolute;
    display: block;
    text-transform: none;
    color: red;
    font-size: 15px;
  }
</style>
