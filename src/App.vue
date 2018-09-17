<template>

    <div>
        <ul class="menu">
            <li>
                <router-link to="/webdevelopment">WebDevelopment</router-link>
            </li>
            <li>
                <router-link to="/gamedevelopment">GameDevelopment</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>

    </div>

</template>
<script>

    export default {

        name: 'App',

        el: '#app',

        data: () => ({
        }),

        methods: {
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