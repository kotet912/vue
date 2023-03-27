<template>
    <main class="FindMatch">
        <h1>Игра на соответствие карточек</h1>
        <p>Количество карточек</p>
        <input class="FindMatch__grid-size" type="number" v-model.number="gridSize">
            <div class="FindMatch__container">
                <TheSlip v-for="size in gridSize" :key="size" />
            </div>
        
    </main>
</template>

<script>
import TheSlip from '../components/TheSlip/TheSlip.vue';
export default {
    name: 'FindMatch',
    data() {
        return {
            gridSize:12,
        };
    },

    methods: {
    },
    mounted() {},
    components: {
        TheSlip,
    },
};
</script>

<style lang="less">
.FindMatch {
    &__container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>
