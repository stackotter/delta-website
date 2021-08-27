<script>
  import Page from "$lib/Page.svelte";
  import DownloadEntry from "$lib/DownloadEntry.svelte"

  async function getReleases() {
    const res = await fetch("https://api.github.com/repos/stackotter/delta-client/releases")

    if (res.ok) {
      return await res.json()
    } else {
      throw new Error(await res.text())
    }
  }

  var promise = getReleases()
</script>

<Page
  title="Downloads"
  description="Delta Client is still deep in development so snapshot builds are in no short supply. Head over to the releases page on the Delta Client GitHub for more details on each release.">
  <h1>Downloads</h1>
  <p>Delta Client is still deep in development so snapshot builds are in no short supply. Head over to the <a href="https://github.com/stackotter/delta-client/releases">releases</a> page on the Delta Client GitHub for more details on each release.</p>

  {#await promise}
    <div id="message">Loading releases from GitHub...</div>
  {:then releases}
    <div id="downloads">
      {#each releases as release, i}
        <div class="download">
          <DownloadEntry
            isPrimary={i == 0}
            downloadURL={release.assets[0].browser_download_url}
            title={release.name}
            metadata="{release.tag_name} | {new Date(Date.parse(release.published_at)).toLocaleDateString('en-AU', {
              year: "numeric", month: "long", day: "numeric"
            })}"/>
        </div>
      {/each}
    </div>
  {:catch error}
    <div id="message">Failed to load releases: "{error.message}"</div>
  {/await}
</Page>

<style>
  #downloads {
    margin-top: 3rem;
    border-bottom: 1px solid rgba(1, 1, 1, 0.3);
  }

  .download {
    padding: 1rem 1.5em;
    border-top: 1px solid rgba(1, 1, 1, 0.3);
  }

  #message {
    margin: auto;
    text-align: center;
  }
</style>