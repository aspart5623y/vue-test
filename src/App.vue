<template>
  <router-view/>
</template>

<style>
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    user-select: none;
  }
  :root {
    --color-gray: #A0A0A0;
    --color-white: #fff;
    --color-blue: #2A36A4;
    --color-dark-blue: #382F90;
    --color-light-blue: #392f90ab;
    --body-color: #F5F5FB;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background: var(--body-color) !important;
  }
  .btn, .form-control, .form-select, .navbar-toggler, .form-check-input {
    box-shadow: none !important;
    user-select: auto;
  }
  .form-control:focus, .form-select:focus {
    border-color: var(--color-blue) !important;
  }
  .btn-blue {
    background-color: var(--color-blue) !important; 
    border-color: var(--color-blue) !important;
    color: var(--color-white) !important;
    font-weight: 700 !important;
  }
  .btn-blue:hover {
    background-color: var(--color-dark-blue) !important; 
    border-color: var(--color-dark-blue) !important;
  }
  .input-height {
    height: 40px;
  }
  .form-select {
    color: var(--color-gray) !important;
  }
  .text-blue {
    color: var(--color-dark-blue);
  }
  .text-gray {
    color: var(--color-gray)
  }
  .fw-semibold {
    font-weight: 700;
  }
  .form-check .form-check-input {
    height: 18px !important;
    width: 18px !important;
    margin-right: 10px !important;
  }
  .form-check .form-check-input:checked {
    background-color: var(--color-dark-blue);
    border-color: var(--color-dark-blue);
  }
  .border-gray {
    border-color: var(--color-gray);
  }
</style>