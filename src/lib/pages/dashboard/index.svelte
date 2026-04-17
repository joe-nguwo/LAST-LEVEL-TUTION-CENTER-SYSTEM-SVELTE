<script lang="ts">
 //import api from "$lib/api/endpoints";
  import { createQuery } from "@tanstack/svelte-query";
  import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { onMount } from 'svelte';
  //import { Chart } from 'chart.js/auto';
  import { navigate } from "svelte-routing";


</script>

<main>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-4 md:p-6">
  <div class="max-w-7xl mx-auto space-y-8">
    <!-- Header -->
    <div class="text-center md:text-left">
      <p class="text-slate-600 mt-2 text-lg">Last Level Tution Centre  Administration Portal</p>
    </div>

 
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each Array(3) as _}
          <Card class="p-6 border-0 shadow-lg">
            <Skeleton class="h-8 w-24 mb-4" />
            <Skeleton class="h-12 w-full" />
          </Card>
        {/each}
      </div>

      <Card class="p-6 border-red-200 bg-red-50 shadow-lg">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <span class="text-red-600 text-xl">⚠️</span>
          </div>
          <div>
            <h3 class="font-semibold text-red-800">Error Loading Statistics</h3>
      
          </div>
        </div>
      </Card>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Total Users -->
        <Card class="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
          <CardHeader class="pb-2">
            <div class="flex items-center justify-between">
              <CardTitle class="text-blue-100 text-sm font-medium">Total Users</CardTitle>
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span class="text-2xl">👥</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
      
            <p class="text-blue-100 text-sm mt-1"> Active Stuents in the system </p>
          </CardContent>
        </Card>

        <!-- Businesses -->
        <Card class="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
          <CardHeader class="pb-2">
            <div class="flex items-center justify-between">
              <CardTitle class="text-emerald-100 text-sm font-medium">Businesses</CardTitle>
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span class="text-2xl">🏢</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
           
            <p class="text-emerald-100 text-sm mt-1">Registered Females</p>
          </CardContent>
        </Card>

        <!-- Individuals -->
        <Card class="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
          <CardHeader class="pb-2">
            <div class="flex items-center justify-between">
              <CardTitle class="text-purple-100 text-sm font-medium">Registred Males </CardTitle>
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span class="text-2xl">👤</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
         
            <p class="text-purple-100 text-sm mt-1">Individual users</p>
          </CardContent>
        </Card>
      </div>

      <!-- Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Growth Chart -->
        <Card class="border-0 shadow-lg backdrop-blur-sm bg-white/80">
          <CardHeader class="pb-4">
            <CardTitle class="text-xl font-semibold text-slate-800">Growth Trend</CardTitle>
            <p class="text-slate-600 text-sm">User registrations over time</p>
          </CardHeader>
          <CardContent>
            <div class="h-80">
            
            </div>
          </CardContent>
        </Card>

        <!-- Distribution Chart -->
        <Card class="border-0 shadow-lg backdrop-blur-sm bg-white/80">
          <CardHeader class="pb-4">
            <CardTitle class="text-xl font-semibold text-slate-800">User Distribution</CardTitle>
            <p class="text-slate-600 text-sm">Breakdown by user type</p>
          </CardHeader>
          <CardContent>
            <div class="h-80 flex items-center justify-center">
           
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Footer -->
      <div class="text-center">
        <p class="text-slate-500 text-sm">
       
        </p>
      </div>
 
  </div>
</div>

<style>
  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }
</style>
  
</main>