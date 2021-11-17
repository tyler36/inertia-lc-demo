<template>
    <Head title="Login Page" />

    <main class="grid place-items-center min-h-screen">
        <section class="p-8 bg-white rounded-xl max-w-md mx-auto border">
            <h1 class="text-3xl mb-6">Login</h1>

            <form @submit.prevent="submit">
                <div class="mb-6">
                    <label
                        class="block mb-2 text-xs font-bold text-gray-700 upercase"
                        for="email"
                    >Email</label>
                    <input
                        v-model="form.email"
                        class="w-full p-2 border rounded"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                    <div
                        v-if="form.errors.email"
                        v-text="form.errors.email"
                        class="mt-1 text-sm text-red-500"
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block mb-2 text-xs font-bold text-gray-700 upercase"
                        for="password"
                    >Password</label>
                    <input
                        v-model="form.password"
                        class="w-full p-2 border rounded"
                        type="password"
                        name="password"
                        required
                        id="password"
                    />
                    <div
                        v-if="form.errors.password"
                        v-text="form.errors.password"
                        class="mt-1 text-sm text-red-500"
                    />
                </div>

                <div class="mb-6">
                    <button
                        type="submit"
                        class="px-4 py-2 text-white bg-blue-400 rounded hover:bg-blue-500 disabled:bg-gray-100"
                        :disabled="form.processing"
                    >Login</button>
                </div>
            </form>
        </section>
    </main>
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

defineProps({
    layout: null,
});

let form = useForm({
    email: '',
    password: '',
})

let submit = () => {
    form.post('/login');
}
</script>
