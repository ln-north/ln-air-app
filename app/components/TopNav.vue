<template>
<div class="top-nav">
  <button 
    @click="studioMode" 
    class="top-nav-studio-button" 
    :class="{ 'top-nav-studio-button--active': studioModeEnabled }"
  >{{ $t('common.studioMode') }}</button>
  <button
    v-if="isDevMode"
    @click="openDevTools"
    class="top-nav-dev-mode-button">
    <i class="icon-dev" />
  </button>
  <div class="top-nav-login">
    <login/>
  </div>
  <button 
    @click="openSettingsWindow" 
    class="top-nav-open-setting-button" 
    data-test="OpenSettings"
  >{{ $t('common.settings') }}</button>
    <a @click="openFeedback" class="top-nav-feedback-anchor">
    {{ $t('common.feedback') }}
  </a>
  <a @click="openHelp" class="top-nav-help-anchor">
    {{ $t('common.help') }}
  </a>
</div>
</template>

<script lang="ts" src="./TopNav.vue.ts"></script>

<style lang="less" scoped>
@import "../styles/index";

@bg-color: @dark-theme-bg-medium;
@base-color: @dark-theme-base-high;

.top-nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 32px;
  width: 100%;
  background-color: @bg-color;
}

.top-nav-studio-button {
  font-size: 12px;
  color: @base-color;
  padding: 2px 10px 0;
  box-sizing: border-box;
  height: 32px;
  margin-right: auto;
}

.top-nav-dev-mode-button {
  font-size: 12px;
  color: @base-color;
  padding: 0 8px;
  box-sizing: border-box;
  height: 32px;
}

.top-nav-login {
  font-size: 12px;
  color: @base-color;
}

.top-nav-open-setting-button {
  font-size: 12px;
  color: @base-color;
  padding: 2px 8px 0;
  box-sizing: border-box;
  height: 32px;
}

.top-nav-feedback-anchor {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: @base-color;
  padding: 2px 8px 0;
  box-sizing: border-box;
  height: 32px;
  text-decoration: none;
}

.top-nav-help-anchor {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: @base-color;
  padding: 2px 8px 0;
  box-sizing: border-box;
  height: 32px;
  text-decoration: none;
}
</style>
