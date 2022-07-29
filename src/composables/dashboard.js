import axios from "axios"
import { reactive, ref } from "vue";
import { useStore } from "vuex"
import { API_BASE_URL } from "./constants"


export default function useDashboard() {
    const allData = ref([]),
     loader = ref(false),
     loading = ref(false),
     errorMessage = ref(''),
     initState = {
         "investigations": [],
         "ctscan": '',
        "mri": ''
     },
     form = reactive({...initState}),
     error = reactive({...initState}),
     success = ref(false),
     store = useStore();
     error.investigations = ""



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
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            loader.value = false
        })
    })


    const submitData = (async () => {
        loading.value = true

        let array = [];
        for (var i = 0; i < allData.value.length; i++) {
            array.push(0)
        }
        
        form.investigations.map((value) => {
            let index = allData.value.findIndex(x => x.title == value.title)
            array[index] = value.number;
        })

        
        
        array.map((value) => {
            if (value === 0) {
                errorMessage.value = 'Please check at least one item for each list'
                loading.value = false
                return false
            } else {
                errorMessage.value = ''
            }
        })
        
        
        error.investigations = form.investigations.length < 1 ? 'Please select investigations' : ''
        error.ctscan = form.ctscan == '' ? 'Please select ctscan option' : ''
        error.mri = form.mri == '' ? 'Please select mri option' : ''
        
        form.investigations = array
        form.developer = 'Williams Cherechi Williams'


        if (error.investigations == "" && error.ctscan == "" && error.mri == "" && errorMessage.value == "") {

            axios.post(API_BASE_URL + 'investigations', form, {
                headers: {
                    Authorization: `Bearer ${store.state.user_token}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then((response) => {
                response = response.data
                if (response.success == true) {
                    success.value = true
                    Object.assign(form, initState)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                loading.value = false
            })
        }


    })


    return {
        allData, getData, loader, form, success,
        error, submitData, loading, errorMessage
    }
}