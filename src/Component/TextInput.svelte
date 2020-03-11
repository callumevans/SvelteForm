<script>
    import { theme } from '~/ThemeStore';
    import { css } from "emotion";

    export let placeholder = null;
    export let value = '';

    export let onChange = null;

    function handleChange(event) {
        if (onChange) {
            onChange(event.target.value);
        }
    }

    let themeStyle = css`
        outline: none;
        padding: 0.75em 0.9em;
        border-radius: 5px;
        border: 1.3px solid ${$theme.inputBorder};
        background: white;
        font-size: 1em;
        width: 100%;
        box-sizing: border-box;

        &:focus {
            border: 1.3px solid ${$theme.primary};
        }

        ::placeholder {
            color: #d0d0d0;
        }
    `;
</script>

<input
    placeholder="{placeholder}"
    class="{themeStyle}"
    type="text"
    bind:value={value}
    on:change="{handleChange}"
>
