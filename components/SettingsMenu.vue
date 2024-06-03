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

</script>
<template>
  <dialog id="settingsDialog" class="modal">
    <div class="modal-box p-2 rounded-md bg-base-300/80 backdrop-blur-sm">
      <h1 class="font-bold text-xl text-center">Configurações</h1>
      <div class="mt-4">
        <form method="dialog" class="flex flex-col gap-4">
          <label class="input input-bordered flex items-center gap-2 rounded-md">
            Nome:
            <input
              id="name"
              type="text"
              class="grow"
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
              class="grow"
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
              class="grow"
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
              class="grow"
              autocomplete="url"
              placeholder="Imagem de fundo"
            />
          </label>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Formato 12 Horas</span>
              <input id="twoelveHours" v-model="model.twelveHours" type="checkbox" class="checkbox" />
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