<template>
    <div>
        <p>{{ todo.text }}</p>
        <li>Это обычное сообщение: {{ messeger }}</li>
        <li>Это НЕ обычное сообщение: {{ reversMesseger }}</li>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    data() {
        return {
            messeger: "а это не обычное сообщение"
        }
    },
    computed: {
        reversMesseger: function () {
            return this.messeger.split('').reverse().join('')

        }
    }
};
</script>
