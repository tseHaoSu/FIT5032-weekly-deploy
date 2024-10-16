<template>
<div class="flex items-center justify-center min-h-screen">
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-xl">
        Sign Up
      </CardTitle>
      <CardDescription>
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
    <form @submit.prevent="register">
      <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div class="grid gap-2">
            <Label for="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            v-model="email"
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input v-model="password" id="password" type="password" />
        </div>
        <Button type="submit" class="w-full">
          Create an account
        </Button>
      </div>
      </form>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <router-link to="/login" class="text-blue-500">
          Sign in
        </router-link>
      </div>
    </CardContent>
  </Card>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword, useFirebaseApp, useFirebaseAuth } from '@/firebaseConfig'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const firstName = ref('')
const lastName = ref('')

/**
 * Firebase authentication
 */
const firebaseApp = useFirebaseApp()
const auth = useFirebaseAuth()
const router = useRouter()

/**
 * Register a new user with email and password with async/await 
 */
const register = async () => {
   console.log('Register function called') 

  if (!password.value) {
    alert('Password is required')
    return
  }
   
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user
    console.log('User registered:', user)
    alert('Registration successful')
    router.push('/login')
  } catch (error) {
    console.error('Registration failed:', error)
    alert('Registration failed: ' + error.message || error)
  }
}


</script>