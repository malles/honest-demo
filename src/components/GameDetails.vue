<template>

    <div>
        <h1 class="game-title">{{ game.title }}</h1>
        <div class="game-thing">Thing</div>
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
<style lang="scss">
    @import '../scss/main';
    .game-thing {
        color: $primary-color;
    }

</style>