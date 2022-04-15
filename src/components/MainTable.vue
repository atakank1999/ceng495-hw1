<template>
	<div id="table" class="container">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">Monday</th>
					<th scope="col">Tuesday</th>
					<th scope="col">Wednesday</th>
					<th scope="col">Thursday</th>
					<th scope="col">Friday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row" style="width: 118px">8:40 - 9:30</th>
					<td>{{ this.mondayData[1] }}</td>
					<td>{{ this.tuesdayData[1] }}</td>
					<td>{{ this.wednesdayData[1] }}</td>
					<td>{{ this.thursdayData[1] }}</td>
					<td>{{ this.fridayData[1] }}</td>
				</tr>
				<tr>
					<th scope="row">9:40 - 10:30</th>
					<td>{{ this.mondayData[2] }}</td>
					<td>{{ this.tuesdayData[2] }}</td>
					<td>{{ this.wednesdayData[2] }}</td>
					<td>{{ this.thursdayData[2] }}</td>
					<td>{{ this.fridayData[2] }}</td>
				</tr>
				<tr>
					<th scope="row">10:40 - 11:30</th>
					<td>{{ this.mondayData[3] }}</td>
					<td>{{ this.tuesdayData[3] }}</td>
					<td>{{ this.wednesdayData[3] }}</td>
					<td>{{ this.thursdayData[3] }}</td>
					<td>{{ this.fridayData[3] }}</td>
				</tr>
				<tr>
					<th scope="row">11:40 - 12:30</th>
					<td>{{ this.mondayData[4] }}</td>
					<td>{{ this.tuesdayData[4] }}</td>
					<td>{{ this.wednesdayData[4] }}</td>
					<td>{{ this.thursdayData[4] }}</td>
					<td>{{ this.fridayData[4] }}</td>
				</tr>
				<tr>
					<th scope="row">12:40 - 13:30</th>
					<td>{{ this.mondayData[5] }}</td>
					<td>{{ this.tuesdayData[5] }}</td>
					<td>{{ this.wednesdayData[5] }}</td>
					<td>{{ this.thursdayData[5] }}</td>
					<td>{{ this.fridayData[5] }}</td>
				</tr>
				<tr>
					<th scope="row">13:40 - 14:30</th>
					<td>{{ this.mondayData[6] }}</td>
					<td>{{ this.tuesdayData[6] }}</td>
					<td>{{ this.wednesdayData[6] }}</td>
					<td>{{ this.thursdayData[6] }}</td>
					<td>{{ this.fridayData[6] }}</td>
				</tr>
				<tr>
					<th scope="row">14:40 - 15:30</th>
					<td>{{ this.mondayData[7] }}</td>
					<td>{{ this.tuesdayData[7] }}</td>
					<td>{{ this.wednesdayData[7] }}</td>
					<td>{{ this.thursdayData[7] }}</td>
					<td>{{ this.fridayData[7] }}</td>
				</tr>
				<tr>
					<th scope="row">15:40 - 16:30</th>
					<td>{{ this.mondayData[8] }}</td>
					<td>{{ this.tuesdayData[8] }}</td>
					<td>{{ this.wednesdayData[8] }}</td>
					<td>{{ this.thursdayData[8] }}</td>
					<td>{{ this.fridayData[8] }}</td>
				</tr>
				<tr>
					<th scope="row">16:40 - 17:30</th>
					<td>{{ this.mondayData[9] }}</td>
					<td>{{ this.tuesdayData[9] }}</td>
					<td>{{ this.wednesdayData[9] }}</td>
					<td>{{ this.thursdayData[9] }}</td>
					<td>{{ this.fridayData[9] }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "MainTable",

	inject: [
		"mondayData",
		"tuesdayData",
		"wednesdayData",
		"thursdayData",
		"fridayData",
	],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
