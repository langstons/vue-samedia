<template>
  <a href="#" class="products-trigger
  text-white text-xs font-normal leading-tight uppercase transition-colors ease-in-out duration-300
    hover:text-red
    xxl:text-base
  ">
    {{ linkTitle }}
  </a>
</template>

<script>
export default {
  name: 's-nav-link',
  props: {
    linkTitle: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style>

</style>