<script lang="ts">
import { createQuery } from "@tanstack/svelte-query";
import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
import Button from "$lib/components/ui/button/button.svelte";
</script>

<main class="">
  <Skeleton />
  
<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 p-4">
        <div>
       
      
        </div>
        <label for="input-group-1" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="text" id="input-group-1" class="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
              
                <th scope="col" class="px-6 py-3 font-medium">
                    First Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Middle Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Last Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Email
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Address
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
               
                <td scope="row" class="flex items-center px-6 py-4 text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="" alt="student image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">joe</div>
                        <div class="font-normal text-body"></div>
                    </div>  
                </td>
                <td class="px-6 py-4">
                    null
                </td>
                <td class="px-6 py-4">
                   nguwo
                </td>
                <td class="px-6 py-4">
                    joe@gmail
                </td>
                 <td class="px-6 py-4">
                     0973773923
                </td>
                 <td class="px-6 py-4">
                mwashama
                </td>
                 <td class="px-6 py-4">
                    <Button>Edit user</Button>
                    <Button>Delete user</Button>
                </td>
            </tr>
            
      
        </tbody>
    </table>
</div>

  




  <!-- <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
          Name
        </th>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
          Email
        </th>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
          Role
        </th>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
          Status
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-100 bg-white">
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 text-sm text-gray-900">John Doe</td>
        <td class="px-6 py-4 text-sm text-gray-600">john@example.com</td>
        <td class="px-6 py-4 text-sm text-gray-600">Admin</td>
        <td class="px-6 py-4">
          <span class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            Active
          </span>
        </td>
      </tr>

      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 text-sm text-gray-900">Jane Smith</td>
        <td class="px-6 py-4 text-sm text-gray-600">jane@example.com</td>
        <td class="px-6 py-4 text-sm text-gray-600">User</td>
        <td class="px-6 py-4">
          <span class="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
            Inactive
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div> -->
  
 
</main>