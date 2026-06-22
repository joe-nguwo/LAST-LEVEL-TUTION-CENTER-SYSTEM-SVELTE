<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import App2 from "./App2.svelte";

  const queryClient = new QueryClient();
</script>

<main>
  <QueryClientProvider client={queryClient}>
    <App2 />
  </QueryClientProvider>
</main>
