<template>
  <q-page>
    <q-header reveal>
      <q-toolbar class="bg-pink text-white shadow-8">
        <q-btn flat round dense icon="keyboard_backspace" class="q-mr-xs" @click.prevent="goBack()" />
        <q-toolbar-title>
          Add Cat
        </q-toolbar-title>
        <q-btn flat round dense icon="add" to="/cats/add" />
      </q-toolbar>
    </q-header>
    <div class="row q-mt-lg">
      <div class="col-xs-12 q-pa-md">
         <q-input v-model="name" label="Name" />
         <q-input v-model="description" label="Description" filled autogrow />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CatsAdd',
  data: () => ({
    cat: {
      name: '',
      description: '',
      photo: '',
      attitudes: [],
      behavior: []
    }
  }),
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
