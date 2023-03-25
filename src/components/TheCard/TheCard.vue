<template>
  <div class="box-card">
      <img :src="imgUrl" alt="" class="box-card__image" />
      <div class="box-card__content">
          <h2 class="box-card__title">{{ title }}</h2>
          <span class="box-card__price">
              <b class="box-card__price-value">{{ price }} руб.</b>
          </span>
          <span class="box-card__description">Состав: {{ description }}</span>
          <span class="box-card__in-stock">На складе {{ inStock }} шт.</span>
          <button class="box-card__button" type="button" @click="addToCart">
              Добавить в корзину
          </button>
      </div>
  </div>
</template> 


<script>
export default {
    props: {
        title: {
            type: String,
            validator(value) {
                return value.length < 20;
            },
        },
        imgUrl: {
            type: String,
            default: `https://emb-beauty.ru/biologique-recherche/wp-content/uploads/sites/3/2020/05/not_found.jpg`,
        },
        price: {
            type: Number,
            default: 0,
            Request: true,
        },
        description: {
            type: String,
        },
        inStock: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        addToCart() {
            this.$emit('addToCart');
        },
    },
};
</script>

<style lang="less">
.box-card {
    width: 320px;
    height: 500px;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    border: 1px solid silver;

    &__image {
        width: 100%;
    }

    &__price {
        margin-bottom: 5px;
    }

    &__content {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        margin-top: auto;
    }
    &__description {
        margin-bottom: 5px;
    }
    &__in-stock {
        margin-bottom: 5px;
    }
    &__button {
        border: 1px solid green;
        background-color: rgb(207, 222, 207);

        cursor: pointer;
    }
    &__button:hover {
        background-color: rgb(171, 185, 171);
    }
}
</style>
