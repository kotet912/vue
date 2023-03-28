<template>
    <div class="menu">
        <nav class="menu__nav">
            <ul class="menu__list">
                <li v-for="item in menuItems" :key="item.id" class="menu__item">
                    <router-link :to="item.link" class="menu__link">{{ item.title }}</router-link>
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
                { id: 1, title: 'Главная', link: '/' },
                { id: 2, title: 'Найди соответствие', link: '/find-match' },
                { id: 3, title: 'О нас', link: '/about' },
                { id: 4, title: 'Услуги', link: '/services' },
                { id: 5, title: 'Контакты', link: '/Contacts' },
            ],
        };
    },
};
</script>

<style lang="less">
.menu {
    &__nav {
        background-color: #f2f2f2;
        text-align: center;
        border-radius: 5px;
        margin: 0;
        padding: 0;
    }
    &__list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    &__item {
        display: inline-block;
        margin-right: 20px;
    }
    &__link {
        color: #333;
        text-decoration: none;
        padding: 10px 15px;
        font-size: 18px;
        transition: all 0.2s ease-in-out;
        border-bottom: 3px solid transparent;
    }
    &__link:hover {
        border-color: #333;
    }
}
</style>
