<template>
	<main-frame />
</template>

<script>
import MainFrame from "./components/MainFrame.vue";

export default {
	name: "App",
	components: {
		MainFrame,
	},
	data() {
		return {
			monData: {
				1: "",
				2: "",
				3: "",
				4: "",
				5: "",
				6: "",
				7: "",
				8: "",
				9: "",
			},
			tueData: {
				1: "",
				2: "",
				3: "",
				4: "",
				5: "",
				6: "",
				7: "",
				8: "",
				9: "",
			},
			wedData: {
				1: "",
				2: "",
				3: "",
				4: "",
				5: "",
				6: "",
				7: "",
				8: "",
				9: "",
			},
			thuData: {
				1: "",
				2: "",
				3: "",
				4: "",
				5: "",
				6: "",
				7: "",
				8: "",
				9: "",
			},
			friData: {
				1: "",
				2: "",
				3: "",
				4: "",
				5: "",
				6: "",
				7: "",
				8: "",
				9: "",
			},
		};
	},
	provide() {
		return {
			mondayData: this.monData,
			tuesdayData: this.tueData,
			wednesdayData: this.wedData,
			thursdayData: this.thuData,
			fridayData: this.friData,
			addData: this.addData,
		};
	},
	methods: {
		async getBookData() {
			const number = Math.floor(Math.random() * 10000);
			return fetch(`https://gutendex.com/books?ids= ${number}`)
				.then((response) => response.json())
				.then((data) => {
					const info = data["results"][0]["title"];
					console.log(info);
					return info;
				});
		},
		async getActivityData() {
			return fetch("https://www.boredapi.com/api/activity/")
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					return data["activity"];
				});
		},

		async getEventData() {
			const number = Math.floor(Math.random() * 100);
			return fetch(
				`https://api.seatgeek.com/2/performers/${number}?client_id=MjY1NjI3MDd8MTY0OTk2OTY4Ni42OTcyODcz&client_secret=e8743b3fc0bb183151b5272add926d5663733fd04764a0d7b81b9451187cec8a`
			)
				.then((response) => response.json())
				.then((data) => {
					return data["name"];
				});
		},
		async addData(title, day, time, wildcard) {
			if (title == "") {
				if (wildcard == "1") {
					title = await this.getBookData();
					title = "Read the book " + title;
				}
				if (wildcard == "3") {
					title = await this.getActivityData();
				}
				if (wildcard == "2") {
					title ="Go to " + await this.getEventData() + " performance";
				}
			}
			if (day == "1") {
				this.monData[time] = title;
				console.log(title);
			}
			if (day == "2") {
				this.tueData[time] = title;
			}
			if (day == "3") {
				this.wedData[time] = title;
			}
			if (day == "4") {
				this.thuData[time] = title;
			}
			if (day == "5") {
				this.friData[time] = title;
			}
		},
	},
};
</script>


<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
