<template>
    <div>
        <h1>Графики</h1>
        <Chart :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import Chart from '../components/TheChart/TheChart.vue';

export default {
    components: {
        Chart,
    },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [65, 59, 80, 81, 56, 55, 40],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
};
</script>

<style>
h1 {
    text-align: center;
}
</style>
