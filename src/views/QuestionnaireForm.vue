<template>
  <n-card :title="isEdit ? 'Редактирование заявки' : 'Новая заявка'" style="max-width: 700px; margin: 0 auto;" size="small">
    <n-form>
      <n-form-item label="Тип работ" required>
        <n-select
            v-model:value="form.work_type"
            placeholder="Выберите тип работ"
            :options="workTypeOptions"
        />
      </n-form-item>

      <n-form-item label="Готовые шаблоны" v-if="form.work_type === 'Канализация'">
        <n-select
            v-model:value="selectedTemplate"
            filterable
            placeholder="Выберите подходящий шаблон"
            :options="floorOptions"
            @update:value="applyTemplate"
        />
      </n-form-item>

      <n-form-item label="Адрес" required>
        <n-input v-model:value="form.address" placeholder="ул. Ленина, 45"/>
      </n-form-item>

      <n-form-item label="Телефон">
        <n-input v-model:value="form.phone" placeholder="+7 (999) 123-45-67"/>
      </n-form-item>

      <n-form-item v-if="isEdit" label="Статус">
        <n-select v-model:value="form.status" :options="statusOptions"/>
      </n-form-item>

      <n-divider class="mt-0">Материалы</n-divider>

      <n-space vertical>
        <div v-for="(material, index) in form.materials" :key="index" class="material-card">
          <n-flex size="small" align="stretch" justify="stretch">
            <n-form-item label="Название" size="small" style="flex: 2">
              <n-select
                  v-model:value="material.name"
                  :options="materialOptions"
                  size="small"
                  tag
                  filterable
                  :disabled="selectedTemplate"
              />
            </n-form-item>
            <n-form-item label="Кол-во" size="small" style="flex: 1">
              <n-input-number v-model:value="material.quantity" :min="0" size="small"/>
            </n-form-item>
            <n-form-item label="Ед. изм." size="small" style="flex: 1">
              <n-select
                  v-model:value="material.unit"
                  :options="allUnitOptions"
                  size="small"
                  tag
                  filterable
                  :disabled="selectedTemplate"


              />
            </n-form-item>
          </n-flex>
        </div>
      </n-space>

<!--      <n-flex>-->
        <n-button dashed @click="addMaterial()" style="margin-top: 12px; flex:1;"
                v-if="!selectedTemplate"        >
          +1 (Добавить материал)
        </n-button>
<!--        <n-button dashed @click="addMaterial(10)" style="margin-top: 12px; flex: 1;">-->
<!--          +10 (Добавить 10 материалов)-->
<!--        </n-button>-->
<!--      </n-flex>-->

      <n-space style="margin-top: 24px;" justify="end">
        <n-button @click="router.push({ name: 'Questionnaires' })">Отмена</n-button>
        <n-button type="primary" @click="handleSubmit" :loading="saving" >
          {{ isEdit ? 'Сохранить' : 'Создать' }}
        </n-button>
      </n-space>
    </n-form>
  </n-card>
</template>

<style scoped>
.mt-0 {
  margin-top: 0;
}
:deep(.n-card > .n-card-content) {
  padding: 0;
}
</style>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NCard, NDivider, NFlex, NForm, NFormItem, NInput, NInputNumber, NSelect, NSpace } from 'naive-ui';
import httpClient from '../api/httpClient';
import {
  materialOptions,
  allUnitOptions,
  floorTemplates,
  workTypeOptions,
  floorOptions,
  statusOptions
} from '@/options.ts'

const route = useRoute();
const router = useRouter();
const isEdit = computed(() => !!route.params.id);

const emptyMaterial = {
  name: '',
  quantity: 0,
  unit: 'шт.',
  article: 0
}

const form = ref({
  work_type: 'Канализация',
  address: '',
  phone: '',
  status: 'created',
  materials: [],
});

const selectedTemplate = ref(null);
const saving = ref(false);

const applyTemplate = (templateKey) => {
  if (!templateKey || !floorTemplates[templateKey]) return;
  form.value.materials = floorTemplates[templateKey].map(m => ({ ...m }));
};

const addMaterial = (quantity = 1) => {
  const emptyMaterials = new Array(quantity).fill(null).map(() => ({ ...emptyMaterial }));
  form.value.materials.push(...emptyMaterials)
};

const fetchQuestionnaire = async () => {
  try {
    const { data } = await httpClient.get(`/questionnaires/${route.params.id}`);
    form.value = {
      work_type: data.work_type || '',
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
    router.push({ name: 'Questionnaires' });
  }
};

const handleSubmit = async () => {
  if (!form.value.work_type) {
    alert('Выберите тип работ');
    return;
  }

  if (!form.value.address.trim()) {
    alert('Введите адрес');
    return;
  }

  const materials = form.value.materials.filter(m => m.name && m.quantity > 0);

  if (materials.length === 0) {
    alert('Добавьте хотя бы один материал');
    return;
  }

  saving.value = true;
  try {
    const payload = {
      work_type: form.value.work_type,
      address: form.value.address,
      phone: form.value.phone,
      status: form.value.status,
      materials: materials
    };

    if (isEdit.value) {
      await httpClient.put(`/questionnaires/${route.params.id}`, payload);
    } else {
      await httpClient.post('/questionnaires', payload);
    }
    router.push({ name: 'Questionnaires' });
  } catch (err) {
    alert(err.response?.data?.message || 'Ошибка сохранения');
  } finally {
    saving.value = false;
  }
};

onMounted(() => {
  if (!isEdit.value) {
    addMaterial();
  } else {
    fetchQuestionnaire();
  }
});
</script>