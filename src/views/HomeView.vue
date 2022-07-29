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
                  <p class="text-danger">{{ error.investigations }}</p>
                  <p class="text-danger">{{ errorMessage }}</p>
                  
                  <!-- checkbox groups -->
                    <div v-for="(item, index) in allData" :key="index">
                      <CheckboxGroup :title="item.title" :array="item.investigations"
                        @investigation-event:number="setFromData($event, index, item.title)"
                       />
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
                        v-model="form.ctscan"
                      />
                      <p class="text-danger">{{ error.ctscan }}</p>
                    </div>

                    <div class="col-lg-6">
                      <!-- select -->
                      <Select title="MRI"
                        :options="[
                          'Full Body MRI',
                          'Other'
                        ]"
                        v-model="form.mri"
                      />
                      <p class="text-danger">{{ error.mri }}</p>
                    </div>
                  </div>
                  
                  <!-- submit button -->
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


    <!-- S U C C E S S     M O D A L -->
    <div class="modal fade" id="successModal" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center py-5">
            <i class="fas fa-check-circle text-success" style="font-size: 50px"></i>
            <h2 class="text-dark fw-bold">Success</h2>
            <p class="text-muted">Record Saved successfully</p>
            <button class="btn btn-success px-5" data-bs-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup>
  import Layout from '@/components/Layout'
  import CheckboxGroup from '@/components/molecule/CheckboxGroup'
  import Button from '@/components/atoms/Button'
  import Select from '@/components/atoms/Select'
  import DashboardPreloader from '@/components/molecule/DashboardPreloader'
  import useDashboard from '@/composables/dashboard'
  import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
  import { computed, onMounted, watch } from '@vue/runtime-core'

  const { allData, getData, loader, errorMessage, success,
        loading, form, error, submitData } = useDashboard()
  

  onMounted(getData)

  const setFromData = (number, index, title) => {
    if (form.investigations.find(x => x.title == title)) {
      let index = form.investigations.findIndex(x => x.title == title)
      if (number > 0) {
        form.investigations[index].number = number
      } else {
        form.investigations.splice(index, 1)
      }
    } else {
      form.investigations.push({
        "title": title,
        "number": number,
      })
    }
  }


  watch (success, async(newSuccess, oldSuccess) => {
    if (newSuccess == true) {
      var successModal = document.getElementById('successModal')
      var popUp = new bootstrap.Modal(successModal)
      popUp.show()
 
      // setInterval(() => {
      //   location.reload()
      // }, 3000)
    }
  })

  const saveForm = (() => {
    submitData()
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