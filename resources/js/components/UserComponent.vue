<template>
    <div class="text-center mt-2">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <h1>{{ $route.params.username }}'s User Page</h1>
        <div id="nav">
            <router-link :to="routeToHello">Hello</router-link> |
            <router-link :to="routeToBye">Bye</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    computed: {
        routeToHello(){
            return `/user/${this.$route.params.username}/hello`
        },
        routeToBye(){
            return `/user/${this.$route.params.username}/bye`
        },
    }
}
</script>
<style>

</style>