<script>
	import GithubLogo from '../components/github-logo.svelte';
	import SvelteLogo from '$lib/assets/svelte-logo.png';
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<div class="flex flex-col gap-8 px-8 text-lg sm:max-w-md sm:px-0">
		<div class="absolute right-0 top-0 cursor-pointer p-2">
			<GithubLogo />
		</div>

		<div class="relative flex flex-col justify-between gap-4 text-left">
			<div class="flex items-center gap-4">
				<img class="h-50 w-20" src={SvelteLogo} alt="svelte-logo" />
				<span class="text-5xl font-bold tracking-wide">SvelteKit</span>
			</div>

			<p>
				Demo app to explore Qwik features. Inspired by{' '}
				<a target="_blank" class="underline" href="https://x.com/@ryanflorence">
					Ryan Florence's
				</a>{' '}
				Trellix{' '}
				<a target="_blank" class="underline" href="https://trellix.fly.dev/"> demo app </a>{' '}
				and his videos on{' '}
				<a
					target="_blank"
					class="underline"
					href="https://www.youtube.com/watch?v=RTHzZVbTl6c&list=PLXoynULbYuED9b2k5LS44v9TQjfXifwNu&pp=gAQBiAQB"
				>
					YouTube
				</a>
				.
			</p>

			<p>
				It's a recreation of the popular drag and drop interface in{' '}
				<a target="_blank" href="trello.com"> Trello </a>{' '}
				and other similar apps.
			</p>

			<p>To get started, either sign up with any email or sign in:</p>
		</div>

		<div class="grid grid-cols-1 place-items-stretch gap-4 text-lg font-bold sm:grid-cols-2">
			<a
				class="cursor-pointer rounded-lg bg-gray-900 p-8 text-center tracking-wide text-cyan-400 hover:underline"
				role="button"
				href="/signup"
			>
				Sign Up
			</a>

			<a
				class="cursor-pointer rounded-lg bg-gray-900 p-8 text-center tracking-wide text-cyan-400 hover:underline"
				role="button"
				href="/signin"
			>
				Sign In
			</a>
		</div>
	</div>
</main>
