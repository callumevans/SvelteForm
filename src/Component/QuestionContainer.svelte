<script>
    export let label = null;
</script>

<style>
    .questionContainer {
        width: 100%;
        margin: 1.4em 0;
        opacity: 1;
        transition: opacity .5s;
        animation: enter ease-in .2s;
    }

    @keyframes enter {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .inputGrid {
        display: grid;
        grid-auto-rows: auto;
        grid-row-gap: 1.4em;
    }
</style>

<div class="questionContainer">
    {#if label}
        <h3>{label}</h3>
    {/if}
    <div class="inputGrid">
        <slot />
    </div>
</div>
