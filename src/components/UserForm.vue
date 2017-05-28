<template>
  <form class="user-form" @submit.prevent="onSubmit">
    <label class="user-form__item">
      <span class="user-form__field-name">Имя: </span>
      <input class="user-form__input" type="text" name="user_name" placeholder="Иванов Иван"
             pattern="[А-Яа-яЁё\s]{1,10}$" data-error="Укажите имя кириллицей">
    </label>

    <label class="user-form__item">
      <span class="user-form__field-name">Логин: </span>
      <input class="user-form__input" type="text" name="user_login" placeholder="Ivan1988" pattern="^[A-Za-z0-9]{5,20}$"
             data-error="Не менее 5 символов">
    </label>

    <label class="user-form__item">
      <span class="user-form__field-name">Электронная почта: </span>
      <input class="user-form__input" type="text" name="user_e-mail" placeholder="example@mail.com"
             pattern="[A-Za-z0-9]{1,20}\@[A-Za-z]{1,10}\.[A-Za-z]{1,6}" data-error="Перепроверьте почту">
    </label>

    <label class="user-form__item">
      <span class="user-form__field-name">Дата регистрации: </span>
      <input class="user-form__input" type="text" name="user_reg-date" placeholder="mm.dd.yyyy"
             pattern="[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}" data-error="Укажите дату регистрации">
    </label>

    <input id="form-sbmt" class="user-form__send-btn" type="submit">
  </form>
</template>

<script>
  export default {
    name: 'UserForm',
    methods: {
      onSubmit() {
        console.log('sbmt-btn-click')
        this.$emit('addRow', 'addrowevt')
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
