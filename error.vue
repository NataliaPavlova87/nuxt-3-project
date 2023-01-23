<template>
  <div class="error">
    <h2>{{ error.statusCode }}</h2>
    <p>{{ error.statusMessage }}</p>
    <button @click="handleError">Go Home</button>
  </div>
</template>

<script setup>
const handleError = () => {
  clearError({
    redirect: "/",
  });
};

const error = useError();
</script>
