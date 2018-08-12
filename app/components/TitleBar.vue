<template>
<div class="titlebar">
  <div class="titlebar-streaming-display" v-if="isStreaming">
    <LiveIcon/>
  </div>
  <div class="titlebar-logo-mark">
    <NAirLogoMark />
  </div>
  <div class="titlebar-logo-type">
    <NAirLogoType />
  </div>
  <div class="titlebar-title">
    {{ title }}
  </div>
  <div class="titlebar-actions">
    <button class="titlebar-action minimize" @click="minimize">
      <WindowMinimizeIcon />
    </button>
    <button class="titlebar-action maximize" @click="maximize">
      <WindowMaximizeIcon />
    </button>
    <button class="titlebar-action close" @click="close">
      <WindowCloseIcon />
    </button>
  </div>
</div>
</template>

<script lang="ts" src="./TitleBar.vue.ts"></script>

<style lang="less" scoped>
@import "../styles/index";

@bg-color: @dark-theme-bg-medium;
@button-hover-color: @dark-theme-up-medium;
@button-active-color: @dark-theme-up-low;
@danger-color: @accent-red;
@danger-active-color: @accent-red-up-low;
@base-color: @dark-theme-base-high;

.titlebar {
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  -webkit-app-region: drag;
  background-color: @bg-color;
  padding: 1px 0 0 8px;
}

.titlebar-streaming-display {
  // TODO: あとで書く
}

.titlebar-logo-mark {
  flex-basis: 39px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 39px;
    height: 24px;
    fill: @base-color;
  }
}

.titlebar-logo-type {
  flex-basis: 190px * 14 / 48;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;

  > svg {
    width: 190px * 14 / 48;
    height: 14px;
    fill: @base-color;
  }
}

.titlebar-title {
  display: flex;
  text-align: right;
  flex-grow: 1;
  font-size: 12px;
  padding-top: 2px; // NOTE: adjust for font
  padding-left: 8px;
  color: @base-color;
}

.titlebar-actions {
  margin-left: auto;
  margin-right: 0;
  -webkit-app-region: no-drag;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.titlebar-action {
  height: 32px;
  width: 46px;
  font-size: 0;
  transition: background-color 70ms ease;

  > svg {
    width: 14px;
    height: 14px;
    fill: @base-color;
  }

  &:hover {
    background-color: @button-hover-color;
  }
  &:active {
    background-color: @button-active-color;
  }

  &.close:hover {
    background-color: @danger-color;
  }
  &.close:active {
    background-color: @danger-active-color;
  }
}

</style>
