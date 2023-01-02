<script>
  import { Router, Route } from 'svelte-routing'

  import './app.css'
  import './helpers/firebase'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Home from './components/Home.svelte'
  import Create from './components/Create.svelte'
  import Diary from './components/Diary.svelte'
  import About from './components/About.svelte'
</script>

<main class="text-center max-w-full mx-auto bg-background md:max-w-none">
  <Header />
  <section class="min-h-[calc(100vh-96px)]">
    <Router>
      <Route path="diary/:id" component={Diary} />
      <Route path="create" component={Create} />
      <Route path="about" component={About} />
      <Route path="/"><Home /></Route>
    </Router>
  </section>
  <Footer />
</main>
