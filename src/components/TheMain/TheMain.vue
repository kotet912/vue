<template>
    <div class="star">
        {{ star }}
        <input type="number" v-model.number="numberValue" >
        <ol>
            <li v-for="k in numberValue" :key="k">
                {{ k }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "TheMain",
    
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
