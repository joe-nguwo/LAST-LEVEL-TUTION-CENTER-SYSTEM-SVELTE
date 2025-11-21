<script lang="ts">
    import{Router,Route} from "svelte-routing"
    import SideBar from "$lib/layout/sideBar.svelte"
    import LoginPage from "$lib/pages/login/Login.svelte"
    import Dashboard from  "$lib/pages/dashboard/index.svelte"
    import Register from "$lib/pages/login/register.svelte"

    let  isauth = true;

</script>
<main>
    <Router>
     {#if  isauth} 
    <Route path="/" exact>
          <LoginPage />
    </Route>
    <Route path="/register" exact> 
        <Register />

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