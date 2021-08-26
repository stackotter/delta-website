<script>
  import Page from "$lib/page.svelte";
  import DownloadEntry from "$lib/DownloadEntry.svelte"
</script>

<Page
  title="Downloads"
  description="Delta Client is still deep in development so snapshot builds are in no short supply. Head over to the releases page on the Delta Client GitHub for more details on each release.">
  <h1>Downloads</h1>
  <p>Delta Client is still deep in development so snapshot builds are in no short supply. Head over to the <a href="https://github.com/stackotter/delta-client/releases">releases</a> page on the Delta Client GitHub for more details on each release.</p>

  <div id="downloads">
    <div class="download"><DownloadEntry isPrimary={true} downloadURL="/test" title="Snapshot 8" metadata="v0.1.0-snapshot.8 | 21 July '21"/></div>
    <div class="download"><DownloadEntry isPrimary={false} downloadURL="/test" title="Snapshot 7" metadata="v0.1.0-snapshot.7 | 21 July '21"/></div>
  </div>
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
</style>