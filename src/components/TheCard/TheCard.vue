<template>
  <div>
    <div class="box-card">
      <img :src="imgUrl" alt="" />
      <div class="box-card__description">
        <h2>{{ title }}</h2>
        <span class="price">
          <b>{{ price }} руб.</b>
        </span>
        <span class="description">Состав: {{ description }}</span>
        <span class="inStock"> На складе {{ inStock }} шт.</span>
        <button>Добавить в корзину</button>
      </div>
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

  img {
    width: 100%;
  }

  span {
    margin-bottom: 5px;
  }

  &__description {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-top: auto;
  }
}
</style>
