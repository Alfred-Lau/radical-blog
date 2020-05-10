<template>
  <div class="about">
    <div class="about-container">
      <!-- <iframe
        src="http://www.baidu.com"
        frameborder="0"
        title="Inline Frame Example"
        width="100%"
        height="600"
      >
      </iframe> -->
      <screen></screen>
    </div>
  </div>
</template>

<script lang="typescript">

import Screen from '@/components/Screen/screen';

export default {
  name: 'About',
  components: {
    Screen
  }

};
</script>
