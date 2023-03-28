<template>
    <div class="Contacts">
        <h2>Наши контакты:</h2>
        <ul>
            <li>Телефон: +7 (XXX) XXX-XX-XX</li>
            <li>Email: example@mail.com</li>
            <li>Адрес: г. Москва, ул. Пушкина, д. 10</li>
        </ul>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.586038723418!2d37.61263261618665!3d55.764912380551374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9190d7ccba93de93!2z0JLQvtGA0L7RgNC-0LLRgdC60LjQuSDRgtGA0LjRjyDQtNCw0LPQsNC9LCDQmtCw0YDRg9Cw0L0sIDQsINCh0LXRgdC60L7Qs9C-LCAxMDAwMA!5e0!3m2!1sru!2sru!4v1613397313628!5m2!1sru!2sru"
                width="600"
                height="400"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VuetooTheContacts',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="less">
.Contacts {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
}

.Contacts h2 {
    font-size: 28px;
    margin-bottom: 20px;
}

.Contacts ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.Contact li {
    font-size: 18px;
    margin-bottom: 10px;
}

.map-container {
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 400px;
    width: 48%;
    margin: 20px;
}
</style>
