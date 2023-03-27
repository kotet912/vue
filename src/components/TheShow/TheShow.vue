<template>
    <div>
        <button @click="switchButtun">{{ buttonText }}</button>
        <span>Фильтры:</span>
        <button :class="imgFiltrs.sepia ? 'active' : ''" @click="imgFiltrs.sepia = !imgFiltrs.sepia">Степия</button>
        <button :class="imgFiltrs.border ? 'active' : ''" @click="imgFiltrs.border = !imgFiltrs.border">Рамка</button>
        <button :class="imgFiltrs.small ? 'active' : ''" @click="imgFiltrs.small = !imgFiltrs.small">Уменьшение</button>
        <button :class="imgFiltrs.shadow ? 'active' : ''" @click="imgFiltrs.shadow = !imgFiltrs.shadow">Тень</button>
        <p></p>
        <span>Размеры</span>
        <p></p>

        <li>Ширина: {{ imgSizes.currentWidth }}</li>
        <p></p>
        <input type="range" :min="imgSizes.minWidth" :max="imgSizes.maxWidth" :value="imgSizes.currentWidth"
            @input="imgSizes.currentWidth = $event.target.value">
        <p></p>

        <li>Высота: {{ imgSizes.currentHeight }}</li>
        <p></p>

        <input type="range" :min="imgSizes.minHeight" :max="imgSizes.maxHeight" :value="imgSizes.currentHeight"
            @input="imgSizes.currentHeight = $event.target.value">
        <p></p>

        <li>Поворот: {{ imgSizes.rotate }}</li>
        <p></p>
        <input type="range" :min="imgSizes.minRotate" :max="imgSizes.maxRotate" :value="imgSizes.rotate"
            @input="imgSizes.rotate = $event.target.value">
        <p></p>

        <img src="./ 1.jpg" v-if="imgVisibel" :class="imgFiltrs" :style="imgStyles">
        <p v-else>Сноубордист пропал ;)</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgVisibel: true,
            buttonText: `Спраятать`,
            imgFiltrs: {
                sepia: false,
                border: false,
                small: false,
                shadow: false,
            },
            imgSizes: {
                minWidth: 1,
                minHeight: 1,
                maxWidth: 680,
                maxHeight: 480,
                currentWidth: null,
                currentHeight: null,
                rotate:0,
                minRotate:0,
                maxRotate:360,
            }
        }
    },
    computed: {
        imgStyles() {
            return {
                width: `${this.imgSizes.currentWidth}px`,
                height: `${this.imgSizes.currentHeight}px`,
                transform: `rotate(${this.imgSizes.rotate}deg)`,
            }
        },
    },
    methods: {
        switchButtun() {
            if(this.imgVisibel){
                this.imgVisibel = false,
                this.buttonText = `Показать`

            }else{
                this.imgVisibel = true,
                this.buttonText = `Спраятать`
            }
        }
    }
}
</script>

<style lang="less">
img {
    width: 20%;
    &.sepia {
        filter: sepia(100%);
    }
    &.border {
        border: 2px dashed red;
    }
    &.small {
        width: 10%;
    }
    &.shadow{
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
}

button {
    &.active {
        background-color: rgb(225, 225, 225);
    }
}
</style>