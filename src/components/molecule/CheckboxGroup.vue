<template>
    <div>
        <h5 class="fw-semibold text-blue mb-4">{{ title }}</h5>

        <div class="row">
            <!-- check box -->
            <div class="col-6 col-md-4 col-lg-3 my-3" v-for="(item, key) in array" :key="key">
                <Checkbox :text="item.title" :name="item.investigation_type_id" :id="title + item.id"
                    v-model="count[key]"
                 />
            </div>
        </div>
        <hr class="border-bottom border-gray my-4">
    </div>
</template>

<script setup>
    import Checkbox from '@/components/atoms/Checkbox'

    import { reactive, ref } from '@vue/reactivity'
    import { computed, watch } from '@vue/runtime-core'

    const props = defineProps(['title', 'array'])
    const title = ref(props.title)
    const array = reactive({...props.array})
    const count = ref([]);
    const emit = defineEmits(['investigationEvent:number'])

    const result = computed(() => {
        return count.value.filter(element => element == true)
    })

    watch(result, async(newResult, oldResult) => {
        let number = newResult.length
        // console.log(title.value, number)
        emit('investigationEvent:number', number)
    })

    component: {
        Checkbox
    }

</script>

<style lang="scss" scoped>

</style>