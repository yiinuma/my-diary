<script>
  import { Hamburger } from 'svelte-hamburgers'
  import BrightnessContrast from 'carbon-icons-svelte/lib/BrightnessContrast.svelte'
  import Menu from './Menu.svelte'

  let open
  const toggleDark = () => {
    document.getElementById('body').classList.toggle('mode-dark')
  }
</script>

<header class="bg-primary">
  <div class="mx-auto flex justify-between h-12 items-center md:max-w-4xl">
    <Hamburger bind:open --color="white" />
    <Menu bind:open />

    <h1 class="text-2xl font-bold">My Diary</h1>
    <button class="mr-4 text-white" on:click={toggleDark}>
      <BrightnessContrast size={32} />
    </button>
  </div>
</header>
