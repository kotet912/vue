<template>
    <footer class="footer">
        <div class="footer__container">
            <p><strong>Компания</strong> &copy; {{ new Date().getFullYear() }}</p>
            <p>Контакты: 8-800-123-45-67</p>
            <p>Адрес: г. Москва, ул. Пушкина, д. 10</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="less">
.footer {
    background-color: #ddd;
    padding: 20px;
    &__container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            margin: 0;
            font-size: 14px;
            color: #666;
        }
    }
}

</style>
