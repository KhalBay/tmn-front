<template>
  <n-config-provider :locale="ruRU" :theme="null">
    <n-message-provider>
      <div style="max-width: 1600px; margin: 0 auto; padding: 6px;">
        <router-view />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
// При новой заяке отправлять на почту с ПДФ материалами
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import { ruRU } from 'naive-ui';
</script>

<style>
html {
  background-color: aliceblue;
}
</style>

