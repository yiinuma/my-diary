<script>
  import { onDestroy } from 'svelte'
  import { Router, Link } from 'svelte-routing'
  import { scale } from 'svelte/transition'
  import { quadOut } from 'svelte/easing'

  import { signInWithGoogle, signOutWithGoogle } from '../helpers/firebase'
  import { userId } from '../store'

  let uid
  const unsubscribe = userId.subscribe((id) => {
    uid = id
  })
  onDestroy(() => unsubscribe)
  export let open
</script>

{#if open}
  <nav class="text-center bg-primary text-lg p-4 w-full h-full fixed top-12 left-0 z-10">
    <Router>
      <Link to="/" class="pointer block m-2" on:click={() => (open = false)}>Home</Link>
      <Link to="/about" class="pointer block m-2" on:click={() => (open = false)}>About</Link>
      <Link to="/create" class="pointer block m-2" on:click={() => (open = false)}>Create</Link>
      {#if uid}
        <Link to="#" class="pointer block m-2" on:click={signOutWithGoogle}>Logout</Link>
      {:else}
        <Link to="#" class="pointer block m-2" on:click={signInWithGoogle}>Login</Link>
      {/if}
    </Router>
    <hr
      transition:scale={{
        duration: 350,
        easing: quadOut,
        opacity: 1
      }}
    />
  </nav>
{/if}
