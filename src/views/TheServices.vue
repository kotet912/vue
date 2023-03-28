<template>
    <div class="Services">
        <div class="Service">
            <h3>Разработка веб-приложений</h3>
            <p>
                Мы предлагаем полный цикл создания веб-приложений: от определения требований и
                дизайна до программирования и развертывания.
            </p>
        </div>

        <div class="Service">
            <h3>Разработка API</h3>
            <p>
                Мы также предлагаем разработку API для веб-приложений, которые позволяют общаться с
                другими сервисами и интегрироваться с другими системами.
            </p>
        </div>

        <div class="Service">
            <h3>Обслуживание и поддержка</h3>
            <p>
                Мы готовы обеспечить поддержку и обслуживание веб-приложений, чтобы наши клиенты
                могли быть уверены в готовности их приложений к работе.
            </p>
        </div>

        <div class="Service">
            <h3>Мобильные приложения</h3>
            <p>
                Мы разрабатываем приложения для iOS и Android, которые позволяют клиентам
                взаимодействовать с вашим бизнесом в любое время и в любом месте.
            </p>
        </div>

        <div class="Service">
            <h3>Разработка сайтов</h3>
            <p>
                Мы создаем привлекательные и динамические сайты, которые помогают нашим клиентам
                эффективно представлять свои продукты и услуги в Интернете.
            </p>
        </div>

        <div class="Service">
            <h3>UI/UX дизайн</h3>
            <p>
                Мы разрабатываем эксклюзивный и интуитивно понятный интерфейс для наших клиентов,
                который непременно будет соответствовать их бизнес-целям и потребностям.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheServices',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="less">
.Services {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 50px;
}

.Service {
    width: calc(33.33% - 20px);
    background-color: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    h3 {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 10px;
    }
    p {
        font-size: 18px;
        line-height: 1.5;
        color: #666666;
        margin-bottom: 0;
    }
}
</style>
