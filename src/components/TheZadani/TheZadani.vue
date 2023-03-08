<template>
    <div class="zadani">
        <span>Выберите количество продуктов:</span>
        <div class="zadani__qauntity">
            <button @click="qauntityDown">-</button>
            <input type="number" :min="min" :max="max" :value="qauntity">
            <button @click="qauntityUp">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qauntity: 1,
            min: 0,
            max: 10,
        }
    },
    methods: {
        qauntityUp() {
            if (this.qauntity == this.max) {
                console.log(this.max)
                return
            }
            this.qauntity++
        },
        qauntityDown() {
            if (this.qauntity == this.min) {
                console.log(this.min)
                return
            }
            this.qauntity--
        }
    }


}
</script>