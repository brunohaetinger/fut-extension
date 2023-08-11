document.body.style.border = "5px solid blue";

function handleRequestFinished(request) {
  console.log("Server IP: ", request.serverIPAddress);
  request.getContent().then(([content, mimeType]) => {
    console.log("Content: ", content);
    console.log("MIME type: ", mimeType);
  });
}

setTimeout(()=>{
  console.log("Doing now...");
  // browser.devtools.network.onRequestFinished.addListener(handleRequestFinished)
  devtools.network.onRequestFinished.addListener(handleRequestFinished)
}, 1000)