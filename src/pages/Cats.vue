<template>
  <q-page>
    <q-header reveal>
      <q-toolbar class="bg-pink text-white shadow-8">
        <Logo size="30px" :square="true" />
        <q-toolbar-title>
          Kitty Factory
        </q-toolbar-title>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="add" to="/cats/add" />
      </q-toolbar>
    </q-header>
    <div class="row q-pt-md">
      <div class="col-xs-12">
        <CatInfiniteScrollList />
      </div>
      <!-- <div class="col-xs-12 col-md-8 offset-md-2">
        <CatPaginatedList />
      </div> -->
    </div>
  </q-page>
</template>

<script>
import Logo from '../components/Logo'
// import CatPaginatedList from '../components/CatPaginatedList'
import CatInfiniteScrollList from '../components/CatInfiniteScrollList'

export default {
  name: 'Cats',
  components: {
    Logo,
    // CatPaginatedList,
    CatInfiniteScrollList
  }
}
</script>
