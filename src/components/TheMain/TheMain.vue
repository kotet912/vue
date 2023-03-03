<template>
    <div class="star">
        {{ star }}
        <input type="number" v-model="numberValue">
        <ol>
            <li v-for="k in typeNumber" :key="k">
                {{ k }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "TheMain",
    computed: {
        typeNumber() {
            return Number(this.numberValue)
        }
    },
    props: {
        star: Number,
    },
    data() {
        return {
            numberValue: 0,
        }
    },
};
</script>

<style src="./TheMain.less" lang="less"></style>
