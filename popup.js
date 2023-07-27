const iframe = document.getElementById("iframe");

document.getElementById("init").onclick = () => {
	iframe.contentWindow.postMessage("init", "*");
};
