<style global lang="postcss">
.brand {
  @apply my-auto text-5xl md:mr-52 xl:mr-64 mr-auto;
}

li {
  @apply block float-left;
}

.dark nav {
  border-bottom: 1px solid rgba(255,255,255,0.01);
}

nav {
  @apply py-3 bg-gradient-to-b from-gray-navbarLight to-gray-navbarLightGradient dark:from-gray-navbar dark:to-gray-navbarGradient 
    flex flex-col justify-evenly justify-items-center px-8 shadow drop-shadow-sm;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: sticky;
  z-index: 4;
  top: -0.1px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.5s ease;
}

#sub-nav {
  @apply flex justify-evenly justify-items-center;
}

.mobile-navbar {
  @apply flex sm:hidden;
  overflow: hidden;
  position: sticky;
  min-height: 0px;
  height: 0px;
  transition: ease all 0.5s;
}

.nav-sticky {
  @apply py-3;
}

.stay-fixed {
  @apply w-full py-0;
  transition: all 0.5s ease;
  z-index: 1;
}

.stay-fixed-sticky {
  @apply py-6;
}

ul li {
  @apply h-full inline-block;
  margin: 0 5px 0 0;
}

nav #sub-nav ul li.nav-item,
nav #sub-nav ul li.spacer {
  @apply hidden sm:block;
}

.nav-item .mobile-nav-item {
  @apply bg-purple-500;
},

nav #sub-nav ul li.mobile-menu {
  @apply block sm:hidden;
}

nav #sub-nav ul li.spacer {
  @apply h-1/3 bg-gray-300 opacity-30 dark:bg-gray-500;
  margin: 30px 20px 0 8px;
  width: 1px;
}

nav #sub-nav ul li button {
  @apply my-5 px-3 shadow-none bg-transparent;
  width: 50px;
  height: 50px;
}

.nav-part ul li a {
  @apply bg-transparent relative;
  display: inline-block;
}

.nav-part ul li a:hover:after {
  bottom: 0px;
  opacity: 1;
}

.nav-part ul li a.mobile-nav-item {
  @apply my-1;
}

.enabled {
  @apply dark:bg-purple-700;
}

</style>

<script>
import Fa from "svelte-fa";
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { Menu } from "svelte-grommet-icons";
import { onMount } from "svelte";

let navItems = [
  {
    name: "What I offer",
    scrollTarget: "#what-i-offer",
    selected: true
  },
  {
    name: "My experience",
    scrollTarget: "#my-experience",
    selected: false
  },
  {
    name: "Projects",
    scrollTarget: "#projects",
    selected: false
  },
];

function toggleTheme() {
  localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
  document.body.classList = localStorage.theme;
}

function toggleMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (nav.style.minHeight === "0px" || nav.style.minHeight === "") {
    nav.style.minHeight = "55px";
    nav.style.height = 0;
  } else {
    nav.style.minHeight = 0;
    nav.style.height = 0;
  }
}

window.onscroll = (e) => {
  for (let i = 0; i < navItems.length; i++) {
    const target = document.getElementById(navItems[i].scrollTarget.substring(1));
    const targetRect = target.getBoundingClientRect();
    const targetScrollTop = targetRect.top;
    const targetHeight = targetRect.height;

    if (
      document.documentElement.scrollTop > targetScrollTop - 190
      && (document.documentElement.scrollTop < targetScrollTop + targetHeight - 100 || navItems.length - 1 == i)
    ) {
      navItems[i].selected = true;
      continue;
    }
    navItems[i].selected = false;
  }
}

const scrollToSection = (targetElem) => {
  const navHeight = document.getElementById("nav").offsetHeight;
  if (targetElem) {
    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollBy(0, targetElem.getBoundingClientRect().top - 100 - navHeight);
  }
}

onMount(() => {
  navItems.forEach(navItem => {
    const target = navItem.scrollTarget;
    const targetElem = document.getElementById(target.substring(1));
    document.querySelector(`a[href="${target}"]`).addEventListener('click', (event) => {
      event.preventDefault();
      scrollToSection(targetElem);
    });
  });
});
</script>

<nav id="nav">
  <div id="sub-nav" class="nav-part">
    <h1 class="brand">Simon</h1>
    <ul id="ul">
      {#each navItems as navItem}
        <li class="nav-item">
          <a class="{navItem.selected == true ? 'enabled' : ''}" href="{navItem.scrollTarget}"
            ><p>{navItem.name}</p></a>
        </li>
      {/each}
      <li class="spacer"></li>
      <li>
        <button
          on:click="{toggleTheme}"
          class="nav-button"
          aria-label="dark theme toggler"><Fa icon={faMoon} /></button>
      </li>

      <li class="mobile-menu">
        <button
          on:click="{toggleMobileNav}"
          class="nav-button"
          aria-label="mobile navigation"><Menu /></button>
      </li>
    </ul>
  </div>
  <div id="mobile-nav" class="mobile-navbar nav-part">
    <ul>
      {#each navItems as navItem}
        <li class="nav-item">
          <a
            on:click="{toggleMobileNav}"
            class="mobile-nav-item"
            href="{navItem.scrollTarget}"><p>{navItem.name}</p></a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
<div class="stay-fixed"></div>
