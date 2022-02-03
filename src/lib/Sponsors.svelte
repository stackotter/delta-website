<script>
    const sponsors = [
        {
            "name": "Frank",
            "github": "https://github.com/FrankTCA",
            "website": "https://infotoast.org/",
            "type": "Primary"
        }
    ];

    export let type;
</script>

<div id="sponsors">
    {#each sponsors as sponsor}
        {#if sponsor.type == type}
            <span class="sponsor">
                <a href={sponsor.github}>
                    <img class="avatar" src="{sponsor.github}.png?size=128" alt="{sponsor.name}'s GitHub avatar">
                </a>
            </span>
        {/if}
    {/each}
</div>

<style>
    #sponsors {
        margin-bottom: 1rem;
        margin-top: 1rem;
        display: grid;
        grid-gap: 0.5rem;
        grid-auto-flow: row;
        grid-template-columns: repeat(auto-fill, 4rem);
        width: 100%;
        margin: 0.5rem 0;
    }

    .sponsor {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .avatar {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }

    h2 {
        margin: 0;
        padding: 0;
    }
</style>