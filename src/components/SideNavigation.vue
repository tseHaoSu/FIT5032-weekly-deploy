<template>
  <div class="flex h-screen">
  <div class="w-64 bg-gray-100 hidden md:block">
  <div class="flex h-full max-h-screen flex-col gap-2">
    <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <Package2 class="h-6 w-6" />
        <span class="">CapsuleLogs</span>
      </a>
      <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
        <Bell class="h-4 w-4" />
        <span class="sr-only">Toggle notifications</span>
      </Button>
    </div>
    <div class="flex-1">
      <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          :class="[
            'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
            item.active ? 'bg-muted text-primary' : 'text-muted-foreground'
          ]"
          @click.prevent="item.action === 'logout' ? logout() : null"
        >
          <component :is="item.icon" class="h-4 w-4" />
          {{ item.name }}
          <Badge v-if="item.badge" class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {{ item.badge }}
          </Badge>
        </a>
      </nav>
    </div>
    <div class="mt-auto p-4">
      <Card>
        <CardHeader class="p-2 pt-0 md:p-4">
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" class="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
  </div>

  <!-- Mobile Navigation Menu -->
  <Sheet>
    <SheetTrigger as-child>
      <Button
        variant="outline"
        size="icon"
        class="shrink-0 md:hidden"
      >
        <Menu class="h-5 w-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="flex flex-col">
      <nav class="grid gap-2 text-lg font-medium">
        <a
          href="#"
          class="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 class="h-6 w-6" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          :class="[
            'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground',
            item.active ? 'bg-muted text-foreground' : 'text-muted-foreground'
          ]"
        >
          <component :is="item.icon" class="h-5 w-5" />
          {{ item.name }}
          <Badge v-if="item.badge" class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {{ item.badge }}
          </Badge>
        </a>
      </nav>
      <div class="mt-auto">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" class="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </SheetContent>
  </Sheet>
  </div>
</template>

<script setup>
import { Bell, Home, ShoppingCart, Package, Users, LineChart, Package2, Menu, LogOut } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { signOut } from '@/firebaseConfig'
import { auth } from '@/firebaseConfig'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useColorMode } from '@vueuse/core'

const router = useRouter()
const user = useUserStore()
const navItems = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Orders', icon: ShoppingCart, href: '#', badge: '6' },
  { name: 'Products', icon: Package, href: '#', active: true },
  { name: 'Customers', icon: Users, href: '#' },
  { name: 'Analytics', icon: LineChart, href: '#' },
  { name: 'Logout', icon: LogOut, href: '#', action: 'logout' }
]

const logout = async () => {
  try {
    await signOut(auth)
    //clear user data
    console.log('User signed out')
    user.logout()
    router.push('/login')
  } catch (error) {
    console.error('Error signing out: ', error)
  }
}
const mode = useColorMode()
</script>