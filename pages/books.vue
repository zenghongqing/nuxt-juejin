<template>
  <div class="books">
    <div class="list-wrap">
      <div class="book-list">
        <book-item v-for="(list, index) in lists" :key="index" :item="list"></book-item>
      </div>
    </div>
  </div>
</template>
<script>
  import BookItem from '~/components/books/book-item'
  export default {
    components: {
      BookItem
    },
    head () {
      return {
        title: '小册',
        meta: [
          { hid: 'books custom title', name: 'books', content: 'books custom title description' }
        ]
      }
    },
    async asyncData ({store}) {
      const params = {
        src: 'web',
        pageNum: 1
      }
      let [ res ] = await Promise.all([
        store.dispatch('getListByLastTime', params)
      ])
      return {
        lists: res.d
      }
    }
  }
</script>
