<template>
  <div class="login py-5">
    <div class="row align-items-center justify-content-center h-100 overflow-y-auto">
      <div class="col-lg-4 col-md-7 col-sm-10">
        <div class="card shadow-sm rounded border-0">
          <div class="card-body py-5">
            <form>
              <h2 class="fw-bold text-blue text-center">Login</h2>
              <span class="alert alert-danger text-center d-block my-3" v-if="callbackErr">
                {{ callbackErr }}
                <p class="mb-1 fw-light" v-for="(item, index) in callbackData" :key="index">{{ item }}</p>
              </span>
              <Input type="email" title="email" :error="error.email" v-model="form.email" />
              <Input type="password" title="password" :error="error.password" v-model="form.password" />
              <Button title="Login" :loading="loading" :action="clickAction" /> 
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Input from '@/components/atoms/Input'
  import Button from '@/components/atoms/Button'
  import userAuth from '@/store/auth'


  const { loading, form, error, login, callbackErr, callbackData } = userAuth();
  form.email = "tester@kompletecare.com"
  form.password = "password"
  const clickAction = (() => {
    login()
  })


  const callback = ((payload) => {
    console.log('imput emmited', payload);
  })


  components: {
    Button,
    Input
  }

</script>

<style scoped>
  .login {
    height: 95vh;
    width: 95vw;
  }
</style>