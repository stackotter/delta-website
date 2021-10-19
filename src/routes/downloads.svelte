<script>
  import Page from "$lib/Page.svelte";
  import DownloadEntry from "$lib/DownloadEntry.svelte";

  async function getReleases() {
    const res = await fetch("https://api.github.com/repos/stackotter/delta-client/releases");

    if (res.ok) { return await res.json(); }
    else { throw new Error(await res.text()); }
  }

  var promise = getReleases();
</script>

<Page
  title="Downloads - Delta Client"
  description="Delta Client is still deep in development so snapshot builds are in no short supply. Head over to the releases page on the Delta Client GitHub for more details on each release.">
  <h1>Downloads</h1>
  <p>Delta Client is still deep in development so snapshot builds are in no short supply. Head over to the <a href="https://github.com/stackotter/delta-client/releases">releases</a> page on the Delta Client GitHub repository for more details on each release.</p>

  {#await promise}
    <div id="message">Loading releases from GitHub...</div>
  {:then releases}
    <div id="downloads">
      <div id="unstable" style="padding-bottom: 1.5rem">
        <h2> Unstable builds </h2>
        <div class="download"><DownloadEntry
          isPrimary={true}
          downloadURL="https://nightly.link/stackotter/delta-client/workflows/main/dev/DeltaClient.zip"
          title="Latest unstable build"
          metadata="Branch: dev"
        /></div>
        <div class="download" style="border-bottom: 1px solid rgba(1, 1, 1, 0.3);"><DownloadEntry
          isPrimary={false}
          downloadURL="https://github.com/stackotter/delta-client/actions"
          title="Previous unstable builds"
          metadata="All branches"
          buttonText="Downloads"
        /></div>
      </div>
      <div id="releases">
        <h2> Releases </h2>
        {#each releases as release, i}
          <div class="download">
            <DownloadEntry
              isPrimary={i == 0}
              downloadURL={release.assets[0].browser_download_url}
              title={release.name.split(" - ")[0]}
              metadata="{release.tag_name} | {new Date(Date.parse(release.published_at)).toLocaleDateString('en-AU', {
                year: "numeric", month: "long", day: "numeric"
              })}"/>
          </div>
        {/each}
      </div>
    </div>
  {:catch error}
    <div id="message">Failed to load releases: "{error.message}"</div>
  {/await}
</Page>

<style>
  h2 {
    margin-bottom: 1rem;
  }

  #downloads {
    margin-top: 3rem;
    border-bottom: 1px solid rgba(1, 1, 1, 0.3);
  }

  .download {
    padding: 1rem 1rem;
    border-top: 1px solid rgba(1, 1, 1, 0.3);
  }

  #message {
    margin: auto;
    text-align: center;
  }

  @media(max-width: 560px) {
    .download {
      padding: 1.3rem 1rem;
    }
  }
</style>