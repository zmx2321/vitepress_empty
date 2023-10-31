<template>
  <section class="site-footer">自定义底部信息</section>

  <backTop />
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});
</script>
