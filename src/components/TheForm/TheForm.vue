<template>
    <div class="form">
        <form class="form__element" action="">
            <label class="form__label">Логин</label>
            <input class="form__input" type="text" />
            <label class="form__label">Пароль</label>
            <input class="form__input" type="text" />
            <label class="form__label">Email</label>
            <input class="form__input" type="text" />
            <label class="form__label">Телефон</label>
            <input class="form__input" type="text" />
            <label class="form__label">Страны</label>
            <select class="form__select" name="" id="">
                <option class="form__option" value="" v-for="country in countries" :key="country">
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

// .form {
//     width: 300px;
//     height: 300px;
//     display: flex;
//     flex-direction: column;
//     padding: 0 10%;

//     label {
//         margin-bottom: 5px;
//     }

// }
.form {
  background-image: linear-gradient(to bottom right, #a6b1e1, #f8cdda);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.form__element {
  background-color: #fff;
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  animation: pulse 5s infinite alternate ease-in-out;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.1);
  }
}

.form__label {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
}

.form__input,
.form__select {
  display: block;
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.2s ease-in-out;
}

.form__input:focus,
.form__select:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 5px #d4af37;
}

.form__option {
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
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
