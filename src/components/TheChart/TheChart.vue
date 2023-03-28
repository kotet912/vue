<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
        options: {
            type: Object,
            default: () => ({}),
        },
        type: {
            type: String,
            default: 'line',
        },
    },
    mounted() {
        // Сначала получаем контекст канвы
        const ctx = this.$refs.canvas.getContext('2d');

        // Затем создаем объект графика с помощью библиотеки Chart.js
        this.chart = new Chart(ctx, {
            type: this.type,
            data: this.data,
            options: this.options,
        });
    },
    beforeDestroy() {
        // Очищаем ресурсы после уничтожения компонента
        this.chart.destroy();
    },
};
</script>
