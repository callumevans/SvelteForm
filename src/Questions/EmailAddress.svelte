<script>
    import { emailAddress } from "~/JourneyStateStore";
    import TextInput from "~/Component/TextInput.svelte";
    import QuestionContainer from "../Component/QuestionContainer.svelte";

    export let value = '';

    function handleOnChange(value) {
        if (value) {
            const updated = $emailAddress;
            updated.submitted = true;
            emailAddress.set(updated);
        } else {
            const updated = $emailAddress;
            updated.submitted = false;
            emailAddress.set(updated);
        }
    }
</script>

<QuestionContainer label="What's your email address?">
    <TextInput
            placeholder="you@domain.com"
            bind:value={$emailAddress.value}
            onChange="{handleOnChange}"
    />
</QuestionContainer>
