<template>
    <div
        class="TheSlip"
        :class="{ 'is-selected': isSelected, 'is-matched': isMatched, 'is-flipped': isFlipped }"
        @click="handleClick"
    >
        <div class="TheSlip__content TheSlip__content--front">
            <div class="TheSlip__number">{{ number }}</div>
        </div>
        <div class="TheSlip__content TheSlip__content--back">
            <div class="TheSlip__icon">✅</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheSlip',
    props: {
    number: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isSelected: false,
      isMatched: false,
      isFlipped: false
    };
  },
  methods: {
    handleClick() {
      if (!this.isMatched) {
        this.isSelected = !this.isSelected;
        this.isFlipped = !this.isFlipped;

        this.$emit('selected');
      }
    }
  }
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
