<template>
  <router-link to="/" class="
    py-3 px-10 text-white font-base font-normal leading-tight border border-solid border-white rounded-full transition-all ease-in-out duration-300
    hover:border-red
    active:border-red
    focus:bg-white focus:border-white focus:text-black
    focus:active:border-white">
    <slot name="text">
      Text
    </slot>
  </router-link>
</template>

<script>
export default {
  name: 's-link'
}
</script>