<template>  
  <div class="form">
    <h4 class="text-2xl font-bold">Daftar Akun</h4>
    <p class="text-gray-text">Sudah punya akun? <nuxt-link to="/login" class="text-yellow-primary font-bold">Login disini</nuxt-link></p>
    <form class="pt-14 flex flex-col gap-y-6 pb-[0.875rem]" @submit.prevent="register(email, password)">
      <div class="input">
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email" class="bg-gray-bg border border-[#EEF2F5] rounded-lg text-sm p-4 w-[26.813rem]" placeholder="Masukkan email">
      </div>
      <div class="input">
        <label for="firstName">Nama Depan</label>
        <input v-model="firstName" type="text" name="firstName" class="bg-gray-bg border border-[#EEF2F5] rounded-lg text-sm p-4 w-[26.813rem]" placeholder="Masukkan nama depan">
      </div>
      <div class="input">
        <label for="lastName">Nama Belakang</label>
        <input v-model="lastName" type="text" name="lastName" class="bg-gray-bg border border-[#EEF2F5] rounded-lg text-sm p-4 w-[26.813rem]" placeholder="Masukkan nama belakang">
      </div>
      <div class="input">
        <label for="password">Password</label>
        <div class="bg-gray-bg border border-[#EEF2F5] rounded-lg text-sm p-4 flex items-center w-[26.813rem]">
          <input v-model="password" type="password" name="password" placeholder="Masukkan kata sandi" class="w-full bg-transparent">
          <vs-icon color="#9797AA" icon="visibility_off"></vs-icon>
        </div>
        <p class="text-xs text-gray-text">Kombinasi angka, huruf besar dan huruf kecil</p>
      </div>
      <div class="input">
        <label for="confirmPassword">Konfirmasi Password</label>
        <input v-model="confirmPassword" type="password" name="confirmPassword" placeholder="Masukkan ulang kata sandi" class="bg-gray-bg border border-[#EEF2F5] rounded-lg text-sm p-4 flex items-center w-[26.813rem]">
        <p class="text-xs text-red-500">{{ confirmPassword !== password ? 'Password tidak sesuai' : '' }}</p>
      </div>
      <div class="flex flex-col gap-y-9">
        <p class="text-gray-text">Punya akun? Silahkan ke halaman <nuxt-link to="/login" class="text-yellow-primary font-bold">Login</nuxt-link></p>
        <input type="submit" value="Selanjutnya" class="bg-yellow-primary text-white font-bold w-full py-[0.938rem] rounded-lg cursor-pointer">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    async login(email, password) {
      if(!email) {
        return alert('masukkan email')
      }
      if(!password) {
        return alert('masukkan password')
      }
      const success = await this.$store.dispatch('api/user/login', email)
      if(!success) {
        return alert('username atau password salah')
      }
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>