<template>
  <div class="flex">
    <button class="relative z-10 bg-white border rounded-[5px] px-[9px] text-[#9797AA] border-[#9797AA] font-bold" @click="inputNum(count - 1)">
      -
    </button>
    <div class="w-20 py-[3px] border border-[#9797AA] relative z-0 -mx-4">
      <input type="text" :value="count" class="text-center w-full bg-transparent" @input="inputNum($event.target.value)" @keypress="numberOnly($event)">
    </div>
    <button class="relative z-10 bg-white border rounded-[5px] px-[9px]" :class="!cart ? 'text-yellow-primary border-yellow-primary' : 'text-[#9797AA] border-[#9797AA]'" @click="inputNum(count + 1)">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    cart: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    this.count = this.value
  },
  methods: {
    inputNum(number) {
      number = parseInt(number)
      this.count = number
      if(number < 0 || !number) {
        this.count = 0
        return this.$nuxt.$emit('input', 0)
      }
      return this.$nuxt.$emit('input', this.count)
    },
    numberOnly(evt) {
      evt = evt || window.event;
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>