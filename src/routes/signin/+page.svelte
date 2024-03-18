<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div
	class="flex w-full flex-col items-stretch justify-between gap-8 px-4 text-lg sm:max-w-md sm:px-0"
>
	<h1 class="text-center text-3xl font-bold tracking-wide text-cyan-50">Sign In</h1>

	<form
		use:enhance
		method="POST"
		class="flex flex-col items-stretch justify-between gap-4 rounded-lg bg-gray-800 p-10 px-12 drop-shadow-md"
	>
		<div class="flex flex-col">
			<label for="signin-email" class="pb-1 text-base text-cyan-200">Email</label>

			<input
				id="signin-email"
				type="email"
				name="email"
				class="rounded bg-cyan-800 px-4 py-2 outline-none ring-1 ring-inset focus:ring-2 focus:ring-yellow-300"
			/>
			{#if form?.notFound}
				<div class="text-sm font-semibold text-red-600">User with that email not found</div>
			{/if}
		</div>

		<div class="flex flex-col pb-4">
			<label for="signin-password" class="pb-1 text-base text-cyan-200">Password</label>

			<input
				id="signin-password"
				type="password"
				name="password"
				class="rounded bg-cyan-800 px-4 py-2 outline-none ring-1 ring-inset focus:ring-2 focus:ring-yellow-300"
			/>
		</div>

		<button
			class="rounded-lg bg-cyan-700 p-4 font-bold tracking-wide text-white outline-none ring-1 ring-inset hover:drop-shadow-md focus:ring-2 focus:ring-yellow-300 disabled:opacity-50"
		>
			Sign In
		</button>

		<p class="pt-4 text-base">
			Don't have an account?{' '}
			<a
				class="rounded px-2 underline outline-none ring-0 ring-inset focus:ring-2 focus:ring-yellow-300"
				href="/signup"
			>
				Sign Up
			</a>
		</p>
	</form>
</div>
