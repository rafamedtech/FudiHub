<script setup>
import { menus } from '@/data/menus';
const route = useRoute();
const menuId = route.params.id[0];
// console.log(route.params.id[0]);
const menu = computed(() => menus.find((invoice) => invoice.id === Number(menuId)));
const date = Date.now();
</script>

<template>
  <main class="container px-2 z-0">
    <section class="flex items-center justify-center">
      <span class="text-xs"
        >Actualizado en:
        {{
          new Date(date).toLocaleString('es-MX', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        }}</span
      >
    </section>
    <section class="flex items-center gap-2">
      <button class="my-4 flex items-center gap-2">
        <Icon
          name="solar:arrow-left-outline"
          class="text-accent"
          size="28"
          @click="$router.back()"
        />
      </button>

      <h2 class="text-2xl w-auto">{{ menu.name }}</h2>
    </section>
    <section class="container">
      <figure class="h-40 mx-auto mb-8 w-full max-w-full lg:h-[15rem]">
        <img
          :src="menu.banner"
          alt=""
          class="h-full w-full object-cover object-top lg:object-center"
        />
      </figure>

      <p class="text-center text-2xl">Horario:</p>
      <span class="text-xs text-center block" v-for="(day, index) in menu.schedule" :key="index">{{
        day
      }}</span>

      <!-- Social links -->
      <section class="flex justify-center max-w-xl mt-4 gap-4 mx-auto">
        <NuxtLink
          v-if="menu.facebook"
          :to="menu.facebook"
          target="_blank"
          class="flex flex-col items-center gap-2"
          ><Icon name="teenyicons:facebook-outline" size="32" class="text-accent" />
          <span class="text-xs">Facebook</span></NuxtLink
        >
        <NuxtLink
          v-if="menu.instagram"
          :to="menu.instagram"
          target="_blank"
          class="flex flex-col items-center gap-2"
          ><Icon name="teenyicons:instagram-outline" size="32" class="text-accent" />
          <span class="text-xs">Instagram</span></NuxtLink
        >
        <NuxtLink
          v-if="menu.tiktok"
          :to="menu.tiktok"
          target="_blank"
          class="flex flex-col items-center gap-2"
          ><Icon name="teenyicons:tiktok-outline" size="32" class="text-accent" />
          <span class="text-xs">Tiktok</span></NuxtLink
        >

        <label for="my_modal_6" class="flex flex-col items-center gap-2"
          ><Icon name="teenyicons:pin-outline" size="32" class="text-accent" />
          <span class="text-xs">Ubicacion</span></label
        >

        <LocationModal :title="menu.name" :location="menu.address" />
      </section>
      <!-- <section class="mx-auto flex mt-2 max-w-xl items-center gap-2">
        <h3>Tags:</h3>
        <span
          v-for="(tag, index) in menu.tags"
          :key="index"
          class="badge h-fit rounded-none border-secondary bg-transparent py-2 text-black"
          >{{ tag }}</span
        >
      </section> -->
    </section>

    <section class="mx-auto mt-8 lg:max-w-xl flex justify-center">
      <NuxtLink
        :to="`/${menuId}/menu`"
        class="mb-2 text-center flex items-center gap-2 text-2xl btn normal-case btn-secondary"
        ><Icon name="teenyicons:text-document-outline" />Ver Menu</NuxtLink
      >
      <!-- <section class="mb-2 flex w-full items-center justify-center gap-4">
        <Icon name="solar:arrow-left-outline" class="animate-pulse text-primary" />
        <span class="text-xs">Desliza para cambiar de seccion</span>
        <Icon name="solar:arrow-right-outline" class="animate-pulse text-primary" />
      </section> -->
      <!-- 
      <div class="carousel-center carousel max-w-md space-x-4">

        <section
          v-for="section in menu.menu"
          :key="section.id"
          class="carousel-item w-full lg:w-full"
        >
          <div class="h-full max-h-[40rem] w-full">
            <div class="sticky top-0 flex h-12 w-full items-center justify-center bg-secondary">
              <h3>{{ section.section }}</h3>
            </div>
            <section
              v-for="item in section.items"
              :key="item.id"
              class="flex justify-between px-2 py-4"
            >
              <div>
                <h4 class="text-lg">{{ item.name }}</h4>
                <p class="text-xs italic text-gray-500">{{ item.description }}</p>
              </div>
              <span class="font-bold">${{ item.price }}</span>
            </section>
          </div>
        </section>
      </div> -->
      <!-- <section v-for="section in menu.menu" :key="section.id">
          <div class="flex h-12 items-center justify-center bg-secondary">
            <h3>{{ section.section }}</h3>
          </div>
          <section v-for="item in section.items" :key="item.id" class="py-4">
            <h4 class="text-lg">{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </section>
        </section> -->
    </section>

    <div class="divider mt-20"></div>

    <section class="w-full">
      <h3 class="text-2xl text-center">Lugares similares</h3>
    </section>

    <div class="btm-nav hidden border-t">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span class="btm-nav-label">Home</span>
      </button>
      <button class="active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="btm-nav-label">Warnings</span>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <span class="btm-nav-label">Statics</span>
      </button>
    </div>
  </main>
</template>
