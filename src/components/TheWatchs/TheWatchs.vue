<template>
  <div>
    <br />
    <div v-for="user in users" :key="user.name">{{ user.name }}</div>
    <br />
    <button @click="currentPage--">-</button>
    <button v-for="page in pages" :key="page" @click="currentPage = page">
      {{ page }}
    </button>
    <button @click="currentPage++">+</button>

    <p>Страница {{ currentPage }} из {{ pages }}</p>
    <br />
    <p>Поиск по списку</p>
    <input type="text" v-model="searchName" />
    <p>
      Всего имен: {{ users.length }}, найдено совпадений
      {{ filtersName.length }}
    </p>
    <li v-for="(users, index, age) in filtersName" :key="age">
      {{ users.name }}-{{ users.age }}
    </li>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: 3,
      currentPage: 1,
      searchName: ``,
      users: [
        { name: "Алина", age: 19 },
        { name: "Маргарита", age: 17 },
        { name: "Вика", age: 25 },
        { name: "Кристина", age: 21 },
        { name: "Диана", age: 24 },
        { name: "Лора", age: 22 },
      ],
      // user: ['петр', 'олег']
    };
  },
  computed: {
    filtersName() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    },
  },
  methods: {
    logPage(page) {
      console.log("Загрузка страницы: ", { page });
    },
  },

  watch: {
    currentPage(page) {
      this.logPage(page);
    },
  },
};
</script>
