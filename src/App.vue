<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router'
import { computed } from 'vue';

const route = useRoute()
const router = useRouter()

// Управляем отображением из URL
const showLogin = computed(() => route.path === '/login')
const showRegister = computed(() => route.path === '/register')

function closeModals() {
  router.push('/') // убираем /login или /register из адресной строки
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header
      :show-login="showLogin" 
      :show-register="showRegister" 
      @close-modals="closeModals"
    />

    <main class="flex-1 pt-16">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
