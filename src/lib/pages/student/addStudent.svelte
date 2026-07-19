<script lang="ts">
    import { createMutation } from "@tanstack/svelte-query";
	import { Button } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
     import api from "$lib/api/endpoint";
   type Form = {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    contact: string;
    address: string;
};

	let form:Form = $state({
        firstName:"",
        middleName:"",
        lastName:"",
        email:"",
        contact:"",
        address:""

    })
    const add = createMutation(()=> ({
         mutationFn:(data:Form)=> api.post("addStudent",{data}),
         onSuccess:(data)=>{
            console.log("success")
            alert("good")

         }
    }))

	function addStudent(e :Event) {
        e.preventDefault();
        add.mutate(form)
    }

</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button>Add Student</Button>
	</Dialog.Trigger>

	<Dialog.Content class="sm:max-w-md">
		<Dialog.Header>
			<Dialog.Title>Add Student</Dialog.Title>
			<Dialog.Description>
				Enter the student's details.
			</Dialog.Description>
		</Dialog.Header>

		<form onsubmit={addStudent} class="space-y-4">
			<div class="space-y-2">
				<Label for="firstName">First Name</Label>
				<Input
					id="firstName"
					bind:value={form.firstName}
					placeholder="Joe"
				/>
			</div>

			<div class="space-y-2">
				<Label for="middleName">Middle Name</Label>
				<Input
					id="middleName"
					bind:value={form.middleName}
					placeholder="Michael"
				/>
			</div>
            <div class="space-y-2">
				<Label for="lastName">Last Name</Label>
				<Input
					id="lastName"
					bind:value={form.lastName}
					placeholder="nguwo"
				/>
			</div>
            <div class="space-y-2">
				<Label for="email">Email</Label>
				<Input
					id="email"
					bind:value={form.email}
					placeholder="joe@gmail.com"
				/>
			</div>
            <div class="space-y-2">
				<Label for="contact">Contact</Label>
				<Input
					id="contact"
					bind:value={form.contact}
					placeholder="097534332" 
				/>
			</div>
            <div class="space-y-2">
				<Label for="address">Address</Label>
				<Input
					id="address"
					bind:value={form.address}
					placeholder="mwashama"
				/>
			</div>

			<Dialog.Footer>
				<Button type="submit">Add</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>