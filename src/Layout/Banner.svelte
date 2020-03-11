<script>
    import { theme } from '~/ThemeStore';
    import { css } from "emotion";

    let themeStyle = css`
        height: 70px;
        display: block;
        background: ${$theme.bannerBackground};
        position: sticky;
        top: 0;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
    `;
</script>

<style>
    .layout {
        display: flex;
        align-items: center;
    }

    .logo {
        margin-left: 2em;
        width: 130px;
        height: 42.44px;
    }
</style>

<div class="layout {themeStyle}">
    <img class="logo" src="{$theme.bannerImage}" />
</div>
