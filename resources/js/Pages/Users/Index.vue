<template>
    <Head>
        <title>Settings</title>
    </Head>

    <div class="flex justify-between mb-6">
      <div class="flex items-center">
        <h1 class="text-3xl">Users</h1>
        <Link v-if="can.createUser" href="/users/create" class="text-blue-500 text-sm ml-3">New User</Link>
      </div>

      <input v-model="search" type="text" placeholder="Search" class="border px-2 rounded-lg" >
    </div>



    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="user in users.data" :key="user.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="">
                        <div class="text-sm font-medium text-gray-900">
                          {{ user.name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td v-if="user.can.editUser" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link :href="`/user/${user.id}/edit`" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- paginator -->
    <Pagination :links="users.links" class="mt-6"></Pagination>
</template>

<script setup>
import {ref, watch, defineAsyncComponent, onMounted} from "vue";
import {Inertia} from "@inertiajs/inertia";
import debounce from "lodash/debounce";
import {useCurrentUser} from '@/Composables/useCurrentUser';

let Pagination = defineAsyncComponent(() => import("@/Shared/Pagination.vue"))

  let props = defineProps({
      users: Object,
      filters: Object,
      can: Object,
  })

  let search = ref(props.filters.search);

  watch(search, debounce(function(value) {
    Inertia.get('/users', { search: value }, {
      preserveState: true,
      replace: true
    })
  }, 300 ));

  let currentUser = useCurrentUser();
  console.log(currentUser.isALifer());
</script>
