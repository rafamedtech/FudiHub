<script setup lang="ts">
interface Props {
  title: string;
  location: string;
}
defineProps<Props>();
</script>

<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my_modal_6" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Ubicacion de {{ title }}</h3>
        <div>
          <iframe
            :src="location"
            height="200"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="mx-auto mb-2 w-full max-w-xl"
          ></iframe>
        </div>

        <div class="modal-action">
          <label for="my_modal_6" class="btn btn-secondary">Cerrar</label>
        </div>
      </div>
    </div>
  </div>
</template>
