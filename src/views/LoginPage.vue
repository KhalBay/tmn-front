<template>
  <n-card title="Авторизация" style="max-width: 400px; margin: 100px auto;">
    <n-form @submit.prevent="handleLogin">
      <n-form-item label="Логин">
        <n-input v-model:value="username" placeholder="Введите логин" />
      </n-form-item>
      <n-form-item label="Пароль">
        <n-input v-model:value="password" type="password" placeholder="Введите пароль" />
      </n-form-item>
      <n-button type="primary" block @click="handleLogin" :loading="loading">
        Войти
      </n-button>
    </n-form>
    <n-alert v-if="error" type="error" style="margin-top: 12px;">
      {{ error }}
    </n-alert>
  </n-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, NInput, NForm, NFormItem, NCard, NAlert } from 'naive-ui';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleLogin = async () => {
  if (!username.value || !password.value) {
    error.value = 'Заполните все поля';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    await authStore.login(username.value, password.value);
    router.push('/questionnaires');
  } catch (err) {
    error.value = err.response?.data?.message || 'Ошибка входа';
  } finally {
    loading.value = false;
  }
};
</script>