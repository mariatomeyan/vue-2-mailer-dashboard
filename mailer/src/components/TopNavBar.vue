<template>
    <div class="flex items-center">
        <div v-if="menu && menu.length" class="w-full flex    md:bg-transparent "  >
            <CustomRouterLink v-for="(item, index) in menu" :key="index"  :link="item.link"> {{item.label}} </CustomRouterLink>
        </div>
    </div>
</template>

<script>
    var menu = [
        {
            link: '/',
            label: 'Home',
        },
        {
            link: '/new-email',
            label: 'New Email'
        }
    ]
    import CustomRouterLink from "../components/CustomRouterLink"
    export default {
        name: "TopNavBar",
        components: { CustomRouterLink },
        data () {
            return {
                menu: []
            }
        },
        created() {
            this.menu = menu
        }
    }
</script>

<style scoped>

</style>
