<template>
  <div>
    <ProductListOne />
    <ProductListTwo />
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne.vue';
import ProductListTwo from '@/components/ProductListTwo.vue';

export default {
  name: 'Shop',
  components: { ProductListOne, ProductListTwo },
  data: () => ({
    //
  }),
};
</script>
