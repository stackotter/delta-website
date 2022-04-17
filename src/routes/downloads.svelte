<script>
  import Page from "$lib/Page.svelte";
  import DownloadEntry from "$lib/DownloadEntry.svelte";
</script>

<Page
  title="Downloads - Delta Client"
  description="Delta Client is still deep in development so only automated development builds are provided.">
  <h1>Downloads</h1>
  <p>Delta Client is still deep in development so only automated development builds are provided.</p>
  <p>These automated development builds are available on Delta Client's <a href="https://github.com/stackotter/delta-client/actions/workflows/main.yml?query=branch%3Amain">GitHub Actions page</a>. Sadly a GitHub account is required to download any builds due to a limitation of GitHub.</p>
</Page>

<style>
  h2 {
    margin-bottom: 1rem;
  }

  #downloads {
    margin-top: 3rem;
  }

  .download {
    padding: 1rem 1rem;
    border-top: 1px solid rgba(1, 1, 1, 0.3);
  }

  @media(max-width: 560px) {
    .download {
      padding: 1.3rem 1rem;
    }
  }
</style>
