<template>
	<div class="container">
		<div class="row justify-content-md-center">
			<div class="col-8">
				<form @submit.prevent="submitData">
					<div class="form-control text-start">
						<label class="form-label" for="title">Title</label>
						<input
							class="form-control"
							id="title"
							name="title"
							type="text"
							ref="titleInput"
							v-model="title"
						/>
						<div id="emailHelp" class="form-text">
							If title is empty selected slot will be considered as wildcard
							slot.
						</div>
					</div>
					<div class="form-control text-start">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="day"
						>
							<option selected>Select Day</option>
							<option value="1">Monday</option>
							<option value="2">Tuesday</option>
							<option value="3">Wednesday</option>
							<option value="4">Thursday</option>
							<option value="5">Friday</option>
						</select>
					</div>
					<div class="form-control text-start">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="time"
						>
							<option selected>Select Time</option>
							<option value="1">8:40 - 9:30</option>
							<option value="2">9:40 - 10:30</option>
							<option value="3">10:40 - 11:30</option>
							<option value="4">11:40 - 12:30</option>
							<option value="5">12:40 - 13:30</option>
							<option value="6">13:40 - 14:30</option>
							<option value="7">14:40 - 15:30</option>
							<option value="8">15:40 - 16:30</option>
							<option value="9">16:40 - 17:30</option>
						</select>
					</div>
					<div class="form-control text-start">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="wildcard"
						>
							<option selected>Select Wildcard</option>
							<option value="1">Books</option>
							<option value="2">Events</option>
							<option value="3">Activities</option>
						</select>
					</div>
					<div>
						<button class="btn btn-primary" type="submit">Add Resource</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div>
		<button @click="uploadImage">Upload image to imgur</button> <br>
		<a>{{ url }}</a>
	</div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
	name: "MainForm",
	data() {
		return {
			title: "",
			day: "",
			time: "",
			wildcard: "",
			url: "",
		};
	},
	methods: {
		submitData() {
			this.addData(this.title, this.day, this.time, this.wildcard);
		},
		async getImage() {
			let base64data = "";
			await html2canvas(document.querySelector("#table")).then((canvas) => {
				base64data = canvas.toDataURL();
			});

			return base64data;
		},
		async uploadImage() {
			var base64data = await this.getImage();
			base64data = base64data.substring(22);
			console.log(base64data);
			var myHeaders = new Headers();
			myHeaders.append("Authorization", "Client-ID b03f4031ad9a0a9");

			var formdata = new FormData();
			formdata.append("image", base64data);
			formdata.append("type", "base64")

			var requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: formdata,
				redirect: "follow",
			};

			fetch("https://api.imgur.com/3/image", requestOptions)
				.then((response) => response.json())
				.then((result) => (this.url = result["data"]["link"]))
				.catch((error) => console.log("error", error));
		},
	},
	inject: ["addData"],
};
</script>
