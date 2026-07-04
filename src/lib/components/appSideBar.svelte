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
</script>

<main>
  <Sidebar>
    <SidebarHeader>LAST LEVEL SCHOOL</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
      <SidebarGroupLabel>NAV LINKS BELOW </SidebarGroupLabel>
      <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
        <Link to="/dashboard">Dashboard</Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>footer</SidebarFooter>
  </Sidebar>
</main>
