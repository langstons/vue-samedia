<template>
  <header class="py-4 lg:fixed lg:top-0 lg:left-0 lg:w-full lg:z-[100] lg:pt-12">
    <div class="container flex items-center justify-between xl:px-20">
      <slot name="content"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 's-header'
}
</script>

<style>

</style>