<style scoped lang="postcss">
footer {
  @apply dark:border-indigo-400 border-gray-400 py-5 mt-8;
  border-style: dashed;
  border-width: 1px 0 0 0;
}

footer > div.content-wrapper {
  @apply mx-5 sm:mx-auto  sm:w-7/12 lg:w-5/12 flex justify-between;
}

footer > div.content-wrapper > div.spotify-root {
  @apply flex-grow flex;
}

footer > div.content-wrapper > div.spotify-root > div.song-data {
  @apply mr-0;
}

footer div.spotify {
  @apply text-green-400 mr-4;
  width: 32px;
  height: 32px;
}

footer div.spotify-icon {
  @apply h-full;
  display: flex;
  align-items: center;
}

footer span.song-spacer {
  @apply hidden md:inline;
}

footer div.song-data > p {
  @apply block md:inline;
}

footer div.song-data > small {
  @apply block;
  font-style: oblique;
}

footer div.scroll-up {
  @apply cursor-pointer;
  width: 35px;
}
</style>

<script>
import { Spotify } from "svelte-grommet-icons";
import get from "lodash/get";
import { onMount } from "svelte";

let promise = Promise.resolve([]);

promise = (async () => {
  const request = await self.fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=simon-instance&api_key=${
      import.meta.env.LASTFM
    }&format=json&limit=1`,
    {
      method: "GET",
    }
  );

  const response = await request.json();
  const track = get(response, "recenttracks.track[0]", false);
  const isPlaying = get(
    response,
    "recenttracks.track[0].@attr.nowplaying",
    false
  );
  const songData = {
    isPlaying,
    artist: track.artist["#text"],
    name: track.name,
  };

  if (request.ok) return songData;
  else if (!request.ok) throw response;
})();

const refreshUpArrow = () => {
  const elem = document.getElementById("upArrow");
  elem.style.filter = localStorage.theme === "dark"
    ? 'invert(100%)'
    : '';
}

const observer = new MutationObserver(refreshUpArrow)
observer.observe(document.body, { attributes: true });
onMount(async() => {
  refreshUpArrow();
});
</script>

<footer>
  <div class="content-wrapper">
    <div class="spotify-root">
      {#await promise}
        <p>Fetching recent song...</p>
      {:then song}
        <div class="spotify-icon">
          <div class="spotify">
            <Spotify />
          </div>
        </div>
        <div class="song-data">
          <b>{song.artist}</b>
          <span class="song-spacer"> - </span>
          <p>{song.name}</p>

          {#if song.isPlaying}
            <small>Now playing</small>
          {:else}
            <small class="song-status">Recently played</small>
          {/if}
        </div>
      {:catch _err}
        <p>Error fetching song</p>
      {/await}
    </div>

    <div class="scroll-up" on:click="{() => window.scrollTo(0, 0)}">
      <img id="upArrow" src="img/chevron-up.png" alt="chevron_up">
    </div>
  </div>
</footer>
