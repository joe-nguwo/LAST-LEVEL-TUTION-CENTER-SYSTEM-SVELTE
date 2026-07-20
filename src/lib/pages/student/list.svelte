<script lang="ts">
  import { createQuery, dataTagErrorSymbol } from "@tanstack/svelte-query";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import api from "$lib/api/endpoint";
  import { type StudentsResponse } from "$lib/types/res";

  const res = createQuery(() => ({
    queryKey: ["students"],
    queryFn: async () => {
      const data: StudentsResponse = await api.get("allStudent");
      return data;
    },
  }));

  console.log(res.data);
</script>

<main>
  {#if res.isLoading}
    <Skeleton class="w-full" />
  {:else if res.isError}
    <p>An an error occured</p>
  {:else}
    <table class="w-full text-sm text-left rtl:text-right text-body">
      <thead
        class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium"
      >
        <tr>
          <th scope="col" class="px-6 py-3 font-medium"> First Name </th>
          <th scope="col" class="px-6 py-3 font-medium"> Middle Name </th>
          <th scope="col" class="px-6 py-3 font-medium"> Last Name </th>
          <th scope="col" class="px-6 py-3 font-medium"> Email </th>
          <th scope="col" class="px-6 py-3 font-medium"> Contact </th>
          <th scope="col" class="px-6 py-3 font-medium"> Address </th>
          <th scope="col" class="px-6 py-3 font-medium"> Action </th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
        >
          <td
            scope="row"
            class="flex items-center px-6 py-4 text-heading whitespace-nowrap"
          >
            <img class="w-10 h-10 rounded-full" src="" alt="student image" />
            <div class="ps-3">
              <div class="text-base font-semibold"></div>
              <div class="font-normal text-body"></div>
            </div>
          </td>
          <td class="px-6 py-4"> </td>
          <td class="px-6 py-4"></td>
          <td class="px-6 py-4"></td>
          <td class="px-6 py-4"> </td>
          <td class="px-6 py-4"> </td>
          <td class="px-6 py-4">
            <Button>Edit user</Button>
            <Button>Delete user</Button>
          </td>
        </tr>
      </tbody>
    </table>
  {/if}
</main>
