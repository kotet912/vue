<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__block">
                <h3>Контакты</h3>
                <ul>
                    <li><a href="tel:+18001234567">8-800-123-45-67</a></li>
                    <li><a href="mailto:info@example.com">info@example.com</a></li>
                    <li><a href="#">Адрес: г. Москва, ул. Пушкина, д. 10</a></li>
                </ul>
            </div>
            <div class="footer__block">
                <h3>Полезные ссылки</h3>
                <ul>
                    <li><a href="#">Ссылка 1</a></li>
                    <li><a href="#">Ссылка 2</a></li>
                    <li><a href="#">Ссылка 3</a></li>
                </ul>
            </div>
            <div class="footer__block">
                <h3>Мы в социальных сетях</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
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
    background-color: #f8f8f8;
    padding-top: 50px;
    padding-bottom: 20px;
    font-family: Arial, sans-serif;
    &__container {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }
    &__block {
        width: 30%;
        h3 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            li {
                margin-bottom: 5px;
                a {
                    text-decoration: none;
                    color: #666;
                }
                a:hover {
                    color: #333;
                }
            }
        }
    }
}

</style>
