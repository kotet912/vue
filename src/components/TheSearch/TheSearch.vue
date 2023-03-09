<template>
  <div class="search">
    <input type="text" placeholder="Коженный диван" @input="$emit('input',$event.target.value)"/>
    <button>Найти</button>
  </div>
</template>

<script>
export default {
    model:{
        prop:`value`,
        event:`input`,
    },
  data() {
    return { valueSearch: `` };
  },
};
</script>

<style src="./TheSearch.less" lang="less"></style>
