<template>
    <h1>photo</h1>
</template>
<script>
     import store from '@/vuex/store'
    export default({
        store,
        created () {
            this.$store.commit('routerLinks',{
                color:"rgb(89, 93, 121)",
                title:"photo"
            })
        }
    })
</script>
<style scoped>
    
</style>
