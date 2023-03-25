<template>
    <div>
        <div>
            <div v-for="user in displayedUsers" :key="user.name">{{ user.name }}</div>
            <button @click="previousPage()">-</button>
            <button v-for="page in pages" :key="page" @click="currentPage = page">
                {{ page }}
            </button>
            <button @click="nextPage()">+</button>
            <p>Страница {{ currentPage }} из {{ pages }}</p>
        </div>

        <br />
        <p>Поиск по списку</p>
        <input type="text" v-model="searchName" />
        <p>
            Всего имен: {{ users.length }}, найдено совпадений
            {{ filtersName.length }}
        </p>
        <li v-for="(users, index, age) in filtersName" :key="age">
            {{ users.name }}-{{ users.age }}
        </li>
        <br />
    </div>
</template>

<script>
export default {
    data() {
        return {
            // pages: 3,
            currentPage: 1,
            itemsPerPage: 3,
            searchName: ``,
            users: [
                { name: 'Алина', age: 19 },
                { name: 'Маргарита', age: 17 },
                { name: 'Вика', age: 25 },
                { name: 'Кристина', age: 21 },
                { name: 'Диана', age: 24 },
                { name: 'Лора', age: 22 },
                { name: 'Елена', age: 30 },
                { name: 'Анна', age: 28 },
                { name: 'Максим', age: 33 },
                { name: 'Артем', age: 19 },
                { name: 'Денис', age: 26 },
                { name: 'Сергей', age: 32 },
                { name: 'Иван', age: 25 },
                { name: 'Александр', age: 27 },
                { name: 'Татьяна', age: 29 },
                { name: 'Михаил', age: 31 },
                { name: 'Наталья', age: 23 },
                { name: 'Юлия', age: 20 },
                { name: 'Олег', age: 35 },
                { name: 'Егор', age: 18 },
            ],
        };
    },
    computed: {
        filtersName() {
            return this.users.filter((user) =>
                user.name.toLowerCase().includes(this.searchName.toLowerCase())
            );
        },
        displayedUsers() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.users.slice(startIndex, startIndex + this.itemsPerPage);
        },
        pages() {
            return Math.ceil(this.users.length / this.itemsPerPage);
        },
    },
    methods: {
        logPage(page) {
            console.log('Загрузка страницы: ', { page });
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.pages) {
                this.currentPage++;
            }
        },
    },

    watch: {
        currentPage(page) {
            this.logPage(page);
        },
    },
};
</script>
