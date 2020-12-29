<template>
    <input
            class="base-input"
            v-bind="$attrs"
            @input="$emit('change', $event.target.value)"
    />
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        inheritAttrs: false,
    })
</script>

<style lang="scss" scoped>
    input {
        margin: 4px;
    }
    .base-input {
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
        height: 35px;
        font-size: 14px;
        padding: 0 10px;

        &::-webkit-input-placeholder,
        &::-moz-placeholder { /* Firefox 19+ */
            color: #999;
        }
    }
</style>
