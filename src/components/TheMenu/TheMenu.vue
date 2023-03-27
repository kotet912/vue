<template>
    <div class="menu">
        <nav class="menu__nav">
            <ul class="menu__list">
                <li v-for="item in menuItems" :key="item.Array" class="menu__item">
                    <a :href="item.link" class="menu__link">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="less">
.menu__nav {
    background-color: #f2f2f2;
    text-align: center;
    border-radius: 5px;
    margin: 0;
    padding: 0;
}

.menu__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu__item {
    display: inline-block;
    margin-right: 20px;
}

.menu__link {
    color: #333;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
    border-bottom: 3px solid transparent;
}

.menu__link:hover {
    border-color: #333;
}
</style>
