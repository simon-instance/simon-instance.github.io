<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import;

@font-face {
  font-family: "Daddy Rewind";
  src: url("./fonts/rewind.subset.ttf") format("truetype");
}

@font-face {
  font-family: "Nunito Bold";
  src: url("./fonts/nunito.subset.ttf") format("truetype");
}

body.dark {
  background: #000;
}

p,
div,
span,
a {
  @apply dark:text-white text-xl;
}
p {
  @apply dark:text-gray-300 text-gray-600 leading-relaxed;
}
h1 {
  @apply dark:text-white text-3xl font-nunito;
}
h1.pageTitle {
  @apply text-4xl mb-3;
}

h2 {
  @apply dark:text-white text-2xl font-nunito;
}
h3 {
  @apply dark:text-white text-xl font-nunito;
}
a {
  @apply bg-white justify-items-center my-5 cursor-pointer dark:bg-transparent transition duration-300 ease-in-out py-2 px-4 text-lg rounded text-black dark:text-white;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
}

svg {
  display: block;
  margin: auto;
}
</style>

<script>
import Nav from "./Nav.svelte";
import Home from "./components/Home.svelte";

localStorage.theme ||= "dark";
localStorage.theme === "dark"
  ? document.body.classList.add("dark")
  : document.body.classList.remove("dark");

</script>

<Nav/>

<main>
  <Home/>
</main>

