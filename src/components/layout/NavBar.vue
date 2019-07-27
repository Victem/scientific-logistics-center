<template>
    <div class="nav-bar">
        <div class="nav-links">
            <router-link class="menu-link" :to="{name: 'home-page'}">Главная страница</router-link>
            <router-link class="menu-link" :to="{name: 'about-page'}">О программе</router-link>
        </div>
        <div class="user-bar">
            <dx-button @click="logOut" 
                        text="Выход" 
                        type="danger">
            </dx-button>
        </div>
    </div>
</template>
<script>

import { DxButton } from 'devextreme-vue';
export default {
    name: 'nav-bar',
    components: { DxButton },
    data(){
        return {

        }
    },

    methods: {
        logOut(){
            let vm = this;
            vm.$store.commit('user/logOut');
            location.reload();
        }
    }
}
</script>
<style scoped>
    .nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #efefef;
    }
    .nav-bar .nav-links {
        display: flex;
    }
    .nav-bar .nav-links .menu-link {
        padding: 5px 10px;
        text-decoration: none;
        color: #292929;
    }

    .nav-bar .nav-links .menu-link.router-link-exact-active {
        color: #2d90d8;
    }
</style>