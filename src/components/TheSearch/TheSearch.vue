<template>
  <div class="search">
    <input type="text" placeholder="Коженный диван" v-model="searchText"/>
    <button type="button" @click="$emit('search', searchText)">Найти</button>
  </div>
</template>

<script>
export default {
    model:{
        prop:`value`,
        event:`input`,
    },
    data(){
        return{
            searchText:``
        }
    },

};
</script>

<style src="./TheSearch.less" lang="less"></style>

