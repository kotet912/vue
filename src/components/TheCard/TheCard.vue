<template>
    <div>
        
        <div class="box-card">
            <img :src="imgUrl" alt="">
            <h2>{{ title }}</h2>
            <span class="price"><b>{{ price }} руб.</b></span>
            <span class="description">Состав: {{ description }}</span>
            <span class="inStock"> На складе {{ inStock }} шт.</span>
            <button> Добавить в корзину </button>

        </div>
    </div>
</template>

<script>
export default {
    props: [
        `title`, `imgUrl`, `price`, `description`, `inStock`, `buttonText`
    ],

}
</script>

<style lang="less">
.box-card {
    width: 320px;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    border: 1px solid silver;

    img {
        width: 100%;
    }
    span{
        margin-bottom: 5px;
    }

    
}
</style>