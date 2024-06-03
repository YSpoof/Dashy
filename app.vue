<script setup lang="ts">
import type { settingsModel } from './types';
const route = useRoute()
useSeoMeta({
  title: 'Dashy | LZArt',
  ogTitle: 'Dashy | LZArt',
  description: 'A simple dashboard/home screen for browsers.',
  ogDescription: 'A simple dashboard/home screen for browsers.',
  ogUrl: 'https://dashy.lzart.com.br',
  ogImage: '/base.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Dashy | LZArt',
  twitterDescription: 'A simple dashboard/home screen for browsers.',
  twitterImage: '/base.webp',
})
useHead({
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ],
})

const loadSettingsFromUrl = ():settingsModel => {
  const defaultSettings = {
    name: 'Usuário',
    city: 'Cidade',
    picture: 'https://picsum.photos/150',
    background: 'https://picsum.photos/1280/720',
    twelveHours: false,
  }
  
    try {
      let loadString = (route.query.s as string)
      
      if(!loadString || loadString == '') return defaultSettings as settingsModel
      
      const loadedSettings = JSON.parse(atob(loadString)) as settingsModel
      const { name, city, picture, background, twelveHours } = loadedSettings

      if(name) defaultSettings.name = name as string
      if(city) defaultSettings.city = city as string
      if(picture) defaultSettings.picture = picture as string
      if(background) defaultSettings.background = background as string
      if(twelveHours) defaultSettings.twelveHours = Boolean(twelveHours)

      console.log(`Decoded: ${JSON.stringify(defaultSettings)}`)

      return defaultSettings as settingsModel
    }
  catch (e){
    console.log(e)
  }
  return defaultSettings as settingsModel
}

const settings:settingsModel = loadSettingsFromUrl()

onMounted(() => {
  console.log('Settings:', settings)
  let body = document.getElementById('body') || document.body
  body.style.backgroundImage = `url('${settings.background}')`
})

</script>
<template>
  <div id="body" class="bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden h-svh w-svw">
    <HomeCard v-model="settings" />
    <SettingsMenu v-model="settings" />
    <Footer />
  </div>
</template>