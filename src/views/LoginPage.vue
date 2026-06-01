<template>
  <n-card style="max-width: 400px; margin: 100px auto;">
    <n-tabs v-model:value="activeTab" type="line" animated>
      <!-- Вкладка Вход -->
      <n-tab-pane name="login" tab="Вход">
        <n-form @submit.prevent="handleLogin">
          <n-form-item label="Логин">
            <n-input v-model:value="loginForm.username" placeholder="Введите логин" />
          </n-form-item>
          <n-form-item label="Пароль">
            <n-input v-model:value="loginForm.password" type="password" placeholder="Введите пароль" />
          </n-form-item>
          <n-button type="primary" block @click="handleLogin" :loading="loginLoading">
            Войти
          </n-button>
        </n-form>
        <n-alert v-if="loginError" type="error" style="margin-top: 12px;">
          {{ loginError }}
        </n-alert>
      </n-tab-pane>

      <!-- Вкладка Регистрация -->
      <n-tab-pane name="register" tab="Регистрация">
        <n-form @submit.prevent="handleRegister">
          <n-form-item label="Логин">
            <n-input v-model:value="registerForm.username" placeholder="Придумайте логин" />
          </n-form-item>
          <n-form-item label="Пароль">
            <n-input v-model:value="registerForm.password" type="password" placeholder="Придумайте пароль" />
          </n-form-item>
          <n-button type="primary" block @click="handleRegister" :loading="registerLoading">
            Зарегистрироваться
          </n-button>
        </n-form>
        <n-alert v-if="registerError" type="error" style="margin-top: 12px;">
          {{ registerError }}
        </n-alert>
        <n-alert v-if="registerSuccess" type="success" style="margin-top: 12px;">
          {{ registerSuccess }}
        </n-alert>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, NInput, NForm, NFormItem, NCard, NAlert, NTabs, NTabPane } from 'naive-ui';
import { useAuthStore } from '../stores/auth';
import httpClient from '../api/httpClient';

const router = useRouter();
const authStore = useAuthStore();

const activeTab = ref('login');

// Форма входа
const loginForm = ref({
  username: '',
  password: ''
});
const loginLoading = ref(false);
const loginError = ref('');

const handleLogin = async () => {
  if (!loginForm.value.username || !loginForm.value.password) {
    loginError.value = 'Заполните все поля';
    return;
  }

  loginLoading.value = true;
  loginError.value = '';

  try {
    await authStore.login(loginForm.value.username, loginForm.value.password);
    router.push({ name: 'Questionnaires' });
  } catch (err) {
    loginError.value = err.response?.data?.message || 'Ошибка входа';
  } finally {
    loginLoading.value = false;
  }
};

// Форма регистрации
const registerForm = ref({
  username: '',
  password: ''
});
const registerLoading = ref(false);
const registerError = ref('');
const registerSuccess = ref('');

const handleRegister = async () => {
  if (!registerForm.value.username || !registerForm.value.password) {
    registerError.value = 'Заполните все поля';
    return;
  }

  if (registerForm.value.password.length < 3) {
    registerError.value = 'Пароль должен быть минимум 3 символа';
    return;
  }

  registerLoading.value = true;
  registerError.value = '';
  registerSuccess.value = '';

  try {
    await httpClient.post('/register', {
      username: registerForm.value.username,
      password: registerForm.value.password,
      role: 'brigadier'
    });

    registerSuccess.value = 'Регистрация успешна! Теперь войдите.';
    registerForm.value = { username: '', password: '' };

    setTimeout(() => {
      activeTab.value = 'login';
      loginForm.value.username = registerForm.value.username || '';
      registerSuccess.value = '';
    }, 1500);
  } catch (err) {
    registerError.value = err.response?.data?.message || 'Ошибка регистрации';
  } finally {
    registerLoading.value = false;
  }
};
</script>