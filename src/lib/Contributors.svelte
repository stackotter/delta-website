<script>
    const url = "https://api.github.com/repos/stackotter/delta-client/contributors";

    var contributors = null;
    var hasErrored = false;

    fetch(url)
        .then(res => { return res.json() })
        .then(json => {
            contributors = json;
        })
        .catch(err => {
            hasErrored = true;
            console.log(err);
        })
</script>

<div id="container">
    {#if !hasErrored}
        {#if contributors}
            <div id="contributors">
                {#each contributors as contributor}
                    <a href={contributor.html_url} class="contributor" title={contributor.login}>
                        <img class="avatar" src="{contributor.avatar_url}&size=128" alt="{contributor.login}'s GitHub avatar">
                    </a>
                {/each}
            </div>
        {:else}
            <div>Loading contributors...</div>
        {/if}
    {:else}
        <div>Failed to load contributors from GitHub.</div>
    {/if}
</div>

<style>
    #contributors {
        display: grid;
        grid-gap: 0.5rem;
        grid-auto-flow: row;
        grid-template-columns: repeat(auto-fill, 4rem);
        width: 100%;
    }

    #container {
        margin: 1rem 0;
    }

    .contributor {
        width: 4rem;
        height: 4rem;
        display: block;
    }

    .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
</style>

