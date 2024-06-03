<script setup lang="ts">
import type { settingsModel } from '~/types';
const clockElement = ref<HTMLElement>()
const profilePicture = ref<HTMLImageElement>()

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


const showMenu = () => {
  const dialogElement = document.getElementById('settingsDialog') as HTMLDialogElement
  if(dialogElement) dialogElement.showModal()
}

const clock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let clockStr = '';

  if (model.value.twelveHours) {
    let amPm = hours >= 12 ? "PM" : "AM";
    let twelveHour = hours % 12 || 12;
    clockStr = `${twelveHour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;
  } else {
    clockStr = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  if (clockElement.value) clockElement.value.innerText = clockStr;
}

onMounted(() => {
  clock()
  setInterval(clock, 1000)
  if (profilePicture.value) profilePicture.value.src = model.value.picture

  console.log(`HomeCard got model: ${JSON.stringify(model.value)}`)
})

</script>
<template>
    <div class="h-screen font-bold grid place-items-center">
      <div>
        <main class="bg-stone-950/70 rounded-md">
          <div
            @click="showMenu"
            class="mx-auto bg-base-300/80 w-max p-6 flex flex-col justify-around text-center items-center backdrop-blur-sm rounded-md shadow-2xl"
          >
            <p ref="clockElement" class="text-4xl font-mono text-stone-200">00:00:00 AM</p>
            <img
              ref="profilePicture"
              width="150"
              height="150"
              class="rounded-full shadow-lg m-4 border object-cover [image-rendering:pixelated] transition-all hover:scale-105"
              :src="model.picture"
              alt="Foto de perfil"
              title="Clique para configurar o Dashy"
            />
            <p id="message" class="text-stone-200">Olá, {{ model.name }}!</p>
          </div>
        </main>
        <SearchInput />
      </div>
    </div>
</template>