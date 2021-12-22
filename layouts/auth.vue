<template>
  <div>
    <header class="flex justify-between items-center px-[4.5rem] py-9">
      <img :src="require('~/static/images/icon.png')" alt="poolapack icon">
      <nuxt-link to="/login" class="text-2xl font-bold">Masuk Akun</nuxt-link>
    </header>
    <main class="py-[8.938rem] flex items-center justify-center gap-x-[8.938rem]">
      <div class="flex flex-col gap-y-14 select-none">
        <img :src="require('~/static/images/hero.png')" alt="hero image">
        <div class="text-center flex flex-col gap-y-3">
          <h1 class="font-bold text-2xl">Kemudahan Mencari Bahan Baku</h1>
          <p class="text-gray-text">One Click to Industry</p>
        </div>
      </div>
      <Nuxt />
    </main>
    <footer class="flex justify-between items-center px-[4.5rem] py-[1.656rem]">
      <p class="font-medium">&copy; {{ new Date().getFullYear() }} - Poolapack.com</p>
      <div class="flex gap-x-[1.625rem]">
        <LinkFooter text="Hubungi Kami" />
        <LinkFooter text="Laporkan Masalah" />
        <LinkFooter text="Karir" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>