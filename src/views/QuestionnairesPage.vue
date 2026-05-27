<template>
  <n-space vertical>
    <n-space justify="space-between" align="center">
      <n-h2>Заявки</n-h2>
      <n-space>
        <n-button type="primary" @click="$router.push('/questionnaires/new')">
          Создать заявку
        </n-button>
        <n-button @click="handleLogout">Выйти ({{ authStore.userName }})</n-button>
      </n-space>
    </n-space>

    <n-data-table
        :columns="columns"
        :data="questionnaires"
        :loading="loading"
        :row-key="(row) => row.id"
        striped
    />
  </n-space>
</template>

<script setup>
import { ref, h, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, NTag, NSpace, NDataTable, NH2, NTable, NIcon } from 'naive-ui';
import { EditOutlined, DeleteOutlined } from '@vicons/antd';
import { useAuthStore } from '../stores/auth';
import httpClient from '../api/httpClient';

const router = useRouter();
const authStore = useAuthStore();
const questionnaires = ref([]);
const loading = ref(false);

const columns = [
  {
    type: 'expand',
    renderExpand: (row) => {
      if (!row.materials || row.materials.length === 0) {
        return h('div', {
          style: 'padding: 16px; color: #999; text-align: center;'
        }, 'Нет материалов');
      }

      return h('div', { style: 'padding: 16px;' }, [
        h('h4', { style: 'margin: 0 0 12px 0;' }, 'Материалы:'),
        h(NTable, {
          bordered: true,
          singleLine: false,
          size: 'small'
        }, [
          h('thead', [
            h('tr', [
              h('th', { style: 'padding: 8px 12px;' }, '№'),
              h('th', { style: 'padding: 8px 12px;' }, 'Название'),
              h('th', { style: 'padding: 8px 12px; text-align: right;' }, 'Количество'),
              h('th', { style: 'padding: 8px 12px;' }, 'Ед. изм.'),
              h('th', { style: 'padding: 8px 12px; text-align: right;' }, 'Артикул')
            ])
          ]),
          h('tbody',
              row.materials.map((material, idx) =>
                  h('tr', { key: material.id }, [
                    h('td', { style: 'padding: 8px 12px;' }, idx + 1),
                    h('td', { style: 'padding: 8px 12px;' }, material.name),
                    h('td', { style: 'padding: 8px 12px; text-align: right;' }, material.quantity),
                    h('td', { style: 'padding: 8px 12px;' }, material.unit),
                    h('td', { style: 'padding: 8px 12px; text-align: right;' }, material.article)
                  ])
              )
          )
        ])
      ]);
    }
  },
  { title: 'ID', key: 'id', width: 60 },
  { title: 'Название', key: 'title', ellipsis: { tooltip: true } },
  { title: 'Адрес', key: 'address', ellipsis: { tooltip: true }, width: 180 },
  { title: 'Телефон', key: 'phone', width: 140 },
  {
    title: 'Материалов',
    key: 'materialsCount',
    width: 120,
    render: (row) => `${row.materials?.length || 0} шт.`
  },
  {
    title: 'Статус',
    key: 'status',
    width: 130,
    render: (row) => {
      const statusMap = {
        'created': { type: 'info', label: 'Создана' },
        'processing': { type: 'warning', label: 'В обработке' },
        'completed': { type: 'success', label: 'Завершена' }
      };
      const status = statusMap[row.status] || { type: 'default', label: row.status };
      return h(NTag, { type: status.type }, { default: () => status.label });
    }
  },
  { title: 'Создал', key: 'creator_name', width: 100 },
  {
    title: 'Действия',
    key: 'actions',
    width: 100,
    render: (row) => h(NSpace, { justify: 'center' }, () => [
      h(
          NButton,
          {
            size: 'small',
            circle: true,
            type: 'primary',
            onClick: () => editQuestionnaire(row.id)
          },
          {
            icon: () => h(NIcon, null, { default: () => h(EditOutlined) })
          }
      ),
      h(
          NButton,
          {
            size: 'small',
            circle: true,
            type: 'error',
            onClick: () => deleteQuestionnaire(row.id)
          },
          {
            icon: () => h(NIcon, null, { default: () => h(DeleteOutlined) })
          }
      )
    ])
  }
];

const fetchQuestionnaires = async () => {
  loading.value = true;
  try {
    const { data } = await httpClient.get('/questionnaires');
    console.log('Полученные данные:', data);
    questionnaires.value = data;
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const editQuestionnaire = (id) => {
  router.push(`/questionnaires/${id}/edit`);
};

const deleteQuestionnaire = async (id) => {
  if (!confirm('Удалить анкету?')) return;
  try {
    await httpClient.delete(`/questionnaires/${id}`);
    fetchQuestionnaires();
  } catch (err) {
    alert(err.response?.data?.message || 'Ошибка удаления');
  }
};

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};

onMounted(fetchQuestionnaires);
</script>