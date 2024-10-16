<template>
<div class="flex items-center justify-center min-h-screen">
  <Card class="mx-auto max-w-sm">
    <form @submit.prevent="login">
    <CardHeader>
      <CardTitle class="text-2xl">
        Login
      </CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            v-model="email"
            id="email"
            type="email"
            placeholder="m@example.com"
          />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <a href="#" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Input v-model="password" id="password" type="password" />
        </div>
        <span v-if="formError" class="text-red-500" > {{ formError }}</span>
        <Button @click="checkEmailAndPassword" type="submit" class="w-full">
          Login
        </Button>
        <Button variant="outline" class="w-full">
          Login with Google
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <router-link to="/register" class="text-blue-500">
          Sign up
        </router-link>
      </div>
    </CardContent>
    </form>
  </Card>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword, useFirebaseAuth } from '@/firebaseConfig'
import { useUserStore } from '@/stores/userStore'

const email = ref('')
const password = ref('')
// const formError = ref<string | null>(null)

/**
 * Login the user with the provided email and password
 */
const auth = useFirebaseAuth()
const router = useRouter()
const userStore = useUserStore()

/**
 * handle login form submission
 */

const checkEmailAndPassword = () => {
  if (!email.value) {
    formError.value = 'Please enter your email'
    return false
  }
  if (!password.value) {
    formError.value = 'Please enter your password'
    return false
  }
  return true
}
const login = async () => {
  console.log('Login function called')

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user
    console.log('User logged in:', user)

    // Set the user role based on the email
    const role = user.email === 'admin@example.com' ? 'admin' : 'user'
    userStore.login(user.email, role)
    alert('Login successful')
    
    if (role === 'admin') {
      console.log('Admin logged in')
      router.push('/admin')
    } else {
      console.log('User logged in')
      router.push('/home')
    }
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed: ' + (error instanceof Error ? error.message : error));
  }
}
</script>