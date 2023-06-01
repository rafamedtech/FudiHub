<script setup>
import { menus } from '@/data/menus';

const categories = [...new Set(menus.map((menu) => menu.category))];
const newCategories = new Set(categories);
console.log(newCategories);
</script>

<template>
  <main class="container min-h-screen px-2 py-4">
    <section class="mb-4 flex flex-col justify-center gap-2">
      <h2 class="text-center text-3xl">Categorias</h2>
      <section class="flex gap-2 overflow-x-scroll">
        <NuxtLink
          v-for="(category, index) in categories"
          :key="index"
          class="btn-secondary btn h-fit min-h-fit py-3"
          to="/"
        >
          {{ category }}
        </NuxtLink>
      </section>
    </section>
    <section>
      <h2 class="mb-2 text-center text-3xl">Restaurants</h2>

      <section class="flex flex-col items-center gap-4 px-2">
        <NuxtLink
          v-for="menu in menus"
          :key="menu.id"
          class="card w-96 rounded-lg shadow-custom "
          :to="`/${menu.id}`"
        >
          <figure>
            <img :src="menu.banner" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ menu.name }}
              <div class="badge-accent badge rounded-none">Nuevo</div>
            </h2>
            <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
            <div class="card-actions justify-end">
              <div
                class="badge-outline badge rounded-sm shadow-custom border-none bg-gray-50"
              >
                Fashion
              </div>
              <div
                class="badge-outline badge rounded-sm shadow-custom border-none bg-gray-50"
              >
                Products
              </div>
            </div>
          </div>
        </NuxtLink>
      </section>
    </section>
  </main>
</template>
