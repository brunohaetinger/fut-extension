// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const types = {};
chrome.devtools.inspectedWindow.getResources((resources) => {
  resources.forEach((resource) => {
    if (!(resource.type in types)) {
      types[resource.type] = 0;
    }
    types[resource.type] += 1;
  });
  let result = `Resources on this page: 
  ${Object.entries(types)
    .map((entry) => {
      const [type, count] = entry;
      return `${type}: ${count}`;
    })
    .join('\n')}`;
  let div = document.createElement('div');
  div.innerText = result;
  document.body.appendChild(div);
});

function isUsefullRequest(request) {
  // request.method is GET or POST
  // request.headers[].host.name.includes("utas.")
  // alert("Worked 2: " + hostHeader)
  const hostHeader = request.headers.find(header => header.name === "Host");
  let div = document.createElement('div');
  div.innerText = JSON.stringify(entries.request);
  document.body.appendChild(div);
  return (["GET", "POST"].includes(request.method) && hostHeader.value.includes("utas."))
}

function handleRequestFinished(entries) {
  
  // console.log("Server IP: ", JSON.stringify(request.headers));

  if(isUsefullRequest(entries.request)){
    let div = document.createElement('div');
    div.innerText = JSON.stringify(entries.request);
    document.body.appendChild(div);

  }
  
  // entries.getContent().then(([content, mimeType]) => {
  //   console.log("Content: ", content);
  //   console.log("MIME type: ", mimeType);
  //   let div = document.createElement('div');
  //   div.innerText = content;
  //   document.body.appendChild(div);
  // });
}

chrome.devtools.network.onRequestFinished.addListener(handleRequestFinished)