<template>
  <header>
    <Menubar :model="items">
      <template #start>
        <img src="/assets/images/logo.png" alt="logo" class="logo-img">
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut
            }}</span>
          <i v-if="hasSubmenu"
            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <InputText placeholder="想找什么?" type="text" class="w-32 sm:w-auto header-search" />
        </div>
      </template>
    </Menubar>
  </header>
</template>

<script setup>
const items = ref([
  {
    label: '主页',
    icon: 'pi pi-home'
  },
  {
    label: '相册',
    icon: 'pi pi-camera'
  },
  {
    label: '归档',
    icon: 'pi pi-database',
  },
  {
    label: '工具',
    icon: 'pi pi-wrench'
  },
  {
    label: 'SOUL',
    icon: 'pi pi-hashtag',
    items: [
      {
        label: '毒鸡汤',
        icon: 'pi pi-bolt',
      },
      {
        label: '唐宋诗',
        icon: 'pi pi-file',
      },
      {
        label: '宋词',
        icon: 'pi pi-file-word',
      },
      {
        separator: true
      },
      {
        label: '其他',
        icon: 'pi pi-hashtag',
        items: [
          {
            label: 'API',
            icon: 'pi pi-send',
          },
          {
            label: 'RSS',
            icon: 'pi pi-code',
          }, {
            label: '建站日志',
            icon: 'pi pi-history',
          }
        ]
      }
    ]
  },
]);
</script>

<style lang="scss">
.logo-img {
  width: 120px;
  height: 40px;
}

@media (max-width: 640px) {
  .logo-img {
    width: 80px;
    height: 30px;
  }

  .p-menubar-start {
    flex-grow: 1;
  }

  .header-search {
    display: none;
  }
}
</style>