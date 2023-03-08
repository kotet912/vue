<template>
  <div id="app">
    <TheHeader msg="Welcome to Your Vue.js App" />
    <TheMain :star="5" />

    <ol>
      <TodoItem v-for="item in groceryList" :todo="item" :key="item.id" />
    </ol>
    <TheZadani />
    <TheWatchs />
    <TheShow />
    <h2>Диваны</h2>
    <div class="theCard">
      <li v-for="(prodoct, index) in productCard" :key="index">
        <TheCard
          :title="prodoct.title"
          :imgUrl="prodoct.imgUrl"
          :price="prodoct.price"
          :description="prodoct.description"
          :inStock="prodoct.inStock"
        />
      </li>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheMain from "./components/TheMain/TheMain.vue";
import TodoItem from "./components/Todo-item/Todo-item.vue";
import TheZadani from "./components/TheZadani/TheZadani.vue";
import TheWatchs from "./components/TheWatchs/TheWatchs.vue";
import TheShow from "./components/TheShow/TheShow.vue";
import TheCard from "./components/TheCard/TheCard.vue";

export default {
  name: "App",
  data() {
    return {
      groceryList: [
        { id: 0, text: "Овощи" },
        { id: 1, text: "Сыр" },
        { id: 2, text: "Яйца" },
        { id: 3, text: "Мясо" },
        { id: 4, text: "Хлебушек" },
        { id: 5, text: "Что там ещё люди едят?" },
      ],
      productCard: [
        {
          title: `Коженный диван`,
          imgUrl: `https://nordstyleshop.ru/wp-content/uploads/2020/02/divan-chester-343.jpg`,
          price: 36990,
          description: `Красная кожа дракона, бук, мех офцы`,
          inStock: 3,
        },
        {
          title: `Коженный диван`,
          imgUrl: `https://nordstyleshop.ru/wp-content/uploads/2020/02/divan-chester-343.jpg`,
          price: 36990,
          description: `Красная кожа дракона, бук, мех офцы`,
          inStock: 3,
        },
        {
          title: `Коженный диван`,
          imgUrl: `https://nordstyleshop.ru/wp-content/uploads/2020/02/divan-chester-343.jpg`,
          price: 36990,
          description: `Красная кожа дракона, бук, мех офцы`,
          inStock: 3,
        },
        {
          title: `Коженный диван`,
          imgUrl: `https://nordstyleshop.ru/wp-content/uploads/2020/02/divan-chester-343.jpg`,
          price: 36990,
          description: `Красная кожа дракона, бук, мех офцы`,
          inStock: 3,
        },
        {
          title: `Коженный диван`,
          imgUrl: `https://nordstyleshop.ru/wp-content/uploads/2020/02/divan-chester-343.jpg`,
          price: 36990,
          description: `Красная кожа дракона, бук, мех офцы`,
          inStock: 3,
        },
        {
          title: `Коженный диван`,
          imgUrl: `https://nordstyleshop.ru/wp-content/uploads/2020/02/divan-chester-343.jpg`,
          price: 36990,
          description: `Красная кожа дракона, бук, мех офцы`,
          inStock: 3,
        },
      ],
    };
  },
  components: {
    TheHeader,
    TheMain,
    TodoItem,
    TheZadani,
    TheWatchs,
    TheShow,
    TheCard,
  },
};
</script>

<style src="./App.less" lang="less"></style>
