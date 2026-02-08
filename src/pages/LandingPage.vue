<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Card from 'primevue/card';

const router = useRouter();

const goToApp = () => {
  router.push('/app');
};
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-slate-800">

    <nav class="border-b border-slate-100 sticky top-0 bg-white/95 z-50">
      <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div class="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
          <i class="pi pi-box text-indigo-600"></i>
          wurzel
        </div>

        <div class="flex gap-3">
          <Button label="Login" text plain size="small" @click="router.push('/login')" />
          <Button label="Registrieren" severity="primary" size="small" rounded />
        </div>
      </div>
    </nav>

    <header class="max-w-5xl mx-auto px-6 py-24 text-center">
      <div class="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
        🚀 Beta Version ist live
      </div>

      <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
        Dein Studium.<br>
        <span class="text-indigo-600">Einfach organisiert.</span>
      </h1>

      <p class="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        Verwalte deine Module, tracke deine Noten und behalte Deadlines im Blick.
        Ohne Schnickschnack, einfach Fokus.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <Button label="Jetzt starten" icon="pi pi-arrow-right" iconPos="right" size="large" rounded @click="goToApp" />
        <Button label="Mehr erfahren" severity="secondary" variant="outlined" size="large" rounded />
      </div>
    </header>

    <section class="bg-slate-50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              <i class="pi pi-list text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Modul-Manager</h3>
            <p class="text-slate-500">Erstelle Module, ordne sie Semestern zu und behalte den Überblick über deine
              ECTS-Punkte.</p>
          </div>

          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <i class="pi pi-chart-bar text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Noten-Tracker</h3>
            <p class="text-slate-500">Visualisiere deinen aktuellen Schnitt. Sieh sofort, wo du stehst und was noch
              fehlt.</p>
          </div>

          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <i class="pi pi-clock text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Deadlines</h3>
            <p class="text-slate-500">Nie wieder eine Klausuranmeldung verpassen. Dendrite erinnert dich rechtzeitig.
            </p>
          </div>

        </div>
      </div>
    </section>

    <footer class="border-t border-slate-100 py-8 text-center text-slate-400 text-sm">
      <p>&copy; 2025 Wurzel. Built with Vue 3 & PrimeVue.</p>
    </footer>

  </div>
</template>