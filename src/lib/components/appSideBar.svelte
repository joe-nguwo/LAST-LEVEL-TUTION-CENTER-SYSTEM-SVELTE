<script lang="ts">
  import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel
  } from "$lib/components/ui/sidebar";
  import { Link } from "svelte-routing";
  import SidebarMenu from "./ui/sidebar/sidebar-menu.svelte";
  import SidebarMenuItem from "./ui/sidebar/sidebar-menu-item.svelte";
  import SidebarMenuButton from "./ui/sidebar/sidebar-menu-button.svelte";
  import { navItems } from "$lib/types/navLinks";
  

</script>

<main>
  <Sidebar>
    <SidebarHeader>LAST LEVEL SCHOOL</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
      <SidebarGroupLabel>NAV LINKS BELOW </SidebarGroupLabel>
     <SidebarMenu>
  {#each navItems as item}
    <SidebarMenuItem>
      <Link to={item.href}>
        <SidebarMenuButton>
          <item.icon class="h-5 w-5" />
          <span>{item.title}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  {/each}
</SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>footer</SidebarFooter>
  </Sidebar>
</main>
