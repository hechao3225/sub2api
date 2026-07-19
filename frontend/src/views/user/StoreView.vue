<template>
  <AppLayout>
    <div class="store-page">
      <div class="store-toolbar">
        <div>
          <h1 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('store.title') }}</h1>
          <p class="mt-1 text-sm text-gray-500 dark:text-dark-400">{{ t('store.description') }}</p>
        </div>
        <a
          :href="storeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary btn-sm shrink-0"
        >
          <Icon name="externalLink" size="sm" class="mr-1.5" :stroke-width="2" />
          {{ t('store.openInNewTab') }}
        </a>
      </div>

      <div class="store-frame-shell">
        <iframe
          :src="storeUrl"
          :title="t('store.title')"
          class="store-frame"
          referrerpolicy="strict-origin-when-cross-origin"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppLayout from '@/components/layout/AppLayout.vue'
import Icon from '@/components/icons/Icon.vue'

const { t } = useI18n()
const storeUrl = 'https://uufaka.com/shop/aimate'
</script>

<style scoped>
.store-page {
  @apply flex min-h-0 flex-col gap-4;
  height: calc(100vh - 64px - 4rem);
}

.store-toolbar {
  @apply flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-dark-600 dark:bg-dark-800;
}

.store-frame-shell {
  @apply min-h-0 flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-dark-600 dark:bg-dark-900;
}

.store-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: white;
}

@media (max-width: 640px) {
  .store-page {
    height: calc(100vh - 64px - 2rem);
  }

  .store-toolbar {
    @apply items-start;
  }
}
</style>
