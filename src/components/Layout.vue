<template>
  <section class="wrapper">
    <Sidebar :active="activeClass" @sidebar-toggle="toggleSidebar" />
    
    <div class="main-body">
        <Navbar @sidebar-toggle="toggleSidebar" />
        <main class="pb-5">
          <div class="container">
            <slot></slot>
          </div>
        </main>
    </div>
    
  </section> 
</template>

<script setup>
  import Sidebar from '@/components/Sidebar'
  import Navbar from '@/components/Navbar'
  import { ref } from '@vue/reactivity';

  const activeClass = ref(false)

  const toggleSidebar = (() => {
    activeClass.value = !activeClass.value
  })


  component: {
    Sidebar,
    Navbar
  }
</script>

<style scoped>
  .main-body {
    padding-left: 250px;
  }
  @media screen and (max-width: 991px) {
    .main-body {
      padding-left: 0px;
    }
  }
</style>