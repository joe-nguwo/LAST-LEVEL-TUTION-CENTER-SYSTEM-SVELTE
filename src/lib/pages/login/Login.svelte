<script lang="ts">
  import {Link}  from "svelte-routing"
  import { createMutation} from "@tanstack/svelte-query";
  import { Root, Header, Title, Description, Content, Footer } from "$lib/components/ui/card/index.ts";
  import { Input } from "$lib/components/ui/input/index.ts";
  import { Button } from "$lib/components/ui/button/index.ts";
  import { Mail, Lock }   from '@lucide/svelte';
  import type { LoginForm } from "$lib/types/auth.ts";
  import api from "../../api/endpoint"
  

  let form: LoginForm = $state({
    email: "",
    password: ""
  });


  const login = createMutation(  ()=> ( {
    mutationFn:(data:LoginForm)=> api.post("login", {data})

    }

  ))



  

  function handleSubmit(event: Event) {
    event.preventDefault();
    login.mutate(form);
    console.log("Form submitted:", form);
  }


</script>

<main class="flex justify-center items-center min-h-screen   bg-gray-900">

  <Root class="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
    <Header>
      <Title class="text-center">Login</Title>
      <Description class="text-center">Enter your email and password to login</Description>
    </Header>

    <Content>
      <form class="flex flex-col space-y-4" onsubmit={handleSubmit}>
        <div class="flex flex-col">
          <label for="email" class="mb-1 font-medium"><Mail/>Email:</label>
          <Input type="email" bind:value={form.email} id="email" required />
        </div>

        <div class="flex flex-col">
          <label for="password" class="mb-1 font-medium"><Lock/>Password:</label>
          <Input type="password" bind:value={form.password} id="password"  required />
        </div>
         <Button  type="submit" class="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">Login</Button> 
         <Button class="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"><Link to="/register">Register</Link></Button>
      </form>
    </Content>

  </Root>
</main>

<style>
  main {
    background-color:oklch(0.14 0.00 286);
  }
</style>
