<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Book List</h2>
    <ul>
      <li v-for="book in books" :key="book.id" class="mb-2">
        <span class="font-semibold">{{ book.name }}</span> (ISBN:
        {{ book.isbn }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

// Reference to the Firestore collection
const books = ref([]);

const fetchBooks = async () => {
  try {
    const q = query(collection(db, "books"), where("isbn", ">", 1000));
    const querySnapshot = await getDocs(q);
    const booksArray = [];
    querySnapshot.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() });
    });
    books.value = booksArray;
  } catch (error) {
    console.error("Error fetching books: ", error);
  }
};

// Fetch books on component mount
onMounted(() => {
  fetchBooks();
});
</script>

<style scoped>
</style>
