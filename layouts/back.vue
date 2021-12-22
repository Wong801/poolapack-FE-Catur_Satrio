<template>
  <div>
    <header class="shadow-form z-20 relative">
      <div class="flex items-center justify-end px-[6.25rem] pt-[1.125rem] pb-[0.875rem]">
        <div class="flex gap-x-6 items-center">
          <nuxt-link to="/sample" class="flex text-lg items-center">
            <img :src="require('~/static/svg/clipboard.svg')" alt="">
            Sampel
          </nuxt-link>
          <nuxt-link to="/wishlist" class="flex text-lg items-center">
            <vs-icon color="#383535" icon="favorite_border" size="1.5rem"></vs-icon>
            Wishlist
          </nuxt-link>
        </div>
        <div class="px-8 flex gap-x-5">
          <nuxt-link to="#" class="flex items-center">
            <vs-icon color="#383535" icon="view_in_ar" size="1.5rem"></vs-icon>
          </nuxt-link>
          <nuxt-link to="#" class="flex items-center">
            <vs-icon color="#383535" icon="inbox" size="1.5rem"></vs-icon>
          </nuxt-link>
        </div>
        <div v-if="$store.state.api.user.jwt">
          <nuxt-link to="#" class="flex items-center gap-x-3">
            <vs-icon color="#383535" icon="account_circle" size="1.5rem"></vs-icon>
            User
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link to="/login" class="flex items-center gap-x-3">
            <vs-icon color="#383535" icon="account_circle" size="1.5rem"></vs-icon>
            Login
          </nuxt-link>
        </div>
      </div>
      <div class="border-t-[#EEF2F5] border-t-2 px-[6.25rem]">
        <div class="py-[2.125rem] flex items-center justify-between">
          <img :src="require('~/static/images/icon_dark.png')" alt="poolapack icon">
          <button class="text-lg">
            Kategori &#65088;
          </button>
          <div class="rounded-[3px] border-2 border-[#EEF2F5] flex items-center p-[1px] w-3/5">
            <input type="text" class="px-[1.563rem] py-[0.875rem] w-full" placeholder="Search...">
            <div class="flex items-center bg-[#F9BE00] py-[0.813rem] px-[1.938rem] rounded-[3px]">
              <vs-icon color="#fff" icon="search"></vs-icon>
            </div>
          </div>
          <nuxt-link to="/cart">
            <img src="~/static/svg/cart.svg" alt="shopping cart">
          </nuxt-link>
        </div>
        <div class="pb-[0.875rem]">
          <link-header text="Tentang Kami" />
          <link-header text="Cara Belanja" />
          <link-header text="Referral" />
          <link-header text="Blog" />
          <nuxt-link to="rfq" class="my-2 px-6 border-l-[1.5px] border-[#383535] font-bold">
            RFQ
          </nuxt-link>
        </div>
      </div>
    </header>
    <main class="bg-[#FBFCFC] pb-[4.25rem]">
      <article class="w-max mx-auto">
        <Nuxt />
      </article>
    </main>
    <footer v-if="!$route.path.includes('cart')">
      <div class="w-max mx-auto flex gap-x-[10.75rem] pb-[3.625rem] pt-12">
        <div class="flex gap-x-[6.25rem]">
          <div class="flex flex-col gap-y-3">
            <h6 class="text-lg font-bold">Layanan Pengguna</h6>
            <nuxt-link to="#">FAQ</nuxt-link>
            <nuxt-link to="#">Hubungi Kami</nuxt-link>
            <nuxt-link to="#">Laporkan Masalah</nuxt-link>
            <nuxt-link to="#">Laporkan Penyalahgunaan</nuxt-link>
          </div>
          <div class="flex flex-col gap-y-3">
            <h6 class="text-lg font-bold">Poolapack</h6>
            <nuxt-link to="#">Tentang Kami</nuxt-link>
            <nuxt-link to="#">Cara Belanja</nuxt-link>
            <nuxt-link to="#">Referral</nuxt-link>
            <nuxt-link to="#">Blog</nuxt-link>
            <nuxt-link to="#">Karir</nuxt-link>
          </div>
          <div class="flex flex-col gap-y-[2.625rem]">
            <div class="flex flex-col gap-y-3">
              <h6 class="text-lg font-bold">Metode Pembayaran</h6>
              <div class="grid grid-cols-3 gap-[1.125rem]">
                <img :src="require('~/static/images/bca.png')" alt="bca">
              </div>
            </div>
            <div class="flex flex-col gap-y-3">
              <h6 class="text-lg font-bold">Metode Pengiriman</h6>
              <div class="grid grid-cols-3 gap-[1.125rem]">
                <img :src="require('~/static/images/jne.png')" alt="jne">
                <img :src="require('~/static/images/jtr.png')" alt="jtr">
                <img :src="require('~/static/images/mps.png')" alt="mps">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-[3.313rem]">
          <img :src="require('~/static/images/icon_dark.png')" alt="logo">
          <div class="flex flex-col gap-y-3">
            <h6 class="text-lg font-bold">Ikuti Kami</h6>
              <div class="grid grid-cols-5 gap-y-4">
                <img :src="require('~/static/svg/facebook.svg')" alt="facebook">
                <img :src="require('~/static/svg/instagram.svg')" alt="instagram">
                <img :src="require('~/static/svg/youtube.svg')" alt="youtube">
                <img :src="require('~/static/svg/twitter.svg')" alt="twitter">
              </div>
          </div>
        </div>
      </div>
      <div class="border-t border-t-[#E5E5E5] py-6">
        <p class="text-sm text-center">&copy; {{ new Date().getFullYear() }} - Poolapack.com</p>
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