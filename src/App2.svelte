<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import SideBar from "$lib/layout/sideBar.svelte";
  import LoginPage from "$lib/pages/login/Login.svelte";
  import Dashboard from "./lib/pages/dashboard/index.svelte";
  import Register from "$lib/pages/login/register.svelte";
  import { auth as notAuth } from "$lib/stores/stores";
</script>

<main>
  <Router>
    
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
    
      <Route path="/dashboard" exact>
        <SideBar>
          <Dashboard />
        </SideBar>
      </Route>
    
  </Router>
</main>
