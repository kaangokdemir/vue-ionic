<template lang="pug">
IonPage
  IonHeader
    IonToolbar
      IonTitle Tab 3
  IonContent(:fullscreen='true')
    IonHeader(collapse='condense')
      IonToolbar
        IonTitle(size='large') Tab 3
    ExploreContainer(name='Tab 3 page')
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
  name: 'Tab3',
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
