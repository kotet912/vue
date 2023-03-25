<template>
    <div class="menu">
        <nav class="menu__nav">
            <ul class="menu__list">
                <li v-for="item in menuItems" :key="item" class="menu__item">
                    <a :href="item.link" class="menu__link">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { title: 'Главная', link: '#' },
                { title: 'О нас', link: '#' },
                { title: 'Услуги', link: '#' },
                { title: 'Контакты', link: '#' },
            ],
        };
    },
};
</script>

<style lang="less"></style>
