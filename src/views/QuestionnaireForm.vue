<template>
  <n-card :title="isEdit ? 'Редактирование заявки' : 'Новая заявка'" style="max-width: 700px; margin: 0 auto;">
    <n-form>
      <n-form-item label="Название заявки" required>
        <n-input v-model:value="form.title" placeholder="Например: Заявка на склад №1" />
      </n-form-item>

      <n-form-item label="Адрес">
        <n-input v-model:value="form.address" placeholder="ул. Ленина, 45" />
      </n-form-item>

      <n-form-item label="Телефон">
        <n-input v-model:value="form.phone" placeholder="+7 (999) 123-45-67" />
      </n-form-item>

      <n-form-item v-if="isEdit" label="Статус">
        <n-select v-model:value="form.status" :options="statusOptions" />
      </n-form-item>

      <n-divider>Материалы</n-divider>

      <n-space vertical>
        <n-card v-for="(material, index) in form.materials" :key="index" size="small">
          <n-space vertical>
            <n-space>
              <n-form-item label="Название" style="flex: 2">
                <n-input v-model:value="material.name" placeholder="Шифер" />
              </n-form-item>
              <n-form-item label="Кол-во" style="flex: 1">
                <n-input-number v-model:value="material.quantity" :min="0" />
              </n-form-item>
            </n-space>
            <n-space>
              <n-form-item label="Ед. изм." style="flex: 1">
                <n-input v-model:value="material.unit" placeholder="шт, кг, м..." />
              </n-form-item>
              <n-form-item label="Артикул" style="flex: 1">
                <n-input-number v-model:value="material.article" :min="0" />
              </n-form-item>
            </n-space>
          </n-space>
          <template #header-extra>
            <n-button type="error" size="small" @click="removeMaterial(index)">Удалить</n-button>
          </template>
        </n-card>
      </n-space>

      <n-button dashed block @click="addMaterial" style="margin-top: 12px;">
        + Добавить материал
      </n-button>

      <n-space style="margin-top: 24px;">
        <n-button type="primary" @click="handleSubmit" :loading="saving">
          {{ isEdit ? 'Сохранить' : 'Создать' }}
        </n-button>
        <n-button @click="$router.push('/questionnaires')">Отмена</n-button>
      </n-space>
    </n-form>
  </n-card>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  NButton, NInput, NInputNumber, NSelect, NForm, NFormItem,
  NCard, NSpace, NDivider
} from 'naive-ui';
import httpClient from '../api/httpClient';

const route = useRoute();
const router = useRouter();
const isEdit = computed(() => !!route.params.id);

const statusOptions = [
  { label: 'Создана', value: 'created' },
  { label: 'В обработке', value: 'processing' },
  { label: 'Завершена', value: 'completed' }
];

const form = ref({
  title: '',
  address: '',
  phone: '',
  status: 'created',
  materials: []
});

const saving = ref(false);

const addMaterial = () => {
  form.value.materials.push({
    name: '',
    quantity: 0,
    unit: '',
    article: 0
  });
};

const removeMaterial = (index) => {
  form.value.materials.splice(index, 1);
};

const fetchQuestionnaire = async () => {
  if (!isEdit.value) return;
  try {
    const { data } = await httpClient.get(`/questionnaires/${route.params.id}`);
    form.value = {
      title: data.title,
      address: data.address || '',
      phone: data.phone || '',
      status: data.status,
      materials: data.materials.map(m => ({
        name: m.name,
        quantity: m.quantity,
        unit: m.unit,
        article: m.article
      }))
    };
  } catch (err) {
    alert('Ошибка загрузки анкеты');
    router.push('/questionnaires');
  }
};

const handleSubmit = async () => {
  if (!form.value.title.trim()) {
    alert('Введите название анкеты');
    return;
  }
  if (form.value.materials.length === 0) {
    alert('Добавьте хотя бы один материал');
    return;
  }

  saving.value = true;
  try {
    const payload = {
      title: form.value.title,
      address: form.value.address,
      phone: form.value.phone,
      status: form.value.status,
      materials: form.value.materials
    };

    if (isEdit.value) {
      await httpClient.put(`/questionnaires/${route.params.id}`, payload);
    } else {
      await httpClient.post('/questionnaires', payload);
    }
    router.push('/questionnaires');
  } catch (err) {
    alert(err.response?.data?.message || 'Ошибка сохранения');
  } finally {
    saving.value = false;
  }
};

onMounted(() => {
  if (!isEdit.value) {
    addMaterial(); // Добавляем один пустой материал по умолчанию
  }
  fetchQuestionnaire();
});
</script>