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
          name="ooui:arrow-previous-ltr"
          class="text-primary"
          size="28"
          @click="$router.back()"
        />
      </button>
      <h2 class="text-xl">{{ menu.name }}</h2>
    </section>
    <section class="container">
      <figure class="h-40 mx-auto mb-2 w-full max-w-xl">
        <img :src="menu.banner" alt="" class="h-full w-full object-cover object-top" />
      </figure>
      <section class="flex justify-center max-w-xl gap-4">
        <NuxtLink><Icon name="logos:facebook" size="32" /></NuxtLink>
        <NuxtLink><Icon name="skill-icons:instagram" size="32" /></NuxtLink>
        <NuxtLink><Icon name="logos:tiktok-icon" size="32" /></NuxtLink>
        <!-- You can open the modal using ID.showModal() method -->
        <!-- The button to open modal -->
        <label for="my_modal_6" class="text-primary"
          ><Icon name="material-symbols:location-on-rounded" size="32"
        /></label>

        <LocationModal :title="menu.name" :location="menu.address" />
      </section>
      <!-- <section class="mx-auto flex max-w-xl gap-2">
        <span
          v-for="(tag, index) in menu.tags"
          :key="index"
          class="badge h-fit rounded-none border-secondary bg-transparent py-2 text-black"
          >{{ tag }}</span
        >
      </section> -->
    </section>

    <section class="mx-auto mt-4 lg:max-w-xl">
      <h2 class="mb-2 text-center text-xl">Menu</h2>
      <section class="mb-2 flex w-full items-center justify-center gap-4">
        <Icon name="ooui:arrow-previous-ltr" class="animate-pulse text-primary" />
        <span class="text-xs">Desliza para cambiar de seccion</span>
        <Icon name="ooui:arrow-next-ltr" class="animate-pulse text-primary" />
      </section>

      <div class="carousel-center carousel max-w-md space-x-4">
        <!-- <div class="carousel-item">
            <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" />
          </div> -->
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
                <h4 class="text-lg font-bold">{{ item.name }}</h4>
                <p class="text-xs">{{ item.description }}</p>
              </div>
              <span class="font-bold">${{ item.price }}</span>
            </section>
          </div>
        </section>
      </div>
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
