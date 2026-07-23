<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import App2 from "./routes.svelte";

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:1000 * 60 * 5 ,// data stays fresh for 5 minutes
        refetchOnWindowFocus:false,
        retry:2

      }
    }
  });
</script>

<main>
  <QueryClientProvider client={queryClient}>
    <App2 />
  </QueryClientProvider>
</main>
