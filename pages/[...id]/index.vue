<script setup>
import { menus } from '@/data/menus';
const route = useRoute();
const menuId = route.params.id[0];
// console.log(route.params.id[0]);
const menu = computed(() => menus.find((invoice) => invoice.id === Number(menuId)));
console.log(menu.value);
</script>

<template>
  <main>
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="navbar w-full bg-base-300">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn-ghost btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-6 w-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="mx-2 flex-1 px-2">{{ menu.name }}</div>
          <div class="hidden flex-none lg:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <li><a>Navbar Item 1</a></li>
              <li><a>Navbar Item 2</a></li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->
        <section class="container">
          <h2 class="mt-4 w-full text-center text-xl">Categorias</h2>
          <section></section>
        </section>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu w-80 bg-base-100 p-4">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  </main>
</template>
