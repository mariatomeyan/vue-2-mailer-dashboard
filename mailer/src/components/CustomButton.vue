<template>
    <button
            v-bind="$attrs"
            v-on="$listeners"
            class="p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
    >
        <slot />
    </button>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        inheritAttrs: false,
    })
</script>
<style scoped>
    button {
        margin: 3px;
    }
</style>
