<template>

    <div>
        <h1>{{ game.title }}</h1>
    </div>

</template>
<script>

    export default {

        name: 'GameDetails',

        props: {
            game: Object,
        },

    }

</script>
<style scoped>

</style>