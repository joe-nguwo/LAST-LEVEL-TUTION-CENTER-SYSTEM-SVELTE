<script lang="ts">
  import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
  } from "$lib/components/ui/sidebar";

  import SidebarMenu from "./ui/sidebar/sidebar-menu.svelte";
  import SidebarMenuItem from "./ui/sidebar/sidebar-menu-item.svelte";
  import SidebarMenuButton from "./ui/sidebar/sidebar-menu-button.svelte";

  import { Link } from "svelte-routing";
  import { navItems } from "$lib/types/navLinks";
</script>

<Sidebar class="h-screen border-r bg-background">
  <div class="flex h-full flex-col gap-6">

    <!-- Header -->
    <SidebarHeader class="px-5 pt-5">
      <div
        class="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold"
        >
          LS
        </div>

        <div>
          <h2 class="text-sm font-semibold">Last Level School</h2>
          <p class="text-xs text-muted-foreground">
            School Management
          </p>
        </div>
      </div>
    </SidebarHeader>

    <!-- Navigation -->
    <SidebarContent class="overflow-y-auto px-5">
      <SidebarGroup>
        <SidebarGroupLabel class="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Navigation
        </SidebarGroupLabel>

        <SidebarMenu class="space-y-2">
          {#each navItems as item}
            <SidebarMenuItem>
              <Link to={item.href}>
                <SidebarMenuButton
                  class="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-muted hover:text-primary"
                >
                  <item.icon class="h-5 w-5 shrink-0" />
                  <span class="font-medium">{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          {/each}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>

    <!-- Footer -->
    <SidebarFooter class="p-5">
      <div class="flex flex-col gap-2">
        <button
          class="mt-4 w-full rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Log out
        </button>
      </div>
    </SidebarFooter>

  </div>
</Sidebar>