<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import api from "$lib/api/endpoint";
  import { type StudentsResponse } from "$lib/types/res";

  
  const query = createQuery(() => ({
    queryKey: ["students"],
    queryFn: async () => {
      const response: StudentsResponse[] = await api.get("allStudent");
      return response;
    },
  }));

  
  $inspect(query.data);
</script>

<main class="p-6">
  {#if query.isLoading}
    <Skeleton class="w-full h-40" />
  {:else if query.isError}
    <p class="text-destructive font-medium">An error occurred: {query.error?.message}</p>
  {:else if query.data}
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
          <tr>
          
            <th scope="col" class="px-6 py-3 font-medium"> Student </th>
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
          {#each query.data as student}
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
          
              <td scope="row" class="flex items-center px-6 py-4 text-heading whitespace-nowrap">
                <div class="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-xs uppercase">
                  {student.fname[0] || ''}{student.lname[0] || ''}
                </div>
                <div class="ps-3">
                  <div class="text-base font-semibold">{student.fname} {student.lname}</div>
                  <div class="font-normal text-body text-xs">{student.email}</div>
                </div>
              </td>
         
            
              <td class="px-6 py-4">{student.fname}</td>
              <td class="px-6 py-4">{student["m-name"] || '-'}</td>
              <td class="px-6 py-4">{student.lname}</td>
              <td class="px-6 py-4">{student.email}</td>
              <td class="px-6 py-4">{student.contact || '-'}</td>
              <td class="px-6 py-4">{student.address || '-'}</td>
              
            
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex gap-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="destructive">Delete</Button>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</main>
