<template>
  <div>
    <div v-if="id === null || !product">
      <h1 class="capitalize text-gray-text text-2xl text-center py-12">Product tidak ditemukan</h1>
    </div>
    <div v-else>
      <div class="flex gap-x-5">
        <div>
          <div class="border-b-[#EEF2F5] border-b-[1.5px] flex gap-x-5 pb-4">
            <div class="w-max flex flex-col gap-y-3">
              <div class="w-[20.313rem] h-[21.125rem] overflow-hidden rounded-[20px] border">
                <img :src="product.image" :alt="product.title" class="h-full w-auto mx-auto">
              </div>
              <div class="flex justify-between">
                <div v-for="i in 5" :key="i" class="w-[3.75rem] h-[3.75rem] overflow-hidden cursor-pointer rounded-lg border">
                  <img :src="product.image" :alt="product.title" class="h-full w-auto mx-auto">
                </div>
              </div>
            </div>
            <div class="w-max flex flex-col gap-y-[1.125rem]">
              <div class="border-b-[#EEF2F5] border-b-[1.5px] flex items-center justify-between pb-7">
                <div>
                  <h1 class="text-lg font-bold w-3/5">{{ product.title }}</h1>
                  <div class="flex items-center">
                    <div class="pr-[7px] flex items-center">
                      <vs-icon v-for="i in 5" :key="i" color="#F9BE00" :icon="i <= Math.floor(product.rating.rate) ? 'star' : 'star_outline'" size="0.75rem"></vs-icon>
                      <span class="text-yellow-primary font-bold text-xs">{{ product.rating.rate }}</span>
                    </div>
                    <p class="text-xs px-[7px] border-l border-gray-text">{{ product.rating.count }} <span class="text-gray-text">Ulasan</span></p>
                    <p class="text-xs px-[7px] border-l border-gray-text">{{ product.rating.count }} <span class="text-gray-text">Terjual</span></p>
                  </div>
                </div>
                <div>
                  <h1 class="text-center font-bold">
                    Berakhir Dalam
                  </h1>
                  <div class="flex gap-x-[0.2rem]">
                    <Counter :time="0" text="Hari" />
                    <Counter :time="0" text="Jam" />
                    <Counter :time="0" text="Menit" />
                    <Counter :time="0" text="Detik" />
                  </div>
                </div>
              </div>
              <table class="w-full border-[#000] rounded-[10px] shadow-form">
                <thead class="bg-white border border-[#EEF2F5] border-b-2">
                  <tr class="py-[0.625rem]">
                    <th class="text-center">Varian</th>
                    <th class="text-center">Harga</th>
                    <th class="text-center">Jumlah</th>
                  </tr>
                </thead>
                <tbody class="bg-white border border-t-2">
                  <tr v-for="i in 2" :key="i">
                    <td class="px-[0.875rem]">
                      <div class="bg-[#EEF2F5] px-[1.344rem] py-[0.188rem] rounded-lg">
                        Varian
                      </div>
                    </td>
                    <td>
                      <div class="flex px-[0.875rem] items-center border-l border-r justify-center mt-[1.125rem] mb-[0.625rem]">
                        <label-price :discount="true" />
                        <label-price :price="10000" />
                        <label-price :price="10000" />
                      </div>
                    </td>
                    <td class="px-[0.875rem]">
                      <input-number :value="count" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="pb-[1.063rem] px-5 border-b-[#EEF2F5] border-b-[1.5px] flex gap-x-7 items-start">
                <p class="mr-[0.938rem]">Sampel:</p>
                <div class="flex gap-x-2 items-start">
                  <div class="w-[1.938rem] h-[1.938rem] overflow-hidden rounded-lg border">
                    <img :src="product.image" :alt="product.title" class="h-full w-auto mx-auto">
                  </div>
                  <p>Lorem ipsum</p>
                </div>
                <button class="rounded-lg text-center font-bold px-[1.875rem] border border-yellow-primary text-yellow-primary flex items-center justify-center gap-x-[0.625rem]">
                  <vs-icon color="#F9BE00" icon="save_alt" size="1rem"></vs-icon>
                  Request Sampel
                </button>
              </div>
              <div class="px-5 flex gap-x-7 items-start">
                <p class="mr-[0.938rem]">Voucher Promo:</p>
                <button class="rounded-lg font-bold px-[1.063rem] w-[13.375rem] py-4 border bg-[#46D5B2] flex items-center justify-center gap-x-[0.625rem]">
                  Banner promo
                </button>
              </div>
            </div>
          </div>
          <div class="mt-[1.125rem] mb-[4.5rem]">
            <label-store />
          </div>
          <div class="rounded-[20px] bg-white border mb-12 w-full max-w-[60rem]">
            <div class="px-10 flex gap-x-[0.875rem] -my-8">
              <button :class="active === 'detail' ? 'button-detail-active' : 'button-detail-inactive'" @click="active = 'detail'">
                Detail Produk
              </button>
              <button :class="active === 'review' ? 'button-detail-active' : 'button-detail-inactive'" @click="active = 'review'">
                Ulasan
              </button>
              <button :class="active === 'profile' ? 'button-detail-active' : 'button-detail-inactive'" @click="active = 'profile'">
                Profil Packer
              </button>
            </div>
            <div class="py-12 px-11 flex flex-col gap-y-7 w-min">
              <div class="flex flex-col gap-y-[1.125rem]">
                <h4 class="font-bold">Detail</h4>
                <table class="border">
                  <tr v-for="item in detail" :key="item.title" class="zebra">
                    <th class="text-center px-11 py-3 whitespace-nowrap">{{ item.title }}</th>
                    <td class="text-center px-11 py-3 whitespace-pre">{{ item.value }}</td>
                  </tr>
                </table>
              </div>
              <div class="flex flex-col gap-y-[1.125rem]">
                <h4 class="font-bold">Deskripsi</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odio officia, ducimus necessitatibus facilis error pariatur deserunt porro voluptates sit.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-[1.125rem]">
          <div class="text-sm w-max bg-white rounded-[0.625rem] border-[#EEF2F5] border-[1.5] shadow-form">
            <div class="px-[0.781rem] py-[1.125rem] flex flex-col gap-y-[0.625rem]">
              <div>
                <h4 class="font-bold text-[#65AF98]">Ready Stock</h4>
                <p>Minimal Order (MOQ): 100 Meter</p>
                <p>Kelipatan Order: 100 Meter</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-text">Total Kuantitas</p>
                <span class="font-bold">0 Meter</span>
              </div>
            </div>
            <div class="w-full border border-[0.5]"></div>
            <div class="px-[0.781rem] py-[1.125rem] flex flex-col gap-y-[0.625rem]">
              <div class="flex justify-between">
                <p class="text-gray-text">Total Kuantitas</p>
                <span class="font-bold">{{ 0 | toCurrency }}</span>
              </div>
              <button class="rounded-lg text-center font-bold text-white py-[0.469rem] bg-yellow-primary">Beli Sekarang</button>
              <button class="rounded-lg text-center font-bold py-[0.469rem] border border-yellow-primary text-yellow-primary flex items-center justify-center gap-x-[0.625rem]">
                <vs-icon color="#F9BE00" icon="add_shopping_cart" size="1rem"></vs-icon>
                Masukkan Keranjang
              </button>
            </div>
          </div>
          <div class="text-sm w-max bg-white rounded-[0.625rem] border-[#EEF2F5] border-[1.5] shadow-form">
            <div class="px-[0.781rem] py-[1.125rem] flex flex-col gap-y-[0.625rem]">
              <div>
                <h4 class="font-bold">Pengiriman</h4>
                <p class="text-gray-text"><vs-icon color="#292D32" icon="apartment" size="1rem"></vs-icon> Dikirim dari <span class="text-[#383535]">Kab. Bandung</span></p>
                <div class="flex items-center gap-x-1">
                  <vs-icon color="#292D32" icon="local_shipping" size="1rem"></vs-icon>
                  <p class="text-gray-text">Pengiriman ke <span class="text-[#383535]">Kota Jakarta</span></p>
                  <button class="flex items-center"><vs-icon color="#292D32" icon="expand_more" size="1rem"></vs-icon></button>
                </div>
                <p class="text-gray-text text-sm px-5">Ongkos Kirim</p>
              </div>
              <div class="flex justify-end">
                <p>{{ 0 | toCurrency }}</p>
              </div>
            </div>
            <div class="w-full border border-[0.5]"></div>
              <div class="flex justify-end px-3 pb-[1.125rem] pt-[0.625rem]">
                <p class="text-gray-text">Estimasi tiba 12/Des - 15/Des</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      active: 'detail',
      detail: [
        {
          title: 'Gramasi',
          value: '100.000'
        },
        {
          title: 'Lebar Kain',
          value: '150'
        },
        {
          title: 'Bahan',
          value: '100% Cotton'
        },
        {
          title: 'Teknik',
          value: 'Lembut, tahan lama,\n tidak mudah berkerut'
        },
        {
          title: 'Karakter',
          value: 'Fashion'
        },
      ]
    }
  },
  computed: {
    product() {
      return this.$store.state.api.product.product
    },
    id() {
      return this.$store.state.api.product.productId
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    id (newId) {
      this.getProduct(newId)
    }
  },
  created() {
    this.getProduct(this.id)
  },
  methods: {
    async getProduct(id) {
      if(id) {
        await this.$store.dispatch('api/product/getProduct', id)
      }
    }
  }
}
</script>

<style scoped>
.zebra:nth-child(odd) {
  background-color: #EEF2F5;
}
</style>