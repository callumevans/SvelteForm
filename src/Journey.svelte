<script>
    import { displayQuestions } from "~/JourneyStateStore";
    import {theme} from '~/ThemeStore';
    import {css} from "emotion";

    import EmailAddress from "./Questions/EmailAddress.svelte";
    import Banner from "./Layout/Banner.svelte";
    import Situation from "./Questions/Situation.svelte";

    export let questions;

    let themeStyle = css`
        background: ${$theme.journeyBackground};
    `;
</script>

<style>
    #layout {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    #questionsWrapper {
        flex-grow: 1;
    }

    .questions {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 75%;
        padding: 1.5em 0;
    }
</style>

<div id="layout">
    <Banner />
    <div id="questionsWrapper" class="{themeStyle}">
        <div class="questions">
            {#each $displayQuestions as question}
                {#if question.questionKey === 'EmailAddress'}
                    <EmailAddress />
                {:else if question.questionKey === 'Situation'}
                    <Situation />
                {/if}
            {/each}
        </div>
    </div>
</div>
