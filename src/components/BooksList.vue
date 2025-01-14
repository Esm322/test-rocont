<template>
  <ul class="section__list list-reset">
    <BookItem v-for="book in booksData" :key="book.id"
      :id="book.id"
      :name="book.bookName"
      :author="book.bookAuthor"
      :year="book.bookYear"
      :genre="book.bookGenre" />
  </ul>
</template>

<script setup>
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

import BookItem from './BookItem.vue';

const store = useStore();
const { booksData } = storeToRefs(store);
</script>
