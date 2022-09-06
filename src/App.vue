<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <header class="flex text-white justify-between px-48 h-14 lg:h-20 leading-10 items-center">
     <router-link to="/"><div class="logo font-medium text-3xl">NTruong manga</div></router-link> 
      <Navbar/>
      <div class="search">search</div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>footer</footer>
  </div>
</template>
<style lang="scss">
 ::-webkit-scrollbar{
  width: 10px;
 }
 ::-webkit-scrollbar-thumb{
  background-color: #9CA3AF;
  border-radius: 10px;
 }
  header{
    background-color: #1F1F1F;
  }
</style>
<script>
import Navbar from './components/navbar.vue';

  
export default {
  components: {
    Navbar
},
  setup() {
    
  },
}
</script>