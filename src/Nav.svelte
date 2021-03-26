<nav>
    <div>
        <button aria-label="Show work experience" class="w-full rounded-none hover:bg-indigo-500 shadow-none">Bekijk werkervaring</button>
    </div>
	<ul>
        {#each navItems as navItem}
            <li><a class="{ isActive(navItem.uri) }" href="{ navItem.uri }"><p>{ navItem.name }</p></a></li>
        {/each}
	</ul>
</nav>

<script>
    const navItems = [
        {
            name: 'Home',
            uri: '/',
        },
        {
            name: 'About',
            uri: '/about'
        },
    ];

	export let active;

	$: isActive = str => active === str && 'selected';
</script>

<style global lang="postcss">
    li {
        @apply block float-left;
    }

	nav {
		@apply sticky top-0 w-full dark:bg-indigo-navbar bg-indigo-navbarLight inline-block;
        z-index: 5;
        backdrop-filter: blur(20px);
	}

    nav > ul > li {
        margin: 0 5px 0 0;
    }

    nav > ul > li > a {
        display: inline-block;
    }


	nav > ul > li > a:after {
		@apply bg-indigo-300 dark:bg-indigo-600 opacity-0;
        position: absolute;
        content: '';
        height: 3px;
		border-radius: 0px 0px 2px 2px;
		width: 100%;
		left: 0;
        bottom: -4px; 
        transition: all ease-in-out .5s;
    }
	
	nav > ul > li > a:hover:after {
		bottom: 0px;
		opacity: 1;
	}

    nav > ul > li > a.selected {
        @apply dark:bg-indigo-700 cursor-default;
    }

	nav > ul > li > a.selected:hover:after {
		opacity: 0;
	}
    
</style>