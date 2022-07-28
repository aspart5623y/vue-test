<template>
    <div>
        <button type="submit" class="btn btn-blue p-2 px-3" @click.prevent="action">
            {{ title }}
        </button>
        &nbsp;
        <span v-show="loading">
            <i class="fas fa-sync-alt fa-spin"></i>
        </span>
    </div>
</template>

<script setup>
    import { ref } from '@vue/reactivity'
    import { computed } from '@vue/runtime-core'
    const props = defineProps(['title', 'action', 'loading'])
    const title = ref(props.title)
    const action = ref(props.action)
    const loading = computed(() => {return props.loading})

</script>
