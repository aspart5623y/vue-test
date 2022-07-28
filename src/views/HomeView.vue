<template>
  <section class="wrapper">
    <Layout>
      <div class="row">
        <div class="col-lg-11 ps-lg-5">
          <h1 class="text-blue fw-semibold">Update Patient Medical Record</h1>
          <p class="text-gray mb-5">Click the tabs to view and edit patient medical details</p>

          <!-- card -->
          <div class="card rounded border-0">
            <div class="card-body py-5 px-lg-5">
              <div class="row justify-content-center">
                <div class="col-lg-ll px-lg-5">
                  <!-- preloader -->
                  <div v-show="loader">
                    <DashboardPreloader />
                    <DashboardPreloader />
                  </div>

                  <div v-show="!loader">
                  <!-- checkbox groups -->
                    <div v-for="(item, index) in allData" :key="index">
                      <CheckboxGroup :title="item.title" :array="item.investigations" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <!-- select -->
                      <Select title="CT Scan"
                        :options="[
                          'Scan Needed In The Left Cerebral Hemisphere',
                          'Other'
                        ]"
                      />
                    </div>

                    <div class="col-lg-6">
                      <!-- select -->
                      <Select title="MRI"
                        :options="[
                          'Full Body MRI',
                          'Other'
                        ]"
                      />
                    </div>

                  </div>

                  
                  <div class="text-end pt-5">
                    <Button title="Save and Send" :action="saveForm" />
                  </div>

                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>


  </section>
</template>

<script setup>
  import Layout from '@/components/Layout'
  import CheckboxGroup from '@/components/molecule/CheckboxGroup'
  import Button from '@/components/atoms/Button'
  import Select from '@/components/atoms/Select'
  import DashboardPreloader from '@/components/molecule/DashboardPreloader'
  import useDashboard from '@/composables/dashboard'
import { onMounted } from '@vue/runtime-core'

  const { allData, getData, loader } = useDashboard()

  onMounted(getData)

  const saveForm = (() => {
    console.log('form saved');
  })


  component: {
    Layout,
    CheckboxGroup,
    Button,
    Select,
    DashboardPreloader
  }
</script>

<style lang="scss" scoped>

</style>