<template>
    <main>
        <TheMenu :menuItems="menuItems" />
    </main>
</template>

<script>
import TheMenu from '../components/TheMenu/TheMenu.vue';

export default {
    name: 'FindMatch',
    components: {
        TheMenu,
    },
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="less"></style>
