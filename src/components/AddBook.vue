<template>
  <div class="flex items-center justify-center min-h-screen">
    <Card class="mx-auto max-w-lg">
      <form @submit.prevent="addBook">
        <CardHeader>
          <CardTitle class="text-2xl">
            Add Book
          </CardTitle>
          <CardDescription>
            Enter the book details below to add a new book
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="isbn">ISBN</Label>
              <Input
                v-model="isbn"
                id="isbn"
                type="text"
                placeholder="Enter ISBN"
                required
              />
            </div>
            <div class="grid gap-2">
              <Label for="name">Book Name</Label>
              <Input
                v-model="name"
                id="name"
                type="text"
                placeholder="Enter book name"
                required
              />
            </div>
            <span v-if="formError" class="text-red-500">{{ formError }}</span>
            <Button type="submit" class="w-full">
              Add Book
            </Button>
            <Button type="button" @click="clearAllBooks" class="w-full">
              Clear All Books
            </Button>
          </div>
        </CardContent>
      </form>
      <Card class="mx-auto max-w-sm mt-2">
      <CardHeader>
        <CardDescription>
          Books with ISBN > 1000
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BookList />
      </CardContent>
    </Card>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue';
import { db,  firebaseApp } from '@/firebaseConfig';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import BookList  from '@/components/BookList.vue';
import { ChevronDown } from 'lucide-vue-next'

const isbn = ref('');
const name = ref('');
const formError = ref('');
//if fetch books instantly
// const fetchBooks = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, 'books'))
//     books.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   } catch (error) {
//     console.error('Error fetching books: ', error)
//   }
// }

const addBook = async () => {
  try {
    const isbnNumber = Number(isbn.value);
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number');
      return;
    }

    await addDoc(collection(db, 'books'), {
      isbn: isbnNumber,
      name: name.value
    });

    isbn.value = '';
    name.value = '';
    alert('Book added successfully!');
  } catch (error) {
    console.error('Error adding book: ', error);
  }
};

const clearAllBooks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'books'))
    querySnapshot.docs.forEach(async doc => {
      await deleteDoc(doc.ref)
    })
    books.value = []
    alert('Books cleared successfully!')
  } catch (error) {
    console.error('Error clearing books: ', error)
  }
};
</script>