import axios from "axios"
import { ref } from "vue";
import { useStore } from "vuex"
import { API_BASE_URL } from "./constants"


export default function useDashboard() {
    const allData = ref([]),
     loader = ref(false),
     store = useStore();


    const getData = (async () => {
        loader.value = true

        axios.get(API_BASE_URL + 'investigations', {
            headers: {
                Authorization: `Bearer ${store.state.user_token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then((response) => {
            response = response.data
            allData.value = response.data
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            loader.value = false
        })
    })


    return {
        allData, getData, loader
    }
}