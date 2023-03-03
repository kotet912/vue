<template>
  <div id="app">
    <TheHeader msg="Welcome to Your Vue.js App" />
    <TheMain :star="5" />
    <ol>
      <TodoItem v-for="item in groceryList" :todo="item" :key="item.id" />
    </ol>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheMain from './components/TheMain/TheMain.vue'
import TodoItem from './components/Todo-item/Todo-item.vue'

export default {
  name: 'App',
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Овощи' },
        { id: 1, text: 'Сыр' },
        { id: 2, text: 'Что там ещё люди едят?' }
      ]
    }
  },
  components: {
    TheHeader,
    TheMain,
    TodoItem
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
