<!-- <script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import api from "../../api/endpoint";

  const results = createQuery(() => ({
    queryKey: ["user"],
    queryFn: () => {
      const data = api.get("dashBoardStats");
      return data
    },
  }));
  
</script>

<main>
{#if results.isLoading}
<p>loading ....</p>
{/if}
THIS IS DASHBOARD

</main> -->
