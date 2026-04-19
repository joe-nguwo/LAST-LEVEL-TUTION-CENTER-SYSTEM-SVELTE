<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar";
  // import { 
  //   Menu, Home, Users, Settings, LogOut, User, ChevronDown, ChevronUp 
  // } from "lucide-svelte";
  import { navigate } from "svelte-routing";

  let { children } = $props();

  // Main navigation items
  const navItems = [
    { title: "Dashboard", url: "/dashboard"}
  //  { title: "Students", url: "/students" }
  ];

  // Get current path from window location
  let currentPath = $state(typeof window !== 'undefined' ? window.location.pathname : "/dashboard");

  // Update current path when location changes
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      currentPath = window.location.pathname;
    });
  }

  function isActive(path: string) {
    return currentPath === path;
  }

  function handleNavigation(url: string) {
    currentPath = url;
    navigate(url);
  }

  // Update current path when component mounts or updates
  $effect(() => {
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
    }
  });
</script>

<Sidebar.Provider>
  <Sidebar.Root class="h-screen">
    <!-- Header -->
    <Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <div class="px-3 py-2 flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
              DW
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-semibold">Last-Level Tution-center </span>
              <span class="text-xs text-muted-foreground">THE BEST TUTION CENTER IN KANYAMA</span>
            </div>
            <!-- <ChevronDown class="ml-auto w-4 h-4" /> -->
          </div>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Header>

    <!-- Content -->
    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            {#each navItems as item (item.title)}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton isActive={isActive(item.url)}>
                  <button
                    class="w-full flex items-center gap-3"
                    onclick={() => handleNavigation(item.url)}
                  >
                    <item.icon class="w-4 h-4" />
                    <span>{item.title}</span>
                  </button>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            {/each}
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>

      <Sidebar.Separator />

      <!-- Settings -->
      <Sidebar.Group>
        <Sidebar.GroupLabel>Settings</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={isActive("/settings")}>
                <button
                  class="w-full flex items-center gap-3"
                  onclick={() => handleNavigation("/settings")}
                >
                  <!-- <Settings class="w-4 h-4" /> -->
                  <span>Settings</span>
                </button>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>

    <!-- Footer -->
    <Sidebar.Footer>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <div class="px-3 py-2 border-t flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <!-- <User class="w-4 h-4" /> -->
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium">chuulu mainda </div>
              <div class="text-xs text-muted-foreground">chuulumain@.com</div>
            </div>
            <!-- <ChevronUp class="w-4 h-4" /> -->
          </div>
        </Sidebar.MenuItem>

        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <button
              class="w-full flex items-center gap-3 text-destructive hover:bg-destructive/10"
              onclick={() => navigate("/")}
            >
              <!-- <LogOut class="w-4 h-4" /> -->
              <span>Sign Out</span>
            </button>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Footer>

    <Sidebar.Rail />
  </Sidebar.Root>

  <Sidebar.Inset>
    <main class="flex-1 overflow-auto">
      <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        
        <div class="container flex h-14 items-center">
          <Sidebar.Trigger class="mr-4">
            <Menu class="w-4 h-4" />
          </Sidebar.Trigger>
          <h1 class="text-lg font-semibold">
            {currentPath.replace("/", "").charAt(0).toUpperCase() + currentPath.replace("/", "").slice(1) || "Dashboard"}
          </h1>
          <div class="ml-auto flex items-center space-x-4">
            <span class="text-sm text-muted-foreground">Welcome back!</span>
          </div>
        </div>
      </header>

      <div class="container py-6">
        {@render children?.()}
      </div>
    </main>
  </Sidebar.Inset>
</Sidebar.Provider>

<style>
  :global(:root) {
    --sidebar-width: 16rem;
    --sidebar-width-mobile: 18rem;
  }
</style>