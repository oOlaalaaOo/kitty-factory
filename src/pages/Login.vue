<template>
  <q-page padding>
    <div class="row q-pt-lg">
      <div class="col-xs-12 col-md-4 offset-md-4">
        <div class="q-pa-md text-center">
          <Logo :size="logoSize" :square="logoSquare" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4 offset-md-4">
        <div class="q-pa-lg">
          <q-input
            label="Email"
            clearable
            bottom-slots
            name="email"
            v-model="auth.email"
            v-validate="{ required: true, email: true }"
            :error="errors.has('email')"
            :error-message="errors.first('email')" />
          <div class="q-pt-sm q-pb-sm"></div>
          <q-input
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            clearable
            bottom-slots
            name="password"
            v-model="auth.password"
            v-validate="{ required: true, min: 5 }"
            :error="errors.has('password')"
            :error-message="errors.first('password')">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="q-pt-sm q-pb-sm"></div>
          <q-btn color="purple" rounded class="full-width" label="Sign In" @click.prevent="validateFields" :loading="authProcessing" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Logo from '../components/Logo'

export default {
  name: 'Login',
  components: {
    Logo
  },
  data: () => ({
    logoSize: '150px',
    logoSquare: true,
    auth: {
      email: '',
      password: ''
    },
    isPwd: true,
    authProcessing: false
  }),
  created: function () {},
  methods: {
    validateFields () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.login()
        }
      })
    },
    login () {
      this.authProcessing = true
      this.$store.dispatch('auth/login', this.auth).then(resp => {
        console.log(resp)
        setTimeout(() => {
          this.authProcessing = false
          this.$router.push('cats')
        }, 500)
      }).catch(err => {
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
          if (err.response.status === 401) {
            this.$q.notify({
              message: 'Invalid Credentials',
              position: 'top'
            })
          }
        } else if (err.request) {
          console.log(err.request)
        } else {
          console.log('err', err.message)
        }
        console.log(err.config)
        this.authProcessing = false
      })
    }
  }
}
</script>
