<script>
    import { theme } from '~/ThemeStore';
    import { css } from "emotion";

    export let label = null;
    export let isSelected = false;

    let themeStyle = css`
        border-radius: 5px;
        border: 1.3px solid ${$theme.inputBorder};
        background: white;
        font-size: 1em;
        width: 100%;
        box-sizing: border-box;
        padding: 0.75em 0.9em;
        text-align: center;
        transition: .2s;

        &.isSelected, &:hover {
            cursor: pointer;
            background: ${$theme.primary};
            border: 1.3px solid ${$theme.primary};
            color: white;
        }
    `;
</script>

<div on:click class="{themeStyle} {isSelected ? 'isSelected' : ''}">{label}</div>
