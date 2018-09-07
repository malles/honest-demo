<template>
    <div>
        <h2 class="game-title">list</h2>
        <GameDetails :game="game"></GameDetails>
    </div>
</template>

<script>
    import GameDetails from '../components/GameDetails.vue';

    export default {

        name: 'GameDevelopment',

        el: '#app',

        components: {
            GameDetails,
        },

        data: () => ({
            viewMode: 'list',
            game: {
                title: 'gametitle',
            },
        }),

    }
</script>

<style lang="scss">
    @import '../scss/main';

    .game-title {
        font-size: 15px;
        color: $primary-color;
        a {
            text-decoration: none;
        }
    }

</style>