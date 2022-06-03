<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="m-0 py-3 px-4 w-full text-white text-base font-normal leading-tight bg-transparent border border-solid border-white rounded-full outline-none">
</template>

<script>
export default {
  name: 's-form-field',
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true
    }
  },
}
</script>

<style>

</style>