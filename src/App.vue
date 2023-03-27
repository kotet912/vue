<template>
    <div id="app">
        <TheMenu />
        <router-view></router-view> 
        <TheFooter/>
    </div>
</template>

<script>
import TheMenu from './components/TheMenu/TheMenu.vue';
import TheFooter from './components/TheFooter/TheFooter.vue'

export default {
    name: 'App',
  
    components: {
        TheMenu,
        TheFooter,
    },
};
</script>

<style src="./App.less" lang="less"></style>
