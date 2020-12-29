<template>
    <div class="form-field">
        <div class="form-field__title">
            {{ title }}
        </div>
        <div class="form-field__input">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    })
</script>

<style lang="scss" scoped>
    .form-field {
        display: flex;
        margin-top: 20px;
    }
    .form-field__title {
        line-height: 35px;
        font-size: 14px;
        width: 200px;
        text-transform: uppercase;
        color: #355990;
        opacity: 0.7;
    }
    .form-field__input {
        flex-grow: 1;
    }
</style>
