<template>
    <div>
        <!-- select -->
        <div class="form-group mb-3">
            <label class="text-gray mb-2">{{ title }}</label>
            <select name="" id="" class="form-select input-height"
                :value="modelValue"
                @change="$emit('update:modelValue', $event.target.value)" 
            >
                <option value="">*Specify</option>
                <option :value="item" v-for="(item, index) in options" :key="index">{{ item }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>
    import { ref } from '@vue/reactivity'
    const props = defineProps(['title', 'options', 'modelValue'])
    const title = ref(props.title)
    const options = ref(props.options)
    defineEmits(['update:modelValue'])

</script>

