<script>
  import { Link, Router } from 'svelte-routing'
  import { Hamburger } from 'svelte-hamburgers'
  import BrightnessContrast from 'carbon-icons-svelte/lib/BrightnessContrast.svelte'

  let open
</script>

<header
  class="h-12 flex justify-center items-center gap-4 bg-primary"
>
  <h1 class="text-2xl font-bold">My Diary</h1>
  <nav class="md:hidden">
    <Hamburger bind:open --color="white" />
    {#if open}
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">Create</Link>
      </Router>
    {/if}
  </nav>
  <nav class="hidden md:block">
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/create">Create</Link>
    </Router>
  </nav>
  <BrightnessContrast size={32} />
</header>
