<template lang="pug">
IonPage
  IonHeader
    IonToolbar
      IonTitle Tab 1
  IonContent(:fullscreen='true')
    IonHeader(collapse='condense')
      IonToolbar
        IonTitle(size='large') Tab 1
    ExploreContainer(name='Tab 1 page')
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
  name: 'Tab1',
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
