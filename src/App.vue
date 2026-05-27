<template>
  <n-config-provider :locale="ruRU" :theme="null">
    <n-message-provider>
      <div style="max-width: 1200px; margin: 0 auto; padding: 24px;">
        <router-view />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import { ruRU } from 'naive-ui';
</script>