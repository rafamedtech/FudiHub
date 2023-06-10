<script setup>
defineProps(['menu']);

function setNewBadge(rest) {
  const currentMonth = new Date(Date.now()).getMonth();
  const restMonth = new Date(rest).getMonth();

  if (currentMonth === restMonth) {
    return true;
  }
  return false;
}
</script>

<template>
  <NuxtLink
    class="card h-fit max-h-64 bg-[#1a1a1a] w-full rounded-xl shadow-custom"
    :to="`/${menu.id}`"
  >
    <figure class="h-40">
      <img :src="menu.banner" alt="Shoes" class="object-cover object-top h-full w-full" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ menu.name }}
        <div
          v-if="setNewBadge(menu.createdAt)"
          class="badge bg-transparent border-accent py-3 text-white rounded-none"
        >
          Nuevo
        </div>
      </h2>
    </div>
  </NuxtLink>
</template>
