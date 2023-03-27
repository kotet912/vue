<template>
    <div class="TheSlip" :class="{ 'is-flipped': isFlipped }" @click="flip">
        <div class="TheSlip__content" :class="{ 'is-hidden': isFlipped }">
            {{ randomNumber }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheSlip',
    data() {
        return {
            isFlipped: false,
            randomNumber: Math.floor(Math.random() * 10) + 1,
        };
    },

    methods: {
        flip() {
            this.isFlipped = !this.isFlipped;
        },
    },
    mounted() {},
};
</script>

<style lang="less">
.TheSlip {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    height: 200px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out;

    h3 {
        margin: 0;
        font-size: 24px;
        color: #333;
    }
}
.TheSlip.is-flipped {
    transform: rotateY(180deg);
}
.TheSlip__content.is-hidden {
    visibility: hidden;
}
</style>
