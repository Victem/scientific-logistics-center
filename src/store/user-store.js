const userStore = {
    namespaced: true,
    state:{
        isAuthorized: false
    },
    getters: {
        isAuthorized: state => state.isAuthorized
    },
    actions: {},
    mutations:{
        logIn(state){
            state.isAuthorized = true;
        },

        logOut(state){
            state.isAuthorized = false;
        }
    },

}
export default userStore