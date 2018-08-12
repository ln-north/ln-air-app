<template>
  <div class="login">
    <div class="login-status" v-if="loggedIn">
      <a
        @click="openUserpage"
        class="login-user-profile-anchor">
          <img class="login-user-thumbnail" :src="userIcon">
          <span class="login-user-name">{{ username }}</span>
      </a>
      <a class="login-logout-anchor" @click="logout"><i class="icon-log-out login-logout-icon"/>{{ $t('common.logout') }}</a>
    </div>
    <a v-else class="login-login-anchor" @click="login">{{ $t('common.login') }}</a>
  </div>
</template>

<script lang="ts" src="./Login.vue.ts"></script>

<style lang="less" scoped>
@import "../styles/index";

@image-placholeder-color: @dark-theme-base-low;
@base-color: @dark-theme-base-high;


.login {
  height: 32px;
  padding: 0 8px;
}

.login-status {
  display: flex;
  align-items: center;
}

.login-user-profile-anchor {
  display: flex;
  align-items: center;
  text-decoration: none;
}
  
.login-user-thumbnail {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: @image-placholeder-color;
}

.login-user-name {
  display: inline-block;
  max-width: 160px;
  text-align: left;
  text-decoration: none;
  overflow: hidden;
  padding: 2px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 4px;
  color: @base-color;
}

.login-logout-anchor {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  color: @base-color;
  box-sizing: border-box;
  height: 32px;
  text-decoration: none;
  margin-left: 8px;
}

.login-logout-icon {
  font-size: 12px;
}

.login-login-anchor {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: @base-color;
  padding: 2px 0 0;
  box-sizing: border-box;
  height: 32px;
  text-decoration: none;
  margin-left: 8px;
}
</style>