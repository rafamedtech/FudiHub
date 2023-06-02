<script setup></script>

<template>
  <main>
    <div class="container navbar relative bg-base-100 px-2 pb-0">
      <div class="flex-1">
        <Icon name="material-symbols:restaurant-rounded" size="28" class="text-primary" />
        <a class="btn-ghost btn pl-2 text-base font-medium normal-case">FudiHub</a>
      </div>

      <div class="dropdown-end dropdown flex-none lg:hidden">
        <label tabindex="0" class="m-1">
          <button class="btn-ghost btn-square btn w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg></button
        ></label>
        <ul
          tabindex="0"
          class="dropdown-content menu w-52 rounded-lg bg-base-100 p-2 shadow-custom"
        >
          <li><a>Eventos</a></li>
          <li><a>Contacto</a></li>
        </ul>
      </div>

      <div class="hidden flex-none lg:flex">
        <ul tabindex="0" class="flex w-52 justify-end gap-4 rounded-lg bg-base-100 p-2">
          <li><a>Eventos</a></li>
          <li><a>Contacto</a></li>
        </ul>
      </div>
    </div>

    <div class="divider m-0"></div>
    <slot></slot>
  </main>
</template>
