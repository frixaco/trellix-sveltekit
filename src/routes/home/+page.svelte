<script>
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {(name: string) => Promise<void>} */
	async function deleteBoard(name) {
		await fetch(`/api/deleteBoard`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		});

		invalidateAll();
	}
</script>

<div class="flex items-center justify-between px-8 py-4">
	<div class="flex flex-col justify-start">
		<span class="text-2xl font-bold tracking-wide">Trellix</span>
		<span>a Qwik demo</span>
	</div>

	<form method="POST" action="?/signout">
		<button
			class="cursor-pointer rounded-lg bg-gray-900 px-8 py-4 text-cyan-400 hover:underline"
			type="submit"
			formaction="?/signout">Sign Out</button
		>
	</form>
</div>

<div
	class="h-full min-h-0 flex-grow overflow-auto bg-cyan-100 p-8 text-lg font-semibold text-gray-800"
>
	<form use:enhance method="POST" action="?/createBoard" class="flex max-w-md flex-col gap-4">
		<p>Create a New Board</p>

		<div class="flex max-w-md flex-col">
			<label for="boardName" class="text-sm font-normal">Name</label>
			<input id="boardName" type="text" name="boardName" />

			<input hidden id="authorId" value={data.user.id} type="number" name="authorId" />
		</div>

		<button
			formaction="?/createBoard"
			type="submit"
			class="rounded-lg bg-cyan-900 px-6 py-2 text-cyan-50">Create</button
		>
	</form>

	<div>
		<p>Your Boards</p>

		<div class="grid grid-cols-3 gap-4 lg:grid-cols-5">
			{#each data.boards as board}
				<div class="flex items-center justify-between rounded-md bg-cyan-50 p-4 pb-24 drop-shadow">
					<span class="text-black">{board.name}</span>

					<button on:click={() => deleteBoard(board.name)} class="text-xs">Delete</button>
				</div>
			{/each}
		</div>
	</div>
</div>
