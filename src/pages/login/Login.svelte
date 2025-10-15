<script lang="ts">
  import { Root, Header, Title, Description, Content, Footer } from "$lib/components/ui/card/index.ts";
  import { Input } from "$lib/components/ui/input/index.ts";
  import { Button } from "$lib/components/ui/button/index.ts";
  import { Mail, Lock }   from '@lucide/svelte';;
  import type { LoginForm } from "$lib/types/Auth";

  let form: LoginForm = $state({
    email: "",
    password: ""
  });

  function handleSubmit(event: Event) {
    event.preventDefault();
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
      </form>
    </Content>
    <Footer>
       <Button  type="submit" class="mt-2 text-center">Login</Button>
    </Footer>
  </Root>
</main>

<style>
  main {
    background-color:gray-950;
  }
</style>
