<template>
    <div class="TicTacToe">
        <div class="board" :class="{ disabled: winner }">
            <div
                class="cell"
                :class="{
                    playerX: board[0][0] === 'X',
                    playerO: board[0][0] === 'O',
                    cellX: board[0][0] === 'X',
                    cellO: board[0][0] === 'O',
                }"
                @click="makeMove(0, 0)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[0][1] === 'X',
                    playerO: board[0][1] === 'O',
                    cellX: board[0][1] === 'X',
                    cellO: board[0][1] === 'O',
                }"
                @click="makeMove(0, 1)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[0][2] === 'X',
                    playerO: board[0][2] === 'O',
                    cellX: board[0][2] === 'X',
                    cellO: board[0][2] === 'O',
                }"
                @click="makeMove(0, 2)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[1][0] === 'X',
                    playerO: board[1][0] === 'O',
                    cellX: board[1][0] === 'X',
                    cellO: board[1][0] === 'O',
                }"
                @click="makeMove(1, 0)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[1][1] === 'X',
                    playerO: board[1][1] === 'O',
                    cellX: board[1][1] === 'X',
                    cellO: board[1][1] === 'O',
                }"
                @click="makeMove(1, 1)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[1][2] === 'X',
                    playerO: board[1][2] === 'O',
                    cellX: board[1][2] === 'X',
                    cellO: board[1][2] === 'O',
                }"
                @click="makeMove(1, 2)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[2][0] === 'X',
                    playerO: board[2][0] === 'O',
                    cellX: board[2][0] === 'X',
                    cellO: board[2][0] === 'O',
                }"
                @click="makeMove(2, 0)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[2][1] === 'X',
                    playerO: board[2][1] === 'O',
                    cellX: board[2][1] === 'X',
                    cellO: board[2][1] === 'O',
                }"
                @click="makeMove(2, 1)"
            ></div>
            <div
                class="cell"
                :class="{
                    playerX: board[2][2] === 'X',
                    playerO: board[2][2] === 'O',
                    cellX: board[2][2] === 'X',
                    cellO: board[2][2] === 'O',
                }"
                @click="makeMove(2, 2)"
            ></div>
        </div>

        <div class="winner" v-if="winner">{{ winner }} wins!</div>
    </div>
</template>

<script>
// import cell from '../components/TheCell/TheCell.vue';
export default {
    name: 'TicTacToe',

    data() {
        return {
            board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ],
            currentPlayer: 'X',
            winner: '',
        };
    },

    mounted() {},

    methods: {
        makeMove(row, col) {
            if (!this.board[row][col] && !this.winner) {
                this.$set(this.board[row], col, this.currentPlayer);
                this.checkWinner();
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            }
        },
        checkWinner() {
            for (let i = 0; i < 3; i++) {
                if (
                    this.board[i][0] &&
                    this.board[i][0] === this.board[i][1] &&
                    this.board[i][1] === this.board[i][2]
                ) {
                    this.winner = this.board[i][0];
                    return;
                }
                if (
                    this.board[0][i] &&
                    this.board[0][i] === this.board[1][i] &&
                    this.board[1][i] === this.board[2][i]
                ) {
                    this.winner = this.board[0][i];
                    return;
                }
            }
            if (
                this.board[0][0] &&
                this.board[0][0] === this.board[1][1] &&
                this.board[1][1] === this.board[2][2]
            ) {
                this.winner = this.board[0][0];
                return;
            }
            if (
                this.board[0][2] &&
                this.board[0][2] === this.board[1][1] &&
                this.board[1][1] === this.board[2][0]
            ) {
                this.winner = this.board[0][2];
                return;
            }
            if (!this.board.flat().includes('')) {
                this.winner = 'Tie';
            }
        },
    },

    components: {
        // cell,
    },
};
</script>

<style lang="less">
.TicTacToe {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
    background-color: #efefef;
    padding: 10px;
    border-radius: 5px;
}

.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 50px;
    cursor: pointer;
    border-radius: 3px;
    padding: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.playerX {
    color: #c0392b;
}

.playerO {
    color: #2980b9;
}

.cellX::before {
    content: 'X';
}

.cellO::before {
    content: 'O';
}

.winner {
    font-size: 36px;
    text-align: center;
    margin-bottom: 10px;
}
</style>
