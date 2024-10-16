<script setup lang>
import { ref, computed } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, Search, MoreVertical, RefreshCw } from 'lucide-vue-next'
import  SideNavigation  from '@/components/SideNavigation.vue'

const users = ref([
  {
    identifier: 'tsehaosu@gmail.com',
    providers: ['google.com'],
    created: 'Sep 11, 2024',
    signedIn: 'Sep 11, 2024',
    uid: 'qfYuP1rCPUa56R6emvg53dM...'
  },
  {
    identifier: 'eastinsu55@gmail.com',
    providers: ['google.com'],
    created: 'Sep 11, 2024',
    signedIn: 'Sep 11, 2024',
    uid: 'IG7CfbNaXeSt2uDE1SCoWp4...'
  },
])

const searchQuery = ref('')
const rowsPerPage = ref(50)

const filteredUsers = computed(() => {
  return users.value.filter(user => 
    user.identifier.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.uid.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const addUser = () => {
  console.log('Add user clicked')
}
</script>

<template>
    <div class="flex h-screen">
<SideNavigation> </SideNavigation>
<div class="flex-1 bg-white p-4">
    <Card class="w-full max-w-4xl">
      <CardHeader>
        <CardTitle class="text-2xl">User Management</CardTitle>
        <CardDescription>
          Search, view, and manage user accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex items-center mb-4">
          <div class="relative flex-grow">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by email address, phone number, or user UID"
              class="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button @click="addUser" class="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            Add user
          </button>
          <button class="ml-2 p-2 text-gray-400 hover:text-gray-200 focus:outline-none">
            <RefreshCw class="h-4 w-4" />
          </button>
          <button class="ml-2 p-2 text-gray-400 hover:text-gray-200 focus:outline-none">
            <MoreVertical class="h-4 w-4" />
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-left text-gray-400 border-b border-gray-700">
                <th class="pb-2 font-semibold">Identifier</th>
                <th class="pb-2 font-semibold">Providers</th>
                <th class="pb-2 font-semibold">
                  Created
                  <ChevronDown class="inline ml-1" />
                </th>
                <th class="pb-2 font-semibold">Signed In</th>
                <th class="pb-2 font-semibold">User UID</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in filteredUsers" :key="user.uid" class="border-b border-gray-800">
                <td class="py-3">{{ user.identifier }}</td>
                <td class="py-3">
                  <span v-for="provider in user.providers" :key="provider" class="mr-2">
                    <img v-if="provider === 'google.com'" src="@/assets/Logo-google-icon-PNG.png" alt="Google" class="w-5 h-5 inline">
                  </span>
                </td>
                <td class="py-3">{{ user.created }}</td>
                <td class="py-3">{{ user.signedIn }}</td>
                <td class="py-3">{{ user.uid }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 flex justify-between items-center text-gray-400">
          <div class="flex items-center">
            <span class="mr-2">Rows per page:</span>
            <select 
              v-model="rowsPerPage" 
              id="rowsPerPage"
              class="bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>50</option>
              <option>100</option>
              <option>200</option>
            </select>
          </div>
          <div>
            1 - 2 of 2
            <button class="ml-2 p-1 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <ChevronDown class="h-4 w-4 transform rotate-90" />
            </button>
            <button class="ml-2 p-1 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <ChevronDown class="h-4 w-4 transform -rotate-90" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
   </div>
</template>