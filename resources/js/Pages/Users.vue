<template>
    <h1 class="text-xl font-bold">Users</h1>
    <Nav />

    <div style="margin-top: 125vh">
        <p>The current time is {{ time }}.</p>
        <Link href="/users" class="text-blue-500 hover:underline" preserve-scroll>Refresh</Link>
    </div>
</template>

<script>
import Nav from "../Shared/Nav.vue"
import {Link} from '@inertiajs/inertia-vue3'

export default {
    components: {Link, Nav},

    props: {time: String},
};
</script>
