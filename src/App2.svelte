<script lang="ts">
    import{Router,Route} from "svelte-routing"
     // import {Router} from "svelte-routing"
    import SideBar from "./layout/sideBar.svelte"
    import LoginPage from "./pages/login/Login.svelte"
    import Dashboard from  "$src/pages/dashboard/index.svelte"

    let  isauth = false;

</script>
<main>
    <Router>
   {#if !isauth }
    <Route path="/" exact>
          <LoginPage />
    </Route>

    {:else}
  
     <SideBar>
         <Route path="/dashboard" exact>
            <Dashboard/>
        </Route>
     </SideBar>

     {/if}
    </Router>
</main>