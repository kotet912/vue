<template>
    <div class="form">
        <form action="">
            <p>Логин</p>
            <input type="text" />
            <p>Пароль</p>
            <input type="text" />
            <p>Email</p>
            <input type="text" />
            <p>Телефон</p>
            <input type="text" />
            <p>Страны</p>
            <select name="" id="">
                <option value="" v-for="country in countries" :key="country">
                    {{ country.country }}
                </option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [
                {
                    country: `Китай`,
                    value: `China`,
                },
                {
                    country: `Россия`,
                    value: `Rus`,
                },
                {
                    country: `Япония`,
                    value: `Japan`,
                },
            ],
        };
    },
};
</script>

<style lang="less">
.form {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 0 10%;

    p {
        margin-bottom: 5px;
    }
}
</style>
