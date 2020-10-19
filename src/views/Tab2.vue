<template lang="pug">
IonPage
  IonHeader
    IonToolbar
      IonTitle Tab 2
  IonContent(:fullscreen='true')
    IonHeader(collapse='condense')
      IonToolbar
        IonTitle(size='large') Tab 2
    ExploreContainer(name='Tab 2 page')
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue'
import ExploreContainer from '@/components/ExploreContainer.vue'

export default {
  name: 'Tab2',
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
}
</script>
