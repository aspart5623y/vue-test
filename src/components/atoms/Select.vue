<template>
    <div>
        <!-- select -->
        <div class="form-group">
            <label class="text-gray mb-2">{{ title }}</label>
            <select name="" id="" class="form-select input-height">
                <option value="">*Specify</option>
                <option :value="item" v-for="(item, index) in options" :key="index">{{ item }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>
    import { ref } from '@vue/reactivity'
    const props = defineProps(['title', 'options'])
    const title = ref(props.title)
    const options = ref(props.options)
</script>

