<template>

    <div>
        <ul class="menu">
            <li><a @click="navigate('WebDevelopment')">WebDevelopment</a></li>
            <li><a @click="navigate('GameDevelopment')">GameDevelopment</a></li>
        </ul>
        <div>
            <component :is="activePage"></component>
        </div>

    </div>

</template>
<script>

    import GameDevelopment from './pages/GameDevelopment.vue';
    import WebDevelopment from './pages/WebDevelopment.vue';

    export default {

        name: 'App',

        el: '#app',

        components: {
            WebDevelopment,
            GameDevelopment,
        },

        data: () => ({
            activePage: 'WebDevelopment'
        }),

        methods: {
            navigate(page) {
                this.activePage = page;
            },
        },

    }

</script>
<style lang="scss">
    ul.menu {
        display: flex;
        li {
            list-style: none;
            padding: 0;
        }
    }
</style>