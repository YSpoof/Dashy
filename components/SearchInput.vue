<script setup lang="ts">
const searchInput = ref('')
const recentSearches = useTemplateRef('recentSearches')

const doSearch = () => {
    const search = searchInput.value
    if (search) {
      const recentSearchesElement = recentSearches.value as HTMLDataListElement
      const option = document.createElement('option') as HTMLOptionElement
      option.value = search
      recentSearchesElement.appendChild(option)
      searchInput.value = ''
      window.open(`https://www.google.com/search?q=${search}`)
    }
}

onMounted(() => {
    let element = document.getElementById('searchInput') as HTMLInputElement
    element.focus()
})

</script>
<template>
  <search class="mx-auto text-center mt-4">
    <input
      id="searchInput"
      list="recentSearches"
      type="text"
      v-model="searchInput"
      @keyup.enter="doSearch"
      placeholder="Pesquisar no Google"
      class="input w-full max-w-xs rounded-md bg-stone-900/70 text-stone-300 backdrop-blur-sm text-center shadow-md p-2"
    />
    <datalist id="recentSearches" ref="recentSearches"></datalist>
  </search>
</template>