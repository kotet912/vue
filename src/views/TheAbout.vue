<template>
    <div class="TheAbout">
        <h1>О нас</h1>
        <p>Мы - команда разработчиков с большим опытом работы в сфере веб-разработки.</p>
        <p>
            Наша цель - создание высококачественных и интуитивно понятных веб-приложений, которые
            будут удовлетворять потребности наших клиентов.
        </p>
        <p>
            Мы работаем с различными языками программирования, такими как Vue.js, React, Angular,
            Node.js, Python и многими другими.
        </p>
        <p>
            Если у вас есть вопросы или вы хотите обсудить возможность совместной работы,
            пожалуйста, свяжитесь с нами.
        </p>
    </div>
</template>

<script>
export default {
    name: 'TheAbout',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="less">
.TheAbout {
    max-width: 800px;
    margin: 25px auto 50px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #333333;
}

p {
    font-size: 20px;
    line-height: 1.5;
    text-align: justify;
    color: #666666;
    margin-bottom: 10px;
}
</style>
