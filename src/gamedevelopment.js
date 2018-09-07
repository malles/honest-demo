
import GameDetails from './components/GameDetails.vue';


const GameDevelopment = new Vue({

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

    template: `<div>list <GameDetails :game="game"></GameDetails></div>`,

});