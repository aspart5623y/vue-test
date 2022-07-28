import { API_BASE_URL } from "@/composables/constants";
import axios from "axios";
import { reactive, ref } from "vue";
import { useStore } from "vuex";

export default function userAuth() {
    const loading = ref(false),
     initState = {
        email: '',
        password: ''
     },
     form = reactive({...initState}),
     error = reactive({...initState}),
     callbackErr = ref(''),
     callbackData = ref([]),
     store = useStore();


    const login = (async () => {
        loading.value = true
        error.email = form.email == "" ? "please enter your email" : ""
        error.password = form.password == "" ? "please enter your password" : ""

        

        if (error.email == "" && error.password == "") { 

            await axios.post(API_BASE_URL + "login", form) 
            .then(response => {
                response = response.data
                if (response.success) {
                    store.dispatch('setUser', response.data.token) 
                } 
            })
            .catch(error => {
                error = error.response.data 
                if (!error.success) {
                    callbackErr.value = error.message
                    if (error.data) {
                        callbackData.value = error.data
                    } else {
                        callbackData.value = ""
                    }
                    loading.value = false
                }
            }) 
            .finally(() => { 
                loading.value = false
            }) 

        } else { 
            loading.value = false 
        }
    })

    const logout = (async () => {
        store.dispatch('destroyUser') 
    })




    return {
        loading, form, error, login, callbackErr,
        callbackData, logout
    }
}