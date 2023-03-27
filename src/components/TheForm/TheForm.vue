<template>
    <div class="form">
        <form class="form__element" @submit.prevent="onSubmit">
            <label class="form__label">Логин</label>
            <input id=login class="form__input" type="text" required  minlength="6" pattern="[A-Za-z0-9]+"/>
            <label class="form__label">Пароль</label>
            <input id="pass" class="form__input" type="text" required minlength="6" pattern="[A-Za-z0-9]+"/>
            <label class="form__label">Email</label>
            <input id="email" class="form__input" type="text" required />
            <label class="form__label">Телефон</label>
            <input id="phone" class="form__input" type="text" />
            <label class="form__label">Страны</label>
            <select id="country" class="form__select" name="">
                <option class="form__option" :value="country.value" v-for="country in countries" :key="country.id">
                    {{ country.country }}
                </option>
            </select>
            <button class="form__button" type="submit">Отправить</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            countries: [
                {
                    id: 1,
                    country: `Китай`,
                    value: `China`,
                },
                {
                    id: 2,
                    country: `Россия`,
                    value: `Rus`,
                },
                {
                    id: 3,
                    country: `Япония`,
                    value: `Japan`,
                },
            ],
        };
    },
    methods: {
        onSubmit() {
          const login = document.querySelector('#login').value
          const pass = document.querySelector('#pass').value
          const email = document.querySelector('#email').value
          const phone = document.querySelector('#phone').value
          const country = document.querySelector('#country').value

          console.log(`Логин:${login}`);
          console.log(`Пароль:${pass}`);
          console.log(`Почта:${email}`);
          console.log(`Телефон:${phone}`);
          console.log(`Страна:${country}`);
            
        },
    },
};
</script>

<style lang="less">
.form {
    background-image: linear-gradient(to bottom right, #a6b1e1, #f8cdda);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    &__element {
        background-color: #fff;
        padding: 3rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
        max-width: 600px;
        width: 100%;
        animation: pulse 5s infinite alternate ease-in-out;
    }
    &__label {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: #555;
    }
    &__input,
    &__select {
        display: block;
        width: 100%;
        padding: 1rem;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        font-size: 1rem;
        transition: border-color 0.2s ease-in-out;
    }
    &__input:focus,
    &__select:focus {
        outline: none;
        border-color: #d4af37;
        box-shadow: 0 0 5px #d4af37;
    }
    &__option {
        font-size: 1.2rem;
        font-weight: bold;
        color: #555;
    }
    &__button {
        display: block;
        width: 100%;
        padding: 1rem;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        font-size: 1rem;
        transition: border-color 0.2s ease-in-out;
    }
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.1);
    }
}

@media screen and (max-width: 768px) {
    .form__element {
        padding: 2rem;
    }
}

@media screen and (max-width: 576px) {
    .form__element {
        padding: 1.5rem;
    }
}

@media screen and (max-width: 400px) {
    .form__element {
        padding: 1rem;
    }
}
</style>
