<template>
  <a target="_blank" :href="link" class="s-card flex flex-col items-center lg:flex-row-reverse lg:items-start lg:w-full lg:relative lg:h-full lg:pl-5 lg:pt-32 lg:overflow-hidden">
    <div 
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="1000"
      class="aos-refresh max-w-[320px] min-w-[320px] sm:max-w-[536px] sm:min-w-[536px] lg:max-w-[768px] lg:min-w-[768px] lg:absolute lg:top-32 lg:-right-[200px] xl:max-w-[870px] xl:min-w-[870px]">
      <img class="w-full h-full object-cover" :src="require(`@/assets/img/${image}`)" alt="Product preview">
    </div>
    <div class="mt-16 xl:pl-32 lg:max-w-[50%] lg:mr-auto">
      <div
        data-aos="fade-up"
        data-aos-duration="750"
        data-aos-delay="600"
        class="aos-refresh mx-auto mb-9 w-fit lg:mx-0 lg:mb-12">
        <img :src="require(`@/assets/img/${logo}`)" alt="Product logo">
      </div>
      <h3
        data-aos="fade-up"
        data-aos-duration="750"
        data-aos-delay="700"
        class="aos-refresh mb-8 text-center text-white text-2xl font-normal sm:text-4xl leading-tight sm:leading-tight lg:text-left lg:text-[3.5vw] lg:mb-5">
        {{ title }}
      </h3>
      <p 
        data-aos="fade-up"
        data-aos-duration="750"
        data-aos-delay="800"
        class="aos-refresh text-center text-darktext text-base font-normal sm:text-xl leading-tight sm:leading-tight lg:text-left lg:text-[1.8vw]">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script>

export default {
  name: 's-card',
  props: {
    image: {
      type: String,
      required: true,
      default: ''
    },
    logo: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    link: {
      type: String,
      required: true,
      default: ''
    },
  },
}
</script>

<style>

</style>