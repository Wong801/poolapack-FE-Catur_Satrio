<template>
  <div>
    <div class="text-center bg-[#F9BE00] border-b border-b-[#E9B202] w-[2.688rem] px-[0.625rem] text-sm font-bold py-[3px] rounded-2xl rounded-bl-none">
      {{ pad(time) }}
    </div>
    <div class="text-center w-6 rounded-b-full pb-[0.375rem] bg-[#F9BE00] text-[7px]">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    pad(time) {
      return time < 10 ? `0${time}` : time
    }
  }
}
</script>

<style>

</style>