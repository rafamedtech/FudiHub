<script setup>
import { menus } from '@/data/menus';

const categories = [...new Set(menus.map((item) => item.category))];

const uniqueCategories = Array.from(new Set(categories.map((obj) => obj.id))).map((id) =>
  categories.find((obj) => obj.id === id)
);
</script>

<template>
  <main class="container min-h-screen px-2 py-4">
    <section class="mb-4 flex flex-col justify-center gap-2">
      <h2 class="text-center text-3xl">Categorías</h2>
      <section
        class="flex gap-2 overflow-x-scroll lg:flex-wrap lg:justify-center lg:overflow-hidden"
      >
        <NuxtLink
          v-for="(category, index) in uniqueCategories"
          :key="index"
          class="btn-secondary btn flex h-fit min-h-fit gap-2 py-3"
          to="/"
        >
          <Icon :name="category.icon" size="32" class="text-black" />
          <span>{{ category.name }}</span>
        </NuxtLink>
      </section>
    </section>

    <div class="divider"></div>

    <section>
      <h2 class="mb-2 text-center text-3xl">Restaurantes</h2>

      <section class="grid grid-cols-1 gap-4 px-2 lg:grid-cols-3">
        <NuxtLink
          v-for="menu in menus"
          :key="menu.id"
          class="card h-fit max-h-64 w-full rounded-lg shadow-custom"
          :to="`/${menu.id}`"
        >
          <figure class="h-1/2">
            <img :src="menu.banner" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ menu.name }}
              <div class="badge-accent badge rounded-none">Nuevo</div>
            </h2>
          </div>
        </NuxtLink>
      </section>
    </section>
  </main>
</template>
