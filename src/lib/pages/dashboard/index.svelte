<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
  //import { Chart } from 'chart.js/auto';
  import { navigate } from "svelte-routing";
  import api from "../../api/endpoint";


  const results = createQuery(() => ({
    queryKey: ["user", "userid"],
    queryFn: () => {
      const data = api.get("dashBoardStats");
      console.log(data)
    },
  }));
</script>

<main>
{#if results.isLoading}
<p>loading ....</p>
{/if}


</main>
