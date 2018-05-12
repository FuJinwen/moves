<template>
    <div>
        <ul>
            <li @click="goDetail" v-for="item in musicList" :key="item.id">
                <img :src="item.bg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import axios from 'axios'
    export default({
        store,
        data(){
            return{
                musicList:[]
            }
        },
        created () {
            this.$store.commit('routerLinks',{
                color:"rgb(21, 162, 30)",
                title:"music"
            });
            this.getData()
        },
        methods:{
            getData(){
                axios.get('./static/data/musiclist.json').then((res)=>{
                    this.musicList = res.data.albums
                }).catch((res)=>{
                    
                })
            },
            goDetail(){
                this.$router.push('/musicDetail')
            }
        }
    })
</script>
<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
    }
    ul li{
        width: 50%;
        /* float: left; */
    }
    ul li img{
        width: 100%;
    }
</style>
