<template>
    <div>
        <h2>list</h2>
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

<style>

</style>