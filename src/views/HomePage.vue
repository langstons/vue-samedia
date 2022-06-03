<template>
  <s-layout>
    <template v-slot:content>
    <s-welcome
      :class="{ 'opacity-0 invisible' : pageLoad === true}"
    />
    <s-header
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <template v-slot:content>
        <div class="max-w-[180px] max-h-[34px] mr-4">
          <img class="w-full h-full" src="../assets/img/logo.svg" alt="Logo of SA MEDIA">
        </div>
        <nav class="hidden mx-8 lg:block">
          <ul class="flex items-center justify-center">
            <li v-for="product in products" :key="product.id" class="mr-12 last:mr-0">
              <s-nav-link
              @click="slideToCurrentSlide(product.id)"
              :linkTitle="product.linkTitle"/>
            </li>
          </ul>
        </nav>
        <s-link to="/contact">
          <template v-slot:text>
            Request
          </template>
        </s-link>
      </template>
    </s-header>
    <main class="h-full my-auto">
      <section class="py-12 lg:h-screen lg:p-0">
        <div class="container lg:h-full lg:px-0">
          <swiper
          :autoHeight="true"
          :slides-per-view="1"
          :space-between="48"
          :speed="1000"
          watch-slides-progress
          :modules="modules"
          :breakpoints="swiperOptions.breakpoints"
          :navigation="{ nextEl: '.products-button-next', prevEl: '.products-button-prev'}"
          @slideChange="onSlideChange"
          @swiper="setControlledSwiper"
          class="products-slider lg:h-full"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <s-card :link="product.link" :image="product.image" :logo="product.logo" :title="product.title" :description="product.description"/>
          </swiper-slide>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            class="z-[20] mt-20 flex items-center justify-center lg:justify-start lg:absolute lg:bottom-20 lg:left-5 xl:pl-32">
            <button class="swiper-button-prev products-button-prev py-3 pl-3.5 pr-2 border border-solid border-white rounded-tl-full rounded-bl-full">
              <svg class="fill-white max-w-[24px] min-w-[24px] max-h-[24px] min-h-[24px]">
                <use xlink:href="@/assets/img/sprite.svg#arrow-left"></use>
              </svg>
            </button>
            <button class="swiper-button-next products-button-next py-3 pr-3.5 pl-2 border border-solid border-white rounded-tr-full rounded-br-full">
              <svg class="fill-white max-w-[24px] min-w-[24px] max-h-[24px] min-h-[24px]">
                <use xlink:href="@/assets/img/sprite.svg#arrow-right"></use>
              </svg>
            </button>
          </div>
        </swiper>
        </div>
      </section>
    </main>
    <s-footer/>
    </template>
  </s-layout>
</template>

<script>
import { ref } from 'vue';
import sNavLink from '@/components/UI/s-nav-link.vue'
import sCard from '@/components/UI/s-card.vue'
import sFooter from '@/components/s-footer.vue'
import sWelcome from '@/components/s-welcome.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y, Controller } from 'swiper';
import AOS from "aos";

import 'swiper/css';
import 'swiper/css/navigation';

import jsonData from '../products.json';

export default {
  components: {
    sNavLink,
    sFooter,
    sWelcome,
    Swiper,
    SwiperSlide,
    sCard
  },
  data() {
    return {
      products: jsonData,
      pageLoad: false,
      swiperOptions: {
        breakpoints: {
          992: {
            autoHeight: false,
            allowTouchMove: false,
            delayBetweenSlides: 700,
          }
        }
      }
    }
  },
  setup() {

    const controlledSwiper = ref(null);

    const setControlledSwiper = (swiper) => {
      controlledSwiper.value = swiper;
    };

    return {
      controlledSwiper,
      setControlledSwiper,
      Swiper,
      modules: [Navigation, A11y, Controller],
    };
  },
  mounted() {

    setTimeout(() => {
      this.pageLoad = true
      
      AOS.init()
    }, 3000)
  },
  methods: {
    onSlideChange() {
      let animatedItems = document.querySelectorAll('.aos-refresh')

      for (var i = 0; i < animatedItems.length; i++) {
        animatedItems[i].classList.remove('aos-init', 'aos-animate')
        setTimeout(() => {
          AOS.init()
        }, 800)
      }
    },

		slideToCurrentSlide(id) {
			this.controlledSwiper.slideTo(id, undefined, undefined);
		}
	}
}
</script>

<style>
  .swiper-button-next,
  .swiper-button-prev {
    position: relative;
    top: 0;
    width: auto;
    height: auto;
    margin: 0;
  }
  .swiper-button-prev, .swiper-rtl .swiper-button-next {
    left: 0;
  }
  .swiper-button-next, .swiper-rtl .swiper-button-prev {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    pointer-events: unset;
  }

  @media screen and (min-width: 992px) {
    .swiper-autoheight, .swiper-autoheight .swiper-slide {
      height: 100%;
    }
    .swiper-notification {
      display: none;
    }
  }
</style>