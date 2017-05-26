<template>
  <div>
    <span>{{todo.text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: ['todo']
  }
</script>
