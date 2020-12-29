<template>
    <div class="">
        <div class="header bg-gray-100 p-3 text-blue-500 shadow rounded-t">
             <h2 v-if="title"> {{title}}</h2>
        </div>
        <div class="flex flex-wrap justify-center body overflow-y-scroll h-80">
          <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToolContainer",
        props: {
            title: {
                type: String,
                required: false,
                default: () => ''
            }
        }
    }
</script>

