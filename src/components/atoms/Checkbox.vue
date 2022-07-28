<template>
    <div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" :value="text" :name="name" :id="id">
            <label class="form-check-label" :for="id">
                {{ text }}
            </label>
        </div>
    </div>
</template>

<script setup>
    import { ref } from '@vue/reactivity'
    const props = defineProps(['id', 'text', 'name'])
    const id = ref(props.id)
    const text = ref(props.text)
    const name = ref(props.name)

</script>

<style scoped>

</style>