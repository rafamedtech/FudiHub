<script setup>
import { menus } from '@/data/menus';
const route = useRoute();
const menuId = route.params.id[0];
// console.log(route.params.id[0]);
const menu = computed(() => menus.find((invoice) => invoice.id === Number(menuId)));
</script>

<template>
  <main>
    <section class="h-40 relative flex items-center container">
      <h2
        class="text-2xl text-center px-2 mb-4 absolute flex justify-center items-center gap-4 inset-x-0 w-2/3 mx-auto text-white z-10"
      >
        <button class="inline-flex absolute -left-8 items-center gap-2">
          <Icon
            name="solar:arrow-left-outline"
            class="text-accent"
            size="28"
            @click="$router.back()"
          /></button
        >Menu de {{ menu.name }}
      </h2>
      <img
        :src="menu.banner"
        class="h-full w-full object-cover object-top brightness-50 mb-2"
        alt=""
      />
    </section>
    <div class="h-full container">
      <div v-for="section in menu.menu" :key="section.id" class="h-full">
        <div class="h-full w-full">
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
      </div>
    </div>
  </main>
</template>
