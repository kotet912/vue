<template>
    <div>
        <br>
        <div v-for="user in users" :key="user.name">{{ user.name }}</div>
        <br>
        <button @click="currentPage--">-</button>
        <button v-for="page in pages" :key="page" @click="currentPage = page">{{ page }}</button>
        <button @click="currentPage++">+</button>

        <p>Страница {{ currentPage }} из {{ pages }}</p>
        <br>
        <p>Поиск по списку</p>
        <input type="text" @input="searchName = $event.target.value">
        <p>Всего имен: {{ users.length }}, найдено совпадений {{ filtersName.length }}</p>
        <li v-for="(users, index) in filtersName" :key="index">{{ users.name }}</li>


    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: 3,
            currentPage: 1,
            searchName: ``,
            users: [
                { name: 'Алина' },
                { name: 'Маргарита' },
                { name: 'Вика' },
                { name: 'Кристина' },
                { name: 'Диана' },
                { name: 'Лора' },
            ],
            // user: ['петр', 'олег']
        }
    },
    computed: {
        filtersName() {
            // console.log(this.users);
            
            return this.users.filter(user => user.name.toLowerCase().includes(this.searchName.toLowerCase()))
        }
    },
    methods: {
        logPage(page) {
            console.log('Загрузка страницы: ', { page });
        },
       
    },

    watch: {
        currentPage(page) {
            this.logPage(page)
        },
       
    }
}


</script>