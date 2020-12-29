<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div>

        <div class="flex flex-col ">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                     <CustomTable :table_header="table_header" :table_body="emails">


                     </CustomTable>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import CustomTable from "../components/CustomTable";
    export default {
        name: "EmailActivities",
        components: { CustomTable },
        data() {
            return {
                table_header: [
                    {
                        label: 'From',
                        key:  'from'
                    },
                    {
                        label: 'To',
                        key: 'to'
                    },
                    {
                        label: 'Subject',
                        key: 'subject'
                    },
                    {
                        label: 'Message',
                        key: 'message'
                    },
                    {
                        label: 'Actions',
                        key: 'actions'
                    }
                ]
            }
        },
        computed: {
            emails: function () {
                return this.$store.getters['email/emails']
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
