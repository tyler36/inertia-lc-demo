<template>
    <Link
        class="text-black hover:underline"
        :class="{'font-bold underline': active}"
        >
        <slot  />
    </Link>
</template>


<script type="text/javascript">
import {Link} from '@inertiajs/inertia-vue3';

export default {
    components: {Link},
    props: {active: Boolean},
};
</script>
