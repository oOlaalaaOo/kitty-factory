<template>
  <div class="row">
    <template v-if="fetchingCats">
      <div class="col-xs-12">
        <div class="text-center q-pt-lg">
          <q-spinner
            color="green"
            size="3em" />
        </div>
      </div>
    </template>
    <template v-else>
      <template v-if="catList.length">
        <div class="col-xs-12 col-sm-4 col-md-4 q-pa-sm" v-for="(cat, index) in catList" :key="index">
          <q-card class="rounded-borders cursor-pointer shadow-5">
            <img :src="cat.photo" width="100%" />
            <q-card-section>
              <div class="q-pl-sm q-pr-sm">
                <div class="text-h6 text-center">{{ cat.name }}</div>
                <div class="text-subtitle2">{{ cat.user.name }}</div>
                <div class="text-body2 text-justify">{{ cat.description }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12">
          <div class="q-pa-lg flex flex-center">
            <q-pagination
              v-model="currentPage"
              :max="maxPage"
              color="pink"
              :ellipses="true"
              :directionLinks="true"
            >
            </q-pagination>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="text-h4 text-weight-light text-center q-pt-lg">No Cats Available...</div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CatPaginatedList',
  data: () => ({
    fetchingCats: true,
    currentPage: 1,
    maxPage: 1
  }),
  created: function () {
    this.getCats()
  },
  watch: {
    currentPage: function (val) {
      this.getCats()
    }
  },
  computed: {
    ...mapState({
      catList (state) {
        return state.cat.list
      },
      catMeta (state) {
        return state.cat.meta
      }
    })
  },
  methods: {
    async getCats () {
      this.fetchingCats = true
      await this.$store.dispatch('cat/fetch', {
        page: this.currentPage
      }).then((resp) => {
        setTimeout(() => {
          this.maxPage = this.catMeta.last_page
          this.fetchingCats = false
        }, 1000)
      })
    }
  }
}
</script>
