<template>
	<div class="container">
		<main-table />
		<main-form />
	</div>
</template>

<script>
import MainTable from "./MainTable.vue";
import MainForm from "./MainForm.vue";
export default {
	components: {
		MainTable,
		MainForm,
	},
};
</script>