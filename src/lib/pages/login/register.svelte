<script lang="ts">
  import {Link} from "svelte-routing";
  import { Root, Header, Title, Description, Content, Footer } from "$lib/components/ui/card/index.ts";
  import { Input } from "$lib/components/ui/input/index.ts";
  import { Button } from "$lib/components/ui/button/index.ts";
  import { Mail, Lock, User } from '@lucide/svelte';
  import type { LoginForm } from "@lib/types/auth.ts";

  let form: LoginForm = $state({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: ""
  });

  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log("Form submitted:", form);
  }
</script>

<main class="flex justify-center items-center min-h-screen bg-gray-900 p-4">
  <Root class="w-[90vw] max-w-[400px] min-w-[320px] mx-auto p-6 sm:p-8 shadow-xl rounded-xl bg-white transition-all duration-300 hover:shadow-2xl border border-gray-200">
    <Header class="mb-6 sm:mb-8">
      <Title class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
        Sign Up
      </Title>
      <Description class="text-sm sm:text-base text-center text-gray-600">
        Create your account to get started
      </Description>
    </Header>

    <Content>
      <form class="flex flex-col space-y-4 sm:space-y-5" onsubmit={handleSubmit}>
        <!-- First Name & Last Name - Stack on mobile, side by side on sm+ -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div class="flex flex-col space-y-2">
            <label for="firstName" class="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
              <User class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              First Name
            </label>
            <Input 
              type="text" 
              bind:value={form.firstName} 
              id="firstName" 
              required 
              class="w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3"
              placeholder="First name"
            />
          </div>
          
          <div class="flex flex-col space-y-2">
            <label for="lastName" class="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
              <User class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Last Name
            </label>
            <Input 
              type="text" 
              bind:value={form.lastName} 
              id="lastName" 
              required 
              class="w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3"
              placeholder="Last name"
            />
          </div>
        </div>

        <!-- Email Field -->
        <div class="flex flex-col space-y-2">
          <label for="email" class="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
            <Mail class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            Email Address
          </label>
          <Input 
            type="email" 
            bind:value={form.email} 
            id="email" 
            required 
            class="w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3"
            placeholder="your@email.com"
          />
        </div>

        <!-- Password & Confirm Password - Stack on mobile, side by side on sm+ -->
        <div class="flex flex-col space-y-2">
          <div class="flex flex-col space-y-2">
            <label for="password" class="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
              <Lock class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Password
            </label>
            <Input 
              type="password" 
              bind:value={form.password} 
              id="password" 
              required 
              class="w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3"
              placeholder="Create password"
            />
          </div>
          
          <div class="flex flex-col space-y-2">
            <label for="confirmPassword" class="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
              <Lock class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Confirm Password
            </label>
            <Input 
              type="password" 
              bind:value={form.confirmPassword} 
              id="confirmPassword" 
              required 
              class="w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <Footer class="pt-4 sm:pt-6">
          <Button 
            type="submit" 
            class="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Create Account
          </Button>
        
        </Footer>
         <!-- Go back to Login -->
        <Footer class="pt-4 sm:pt-6">
          <Button 
           
            class="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
          <Link to="/">Login</Link>
          </Button>
        
        </Footer>
      </form>
    </Content>
  </Root>
</main>