<template>
    <section class="login-page">
        <form class="login-form"  @submit="logIn" method="post">
            <h1>Авторизация</h1>
            <dx-form :form-data.sync="model">
                <dx-simple-item data-field="userName" 
                                :label="{text: 'Пользователь'}"
                                :editor-options="{label: 'Введите имя пользователя'}">
                    <dx-required-rule message="Введите имя пользователя"/>
                </dx-simple-item>
                 <dx-simple-item :editor-options="{mode:'password', message : 'Пароль'}"
                                :label="{text: 'Пароль'}"
                                 data-field="password">
              <dx-required-rule message="Введите пароль"/>
            </dx-simple-item>
                <dx-button-item :button-options="{
                                    text: 'Войти',
                                    type: 'default',
                                    useSubmitBehavior: true
                                }"/>
            </dx-form>
        </form>
    </section>
</template>
<script>
import DxForm,{ 
    DxLabel,
    DxButton,
    DxSimpleItem,
    DxRequiredRule,
    DxButtonItem
} from 'devextreme-vue/form';
export default {
    name: 'login-page',
    components: {
        DxButton,
        DxLabel,
        DxButton,
        DxSimpleItem,
        DxForm,
        DxRequiredRule,
        DxButtonItem
    },
    data(){
        return {
            model: {
                userName: null,
                password: null
            },

        }
    }, 
    methods: {
        logIn(event){
            console.log(event)
            event.preventDefault();
            let vm = this;
            vm.$store.commit('user/logIn');
            vm.$router.push(vm.$route.query.redirect)
        }
    }
}
</script>
<style scoped>
.login-page{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    min-height: 100vh;
}
.login-page .login-form {
    width: 400px;
    padding: 15px;
    box-shadow: 0 0 5px 0px #cecece;
}
</style>


