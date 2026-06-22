<script lang="ts">
let {children} = $props()
import {SidebarProvider,SidebarTrigger}  from "$lib/components/ui/sidebar/index.ts"
import AppSideBar  from "$lib/components/appSideBar.svelte"
</script>
<main>
    <SidebarProvider>
    <AppSideBar>
    </AppSideBar>
    
     <main> 
    <SidebarTrigger/>
    
  
        {@render children()}
    </main>

    </SidebarProvider>

</main>