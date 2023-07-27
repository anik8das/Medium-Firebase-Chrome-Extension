// TODOO: replace these with your actual firebase config values
const config = {
	projectId: "firebase_project_id",
	apiKey: "firebase_api_key",
	storageBucket: "firebase_storage_bucket",
};

window.addEventListener("message", (event) => {
	if (event.data === "init") {
		const app = firebase.initializeApp(config);
		console.log("Initialized Firebase!", app);
	}
});
