<template>
  <div class="home text-center mt-2">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <h1>
        Home
    </h1>
    <div class="mt-5">
        <input type="text" class="form-control" style="max-width:30rem; display:inline-block;" v-model="dataInput">
        <button class="btn btn-primary ms-2" @click="userClick">User</button>
        <button class="btn btn-primary mx-1" @click="findClick">Find</button>
    </div>
    <br style="margin-bottom: 5rem">
    <button class="btn btn-primary mt-1" @click="testNavigasiClick">Tes Navigasi</button>
    <br>
  </div>
</template>

<script>
export default {
    data(){
        return {
            dataInput: ""
        }
    },
    methods: {
        userClick(){
            this.$router.push({name: 'user', params: {username: this.dataInput}})
        },
        findClick(){
            this.$router.push({name: 'find', query: {name: this.dataInput}})
        },
        testNavigasiClick(){
            this.$router.push({name: 'test_navigasi'})
        }
    }
}
</script>

<style scoped>
input {
    border: 1px black solid;
}
</style>
