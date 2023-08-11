
// document.body.style.border = "5px solid green";

//   console.log("DEVTOOOLS !!!")
// alert("Worked!")
// function handleRequestFinished(request) {
//   alert("Worked 2: ")
//   console.log("Server IP: ", request.serverIPAddress);
//   request.getContent().then(([content, mimeType]) => {
//     console.log("Content: ", content);
//     console.log("MIME type: ", mimeType);
//   });
// }

// chrome.devtools.network.onRequestFinished.addListener(handleRequestFinished)

chrome.devtools.panels.create('demo panel', 'icon.png', 'panel.html', () => {
  console.log('user switched to this panel');
});