<template>
    <div>
        <h5 class="fw-semibold text-blue mb-4">{{ title }}</h5>

        <div class="row">
            <!-- check box -->
            <div class="col-6 col-md-4 col-lg-3 my-3" v-for="(item, key) in array" :key="key">
                <Checkbox :text="item.title" :name="item.investigation_type_id" :id="title + item.id" />
            </div>
        </div>
        <hr class="border-bottom border-gray my-4">
    </div>
</template>

<script setup>
    import Checkbox from '@/components/atoms/Checkbox'

    import { reactive, ref } from '@vue/reactivity'

    const props = defineProps(['title', 'array'])
    const title = ref(props.title)
    const array = reactive({...props.array})

    component: {
        Checkbox
    }

</script>

<style lang="scss" scoped>

</style>