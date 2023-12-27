<script setup lang="ts">
const localeRoute = useLocaleRoute();

// await clearError();
await navigateTo(localeRoute({ name: "404" }));
</script>

