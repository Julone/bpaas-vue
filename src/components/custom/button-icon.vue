<script setup lang="ts">
import type { TooltipPlacement } from 'ant-design-vue/es/tooltip';

defineOptions({
  name: 'ButtonIcon'
});

interface Props {
  /**
   * button class
   */
  cls?: string;
  /**
   * iconify icon name
   */
  icon?: string;
  /**
   * tooltip content
   */
  tooltipContent?: string;
  /**
   * tooltip placement
   */
  tooltipPlacement?: TooltipPlacement;
  /**
   * trigger tooltip on parent
   */
  triggerParent?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  cls: 'h-40px text-icon',
  icon: '',
  tooltipContent: '',
  tooltipPlacement: 'bottom',
  getPopupContainer: () => document.body
});

function getPopupContainer(triggerNode: HTMLElement) {
  return props.triggerParent ? triggerNode.parentElement! : document.body;
}
</script>

<template>
  <ATooltip
    v-if="tooltipContent"
    :placement="tooltipPlacement"
    :get-popup-container="getPopupContainer"
    :title="tooltipContent"
  >
    <AButton type="text" :class="cls">
      <div class="flex-center gap-8px">
        <slot>
          <SvgIcon :icon="icon" />
        </slot>
      </div>
    </AButton>
  </ATooltip>
  <AButton v-else type="text" :class="cls">
    <div class="flex-center gap-8px">
      <slot>
        <SvgIcon :icon="icon" />
      </slot>
    </div>
  </AButton>
</template>

<style scoped></style>