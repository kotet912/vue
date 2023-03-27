<template>
    <main class="FindMatch">
        <h1>Игра на соответствие карточек</h1>
        <p>Количество карточек</p>
        <input class="FindMatch__grid-size" type="number" v-model.number="gridSize" />
        <div class="FindMatch__container">
            <TheSlip
                v-for="(size, index) in gridSize"
                :key="index"
                :number="numbers[index]"
                @selected="selectCard(index)"
            />
        </div>
    </main>
</template>

<script>
import TheSlip from '../components/TheSlip/TheSlip.vue';
export default {
    name: 'FindMatch',
    data() {
        return {
            gridSize: 12,
            selectedCards: [],
            matchedCards: [],
            numbers: [],
        };
    },

    methods: {
        selectCard(index) {
            this.selectedCards.push(index);

            if (this.selectedCards.length === 2) {
                const index1 = this.selectedCards[0];
                const index2 = this.selectedCards[1];

                if (this.numbers[index1] === this.numbers[index2]) {
                    this.matchedCards.push(index1, index2);
                }

                this.selectedCards = [];

                if (this.matchedCards.length === this.gridSize) {
                    alert('Вы победили!');
                }
            }
        },
        getRandomNumbers() {
            const numbers = [];

            for (let i = 0; i < this.gridSize / 2; i++) {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                numbers.push(randomNumber, randomNumber);
            }

            this.numbers = this.shuffleArray(numbers);
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }

            return array;
        },
    },
    mounted() {
        this.getRandomNumbers();
    },

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
