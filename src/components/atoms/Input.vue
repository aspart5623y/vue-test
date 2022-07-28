<template>
    <div>
        <!-- input -->
        <div class="form-group mb-3">
            <label class="text-gray mb-2 text-capitalize">{{ title }}</label>
            <input :type="type" class="form-control input-height" :placeholder="title"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" 
            />
            <small class="text-danger">{{ formError }}</small>
        </div>
    </div>
</template>

<script setup>
    import { ref } from '@vue/reactivity'
    import { computed } from '@vue/runtime-core'
    const props = defineProps(['title', 'type', 'error', 'modelValue'])
    const title = ref(props.title)
    const type = ref(props.type)
    const formError = computed(() => {return props.error})
    defineEmits(['update:modelValue'])
</script>

