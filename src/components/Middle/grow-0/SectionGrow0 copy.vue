<script>
    import InternationalFlag from '../../../assets/img/flags/international.png';
import LeftSidebarMenu from './LeftSidebarMenu.vue';
    export default {
    name: "SectionGrow0",
    }
</script>

<template>
      <div class="section grow-0">
            <div class="absolute-content content">
               <LeftSidebarMenu />
            </div>
        </div>
</template>



<style lang="scss" scoped>
    .section.grow-0 {
    flex-grow: 0;
    flex-shrink: 0;
}
.section {
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    display: flex;
    position: relative;
}
.absolute-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.lmenu-main[data-v-c42aca5e] {
    background-color: #252a2d;
    padding: 0 8px 32px;
    position: relative;
}
.left-menu-header[data-v-a02f1bb9] {
    z-index: 2;
    background: #252a2d;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 8px 4px;
    display: flex;
    position: sticky;
    top: 0;
}
.left-menu-header .logo-link[data-v-a02f1bb9] {
    display: flex;
}
a {
    cursor: pointer;
    user-select: none;
    color: inherit;
    text-decoration: none;
}
.left-menu-header .logo-link .logo[data-v-a02f1bb9] {
    width: 92px;
    height: 16px;
}
.left-menu-header .close[data-v-a02f1bb9] {
    cursor: pointer;
}
.left-menu-header .close svg[data-v-a02f1bb9] {
    fill: #fff;
    width: 18px;
    height: 18px;
}
@media (min-width: 376px) {
    .menu-tiles[data-v-cafe7da3] {
        grid-template-columns: repeat(auto-fill, minmax(66px, 1fr));
    }
}
.menu-tiles[data-v-cafe7da3] {
    scrollbar-width: none;
    background-color: #2d3337;
    border-radius: 4px;
    flex-wrap: wrap;
    // grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
    gap: 12px 16px;
    padding: 16px;
    display: grid;
}
.menu-tile[data-v-0822ca80] {
    cursor: pointer;
    color: #aaaeb0;
    flex-direction: column;
    gap: 4px;
    display: flex;
}
.menu-tile.selected .tile[data-v-0822ca80] {
    background-color: #3b4432;
    border-color: #435632;
}
.menu-tile .tile[data-v-0822ca80] {
    background-color: #252a2d;
    border: 1px solid #444;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    width: 100%;
    height: 44px;
    padding: 8px 10px;
    display: flex;
    position: relative;
}

</style>