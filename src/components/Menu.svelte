<script>
  import { Router, Link } from 'svelte-routing'
  import { scale } from 'svelte/transition'
  import { quadOut } from 'svelte/easing'

  import { signInWithGoogle } from '../helpers/firebase'
  import { userId } from '../store'

  let uid
  userId.subscribe((id) => {
    uid = id
  })
  export let open
</script>

{#if open}
  <nav class="text-center bg-primary text-lg p-4 w-full h-full fixed top-12 left-0 z-10">
    {uid}
    <Router>
      <Link to="/" class="pointer block m-2" on:click={() => (open = false)}>Home</Link>
      <Link to="/about" class="pointer block m-2" on:click={() => (open = false)}>About</Link>
      <Link to="/create" class="pointer block m-2" on:click={() => (open = false)}>Create</Link>
      <Link to="#" class="pointer block m-2" on:click={signInWithGoogle}>Login</Link>
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
