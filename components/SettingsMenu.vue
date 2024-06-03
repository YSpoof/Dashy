<script setup lang="ts">
import type { settingsModel } from '~/types';


const model = defineModel({
  type: Object as PropType<settingsModel>,
  default: {
    name: 'Usuário',
    city: 'Cidade',
    picture: '',
    background: '',
    twelveHours: false
  }
}
)

const handleSave = () => {
  const settingsString = JSON.stringify(model.value)
  console.log(`Encoded: ${settingsString}`)
  location.href = `/?s=${btoa(settingsString)}`
}

const resetConfigs = () => {
  caches.delete('cache')
  location.href = '/'
}

const showMenu = () => {
  const dialogElement = document.getElementById('settingsDialog') as HTMLDialogElement
  if(dialogElement) dialogElement.showModal()
}

</script>
<template>
  <button @click="showMenu" class="absolute top-4 right-4 z-10 transition-all opacity-60 hover:opacity-100">
    <Icon name="mdi:cog" size="30" class="text-stone-100" />
  </button>
  <dialog id="settingsDialog" class="rounded-lg bg-stone-900/80 backdrop-blur-sm text-stone-200 backdrop:bg-stone-900/50">
    <div class="modal-box p-2 rounded-md">
      <h1 class="font-bold text-xl text-center">Configurações</h1>
      <div class="mt-4">
        <form method="dialog" class="flex flex-col gap-4">
          <label class="input input-bordered flex items-center gap-2 rounded-md">
            Nome:
            <input
              id="name"
              type="text"
              class="text-stone-800 px-1"
              v-model="model.name"
              autocomplete="given-name"
              placeholder="Nome"
            />
          </label>
          <label class="input input-bordered flex items-center gap-2 rounded-md">
            Cidade:
            <input
              id="city"
              v-model="model.city"
              type="text"
              class="text-stone-800 px-1"
              autocomplete="off"
              placeholder="Cidade"
            />
          </label>
          <label class="input input-bordered flex items-center gap-2 rounded-md">
            Foto:
            <input
              id="profUrl"
              v-model="model.picture"
              type="text"
              class="text-stone-800 px-1"
              autocomplete="photo"
              placeholder="Foto de perfil"
            />
          </label>
          <label class="input input-bordered flex items-center gap-2 rounded-md">
            Fundo:
            <input
              id="bgUrl"
              v-model="model.background"
              type="text"
              class="text-stone-800 px-1"
              autocomplete="url"
              placeholder="Imagem de fundo"
            />
          </label>
          <div class="form-control text-center">
            <label class="label cursor-pointer">
              <span class="label-text">Formato 12 Horas</span>
              <input id="twoelveHours" v-model="model.twelveHours" type="checkbox" class="ml-1" />
            </label>
          </div>
          <button
            class="btn btn-sm btn-success rounded-md"
            @click.prevent="handleSave"
          >
            Salvar
          </button>
          <button
            class="btn btn-sm btn-error rounded-md"
            @click="resetConfigs"
          >
            Redefinir para padrão
          </button>
        </form>
      </div>
    </div>
  </dialog>
</template>