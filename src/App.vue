<template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="changeMessage">clique aqui</button>
    </div>
  </template>
  
  <script>
  import './styles/style-geral.css'
  export default {
    data() {
      return {
        message: "se clicar é guei"
      };
    },
    methods: {
      changeMessage() {
        this.message = "ih, seu baitola!";
      }
    }
  };
  </script>
  
  <style>
  h1 {
    color: var(--color-text-dark);
  }
  button {
    margin-top: 50px;
  }
  </style>
  