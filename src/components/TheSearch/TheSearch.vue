<template>
  <div class="search">
    <input type="text" v-model="valueSearch" placeholder="Коженный диван" />
    <button>Найти</button>
  </div>
</template>

<script>
export default {
  data() {
    return { valueSearch: `` };
    //передать valueSearch в рендринг картинок
  },
};
</script>

<style src="./TheSearch.less" lang="less"></style>
