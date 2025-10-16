<script lang="ts">
    import{Route} from "svelte-routing"
    import SideBar from "./layout/sideBar.svelte"
    import LoginPage from "./pages/login/Login.svelte"
    import Dashboard from  "./pages/dashboard/index.svelte"

</script>
<main>
   <!-- public routes -->
    <Route path="/login">
          <LoginPage />
    </Route>
  

    <!-- private routes-->
     <SideBar>
         <Route path="/dashboard">
            <Dashboard/>
        </Route>
     </SideBar>

</main>