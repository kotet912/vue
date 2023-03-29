<template>
    <div class="form">
        <form class="form__element" @submit.prevent="onSubmit">
            <label class="form__label">Логин</label>
            <input
                v-model.trim="forms.login"
                id="login"
                class="form__input"
                :class="$v.forms.login.$error ? 'invalid' : ''"
                type="text"
            />
            <p v-if="$v.forms.login.$dirty && !$v.forms.login.required">
                Обязательное поле
            </p>
            <p v-if="$v.forms.login.$dirty && !$v.forms.login.minLength">
                Логин должен состоять минимум из 5 символов
            </p>
            <label class="form__label">Пароль</label>
            <input
                v-model.trim="forms.pass"
                id="pass"
                class="form__input"
                :class="$v.forms.pass.$error ? 'invalid' : ''"
                type="text"
            />
            <p v-if="$v.forms.pass.$dirty && !$v.forms.pass.required">
                Обязательное поле
            </p>
            <p v-if="$v.forms.pass.$dirty && !$v.forms.pass.minLength">
                Пароль должен состоять минимум из 3 символов
            </p>
            <label class="form__label">Email</label>
            <input
                v-model.trim="forms.email"
                id="email"
                class="form__input"
                :class="$v.forms.email.$error ? 'invalid' : ''"
                type="text"
            />
            <p v-if="$v.forms.email.$dirty && !$v.forms.email.required">
                Обязательное поле
            </p>
            <label class="form__label">Телефон</label>
            <input
                v-model="forms.phone"
                id="phone"
                class="form__input"
                type="text"
            />
            <label class="form__label">Страны</label>
            <select
                id="country"
                class="form__select"
                name=""
                v-model="forms.country"
            >
                <option
                    class="form__option"
                    :value="country.value"
                    v-for="country in countries"
                    :key="country.id"
                >
                    {{ country.country }}
                </option>
            </select>
            <select
                v-model="forms.ArryfavoriteTopics"
                id="favoriteTopics"
                class="form__select"
                name=""
                multiple
            >
                <option
                    class="form__option"
                    :value="favoriteTopics.value"
                    v-for="favoriteTopics in favoriteTopics"
                    :key="favoriteTopics.value"
                >
                    {{ favoriteTopics.topics }}
                </option>
            </select>
            <p v-if="!$v.forms.ArryfavoriteTopics.maxLength">
                Максиум 3 любимых темы
            </p>
            <div class="form__box">
                <input type="checkbox" id="rules" v-model="forms.rules" />
                <label for="rules">Согласен(а) с правилами </label>
                <p v-if="$v.forms.rules.$dirty && !$v.forms.rules.$model">
                    Ознакомтесь с правилами
                </p>
                <input type="checkbox" id="mailing" />
                <label for="mailing">Согласие на рассылку новостей</label>
                <input
                    type="radio"
                    id="male"
                    value="male"
                    v-model="forms.gender"
                />
                <label for="male">Мужчина</label>
                <input
                    type="radio"
                    id="woman"
                    value="woman"
                    v-model="forms.gender"
                />
                <label for="woman">Женщина</label>
            </div>
            <button class="form__button" type="submit">Отправить</button>
        </form>
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate';

import {
    required,
    minLength,
    email,
    maxLength,
} from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
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
            favoriteTopics: [
                {
                    topics: 'Искусственный интеллект',
                    value: 'AI',
                },
                {
                    topics: 'Астрономия',
                    value: 'Astronomy',
                },
                {
                    topics: 'Биология и генетика',
                    value: 'Biology',
                },
                {
                    topics: 'Космос',
                    value: 'Space',
                },
                {
                    topics: 'Религия и духовность',
                    value: 'Religion',
                },
                {
                    topics: 'Психология',
                    value: 'Psychology',
                },
                {
                    topics: 'История',
                    value: 'History',
                },
                {
                    topics: 'Медицина и здоровье',
                    value: 'Medicine',
                },
                {
                    topics: 'Инновационные технологии',
                    value: 'Technology',
                },
                {
                    topics: 'Языки программирования и разработка ПО',
                    value: 'Programming',
                },
            ],
            forms: {
                login: ``,
                pass: ``,
                email: ``,
                phone: ``,
                gender: 'male',
                country: `China`,
                rules: false,
                ArryfavoriteTopics: [],
            },
        };
    },
    validations: {
        forms: {
            login: { required, minLength: minLength(5) },
            pass: { required, minLength: minLength(3) },
            email: { required, email },
            rules: true,
            ArryfavoriteTopics: { maxLength: maxLength(3) },
        },
    },
    methods: {
        onSubmit() {
            this.$v.forms.$touch();
            if (!this.$v.forms.$error) {
                console.log('Валидация успешна');
            }
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
    &__box {
        margin: 10px auto;
        display: flex;
        align-items: center;
    }
    &__button {
        display: block;
        width: 100%;
        padding: 1rem;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        border-bottom: 4px solid #ccc;

        font-size: 1rem;
        transition: border-color 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }
    &__button:hover,
    &__button:focus {
        border-color: #000;
        background-color: #000;
        color: #fff;
        border-bottom: 4px solid rgba(255, 0, 0, 0.8);
        border-right: 4px solid rgba(255, 0, 0, 0.8);
    }
    &__button:active {
        border-color: #000;
        background-color: rgba(0, 0, 0, 0.8);
        color: rgba(255, 255, 255, 0.8);
        border-bottom: 4px solid rgba(255, 0, 0, 0.6);
        border-right: 4px solid rgba(255, 0, 0, 0.6);
        transform: translateY(1px);
    }
}

.invalid {
    border: 1px solid red;
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
