<script>
    import { situation } from "~/JourneyStateStore";
    import QuestionContainer from "~/Component/QuestionContainer.svelte";
    import ButtonInput from "~/Component/ButtonInput.svelte";

    function handleOnChange(value) {
        if (value) {
            const updated = $situation;
            updated.value = value;
            updated.submitted = true;
            situation.set(updated);
        } else {
            const updated = $situation;
            updated.value = null;
            updated.submitted = false;
            situation.set(updated);
        }
    }
</script>

<QuestionContainer label="Which of the following best describes your situation?">
    <ButtonInput isSelected="{$situation.value === 'first_time_buyer'}" on:click={() => handleOnChange('first_time_buyer')} label="I'm a first time buyer" />
    <ButtonInput isSelected="{$situation.value === 'purchase'}" on:click={() => handleOnChange('purchase')} label="I'm purchasing a property" />
    <ButtonInput isSelected="{$situation.value === 'purchase_buy_to_let'}" on:click={() => handleOnChange('purchase_buy_to_let')} label="I'm purchasing a buy to let" />
</QuestionContainer>
