<template>
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr v-if="table_header">
            <th v-for="(item, index) in table_header" :key="index" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{item.label}}
            </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-if="table_body">
            <td v-for="(item, index) in table_body" :key="index"  class="px-6 py-4 whitespace-nowrap">
                <component v-if="item.component" :is="item.component">
                </component>
                <span v-else>
                    {{item.label}}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
            </td>
        </tr>
        <tr v-else>
            {{empty_message}}
        </tr>

        <!-- More rows... -->
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "CustomTable",
        props: {
            table_header: {
                type: Array,
                required: true,
                default: () => []
            },
            table_body: {
                type: Array,
                required: false,
                default: () => []
            },
            empty_message: {
                type: String,
                required: false,
                default: () => 'There is no data to show you...'
            }
        }
    }
</script>

<style scoped>

</style>
