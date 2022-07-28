<template>
    <div>
        <nav class="navbar navbar-light bg-transparent py-4 navbar-expand-lg">
            <div class="container">

                <button class="navbar-toggler border-0" @click="$emit('sidebarToggle')">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <ul class="navbar-nav ms-auto d-flex flex-row align-items-center">
                    <!-- nav item -->
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            Take a Tour
                        </a>
                    </li>

                    <!-- nav item -->
                    <li class="nav-item">
                        <a href="#" class="nav-link position-relative">
                            <span class="position-absolute badge border border-light rounded-circle bg-danger p-1"></span>
                            <i class="fas fa-envelope"></i>
                        </a>
                    </li>

                    
                    <!-- nav item -->
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fas fa-bell"></i>
                        </a>
                    </li>


        
                    <!-- nav item -->
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src="@/assets/avatar.jpeg" alt="" width="35" class="img-fluid rounded-circle">
                        </a>
                    </li>

                    
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
    
    defineEmits(['sidebarToggle'])



</script>


<style scoped>
    .nav-link {
        display: inline-flex;
        padding: 0px 15px !important;
        color: var(--color-light-blue);
    }
    .nav-link .badge {
        display: block;
        top: -4px;
        right: 10px;
        transform: translate(middle);
    }
</style>