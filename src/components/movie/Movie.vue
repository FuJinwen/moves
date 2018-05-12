<template>
    <div>
        <ul>
            <li @click='toDetail(val.id)' v-for="val in datas" :key="val.id" class="items">
                <div class="item-img">
                    <img :src="val.img" alt="">
                </div>
                <div class="item-info">
                    <h4>{{val.nm}}</h4>
                    <p>{{val.ver}}</p>
                    <p>主演：{{val.star}}</p>
                    <p>{{val.showinfo}}</p>
                </div> 
            </li>
        </ul>
        <div>
            <img src="@/assets/img/loding.gif" alt="" v-show="isLoading">
        </div>
        <div>
            <h3>到底了</h3>
        </div>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import axios from 'axios'
    export default({
        data(){
            return{
                datas:[],
                isLoading:false,
                isEnd:false,
            }
        },
        store,
        created () {
            this.$store.commit('routerLinks',{
                color:"rgb(33,150,243)",
                title:"movie"
            });
            this.getData();
            },
            mounted(){
                window.onscroll=()=>{
                    let scrollTop = document.documentElement.scrollTop;/*滚动条距离上边的距离 */
                    let scrollHeight = document.documentElement.scrollHeight;/*整个滚动窗口的高度 */
                    let clientHeight = document.documentElement.clientHeight;/*滚动条的高度 */
                    if(scrollTop+clientHeight==scrollHeight){
                       if(!this.isLoading){
                           if(this.isEnd){
                            this.isLoading = false;
                            }
                            else{
                                this.isLoading = true;
                                setTimeout(()=>{
                                    console.log('1')
                                    this.getData();
                                },200)
                            } 
     
                        }
                    }
                }
            },
    methods:{
        getData(){
            axios.get(API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&offset="+this.datas.length+"&limit=10")
            .then((response)=> {
                this.datas = this.datas.concat(response.data.data.movies);
                this.isLoading = false;
                if(response.data.data.movies.length==0){
                    this.isEnd=true;
                }
            })
            .catch((error)=> {
                console.log(error);
            })
        },
        toDetail(val){
            this.$router.push({name:'MovieDetail',params:{movieId:val}})
        }
    }      
    })
</script>
<style scoped>
    .items{
        border-bottom: 1px solid #333;
        margin-left: .1rem;
        margin-bottom: .1rem;
        padding-bottom:.1rem ;
        display: flex;
    }
    .item-img{
        flex-grow: 1;
        width: 0;
    }
    .item-info{
        flex-grow: 2;
        width: 0;
        padding-left: .1rem;

    }
</style>
