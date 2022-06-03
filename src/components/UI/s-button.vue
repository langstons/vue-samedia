<template>
  <button class="
    py-3 px-10 text-white font-base font-normal leading-tight bg-red border border-solid border-red rounded-full transition-all ease-in-out duration-300 
    hover:border-darkred hover:bg-darkred hover:text-opacity-80
    focus:border-darkred focus:bg-darkred focus:text-opacity-80
    active:border-darkred active:bg-darkred active:text-opacity-80
    ">
    <slot name="text">
      Text
    </slot>
  </button>
</template>

<script>
export default {
  name: 's-button'
}
</script>