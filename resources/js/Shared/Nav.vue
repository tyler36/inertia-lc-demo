<template>
    <nav class="ml-6">
        <ul class="flex list-disc space-x-4 list-inside">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'"
                    >Home</NavLink
                >
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'Users'"
                    >Users</NavLink
                >
            </li>
            <li>
                <NavLink
                    href="/settings"
                    :active="$page.component === 'Settings'"
                    >Settings</NavLink
                >
            </li>
            <li>
                <Link
                    class="text-blue-500 hover:underline"
                    href="/logout"
                    method="post"
                    as="button"
                    >Log out</Link
                >
            </li>
        </ul>
    </nav>
</template>


<script type="text/javascript">
    import { Link } from '@inertiajs/inertia-vue3';
    import NavLink from './NavLink.vue';

    export default {
        components: { Link, NavLink },
    };
</script>
