<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
 // import {Router} from "svelte-routing"
  import App2 from "./App2.svelte";

  const queryClient = new QueryClient()

  

</script>

<main>
  <QueryClientProvider client={queryClient}>
    <!-- <Router> -->
          <App2/>
    <!-- </Router> -->
  </QueryClientProvider>

</main>


