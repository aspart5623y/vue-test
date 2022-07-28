<template>
  <div class="sidebar shadow-sm bg-white" :class="activeClass ? 'active' : ''">
    <div class="sidebar-content">
      <ul class="sidebar-nav list-unstyled">
        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="/dashboard" active-class="active">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fas fa-th-large"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Dashboard</span>
          </router-link>
        </li>

        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="#">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fa fa-user"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Profile</span>
          </router-link>
        </li>

        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <a draggable="false" class="sidebar-link" data-bs-toggle="collapse" href="#collapseExample">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fas fa-box-open"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Services</span>
            <!-- icon -->
            <span class="float-end">
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>


          <div class="collapse" id="collapseExample">
            <ul class="sidebar-dropdown list-unstyled">
              <li>
                <a href="#" draggable="false" class="sidebar-dropdown-item">Item</a>
              </li>
            </ul>
          </div>
        </li>

        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="#">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fas fa-clipboard"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Medical Record</span>
          </router-link>
        </li>

        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="#">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fas fa-wallet"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Care Wallet</span>
          </router-link>
        </li>

        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="#">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fas fa-comment-alt"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Messages</span>
          </router-link>
        </li>
        
         <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="#">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fa fa-boxes"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Resources</span>
          </router-link>
        </li>


        <!-- sidebar item -->
        <li class="sidebar-item">
          <a href="#" draggable="false" class="sidebar-link px-0">
            <div class="border-bottom"></div>
          </a>
        </li>



        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="#">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fa fa-cog"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Account Settings</span>
          </router-link>
        </li>

        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <router-link draggable="false" class="sidebar-link" to="#">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fa fa-question-circle"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Contact Support</span>
          </router-link>
        </li>

        <!-- sidebar item -->
        <li class="sidebar-item">
          <!-- router link -->
          <a draggable="false" class="sidebar-link" href="#" @click.prevent="logout">
          <!-- item -->
            <span class="sidebar-icon">
              <i class="fa fa-sign-out-alt"></i>
            </span>
            <!-- text -->
            <span class="sidebar-text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <a href="javascript:void(0)" class="sidebar-overlay" :class="activeClass ? 'active' : ''" @click="closeSidebar"></a>
</template>

<script setup>
  import userAuth from '@/store/auth'
  import { ref } from '@vue/reactivity';
  import { computed } from '@vue/runtime-core';
  const { logout } = userAuth();
  const props = defineProps(['active'])
  const emit = defineEmits(['sidebarToggle'])
  const activeClass = computed(() => {return props.active})



  const closeSidebar = (() => {
    document.querySelector('.sidebar').classList.remove('active')
    document.querySelector('.sidebar-overlay').classList.remove('active')
    emit('sidebarToggle')
  })
  

</script>

<style scoped>
  .sidebar {
    position: fixed;
    height: 100vh;
    width: 250px;
    z-index: 1000;
    overflow-y: auto;
    transition: .2s all ease-in-out;
  }
  .sidebar-overlay {
    position: fixed;
    height: 100vh;
    z-index: 999;
    width: 0px;
    background: #00000099;
  }

  .sidebar-nav {
    padding-top: 100px;  
  }

  .sidebar-link {
    display: block;
    padding: 15px;
    color: var(--color-gray);
    text-decoration: none;
  }
  .sidebar-link.active {
    background: var(--color-blue);
    color: var(--color-white);
  }
  .sidebar-link .sidebar-icon {
    display: inline-block;
    text-align: center;
    width: 50px;
  }
  .sidebar-dropdown-item {
    display: block;
    padding: 15px 45px;
    color: var(--color-gray);
    text-decoration: none;
  }

  @media screen and (max-width: 991px) {
    .sidebar {
      left: -300px;
    }
    .sidebar.active {
      left: 0px;
    }

    .sidebar-overlay.active {
      width: 100vw;
    }
  }
</style>