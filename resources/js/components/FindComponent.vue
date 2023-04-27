<template>
    <div class="text-center">
        <h1>Find {{this.$route.query.name}} Query</h1>
        <button class="me-1 btn btn-primary" @click="goBack">Back</button>
        <button class="ms-1 btn btn-primary" @click="goHome">Go Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        goHome(){
            this.$router.push({name: 'home'})
        }
    }
}
</script>