<template>
    <Head>
        <title>My App </title>
        <meta name="description" content="Information about my app" head-key="description">
    </Head>

    <section class="p-6 bg-gray-100">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">My App</h1>
                <p class="text-sm ml-4">Welcome back, {{ username }}!</p>
            </div>

            <Nav />
        </header>
    </section>

    <section class="p-6">
        <div class="mx-auto max-w-3xl">
            <slot />
        </div>
    </section>

</template>


<script type="text/javascript">
import Nav from "./Nav.vue"
import {Head} from '@inertiajs/inertia-vue3'

export default {
    components: {Head, Nav},

    computed: {
        username() {
            return this.$page.props.auth.user.username;
        }
    }
};
</script>
