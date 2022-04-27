let idsPage = ["landingPage", "creatNftPage", "detailsNftPage"];
const ssABI = [];
const addressContract = "";
//variable
// var fs = require("fs");
// import fs from "fs";
// import fleekStorage from "/fleek-storage-js/*";
//evenListener ----------------------------------------------------
eventListener();
function eventListener() {
  document
    .getElementById("loadPageCreateNft")
    .addEventListener("click", showPages("creatNftPage"));

  document.getElementById("createNft").addEventListener("click", createNft);
  document.getElementById("files").addEventListener("change", readFile);

  // console.log("first" + id);
  document
    .getElementById("connectToWallet")
    .addEventListener("click", getAddress);
  document
    .getElementById("explore")
    .addEventListener("click", showArrayNftPage);

  // document.getElementById("file").addEventListener("change", uploadfleek);
}
// document.getElementById("inp").addEventListener("change", readFile);
//functions-----------------------------------
async function getAddress() {
  console.log("this workwith get address");
  const addres = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(addres);
  if (addres.length > 0) {
    document.getElementById("address_bar").value = addres[0];
  } else {
    alert("please open your metamask");
  }
}

// function showCreateNftPage(e) {
//   e.preventDefault();
//   fetch("createNft.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.querySelector("#nft").innerHTML = data;
//     });
// }
function showPages(idpage) {
  console.log(idpage);
  console.log(document.getElementById(idpage).className.includes("dis-hidden"));
  let tg = document.getElementById(idpage).className;
  if (tg.includes("dis-hidden")) {
    console.log(tg.replace("dis-hidden", " "));
    tg = tg.replace("dis-hidden", " ");
    document.getElementById(idpage).className = tg;
  }
  for (let i = 0; i < idsPage.lengt; i++) {
    if (i != idsPage.index(idpage)) {
      let tagelement = document.getElementById(idsPage[i]).classList;
      console.log(tagelement);
      document.getElementById(idsPage[i]).classList = tagelement + "dis-hidden";
    }
  }
}

function readFile() {
  var image = document.getElementById("picPreviw");
  console.log(image);
  image.src = URL.createObjectURL(event.target.files[0]);
}

function createNftPage(e) {
  e.preventDefault();
  fetch("createNft.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#nft").innerHTML = data;
    });
}
function showArrayNftPage(e) {
  e.preventDefault();
  fetch("showExplore.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#nft").innerHTML = data;
    });
}

function createNft() {
  let ipfsAddressNFT = document.getElementById("ipfsAddressNFT").value;
  console.log(ipfsAddressNFT);
}

// function uploadfleek() {
//   fs.readFile(this.files[0], async (error, fileData) => {
//     const uploadedFile = await fleekStorage.upload({
//       apiKey: "DtnarMrh0q8IsneKdf0Qdw==",
//       apiSecret: "iltVUEOuz4ZuZeBGSvpBIoejS7odlYtAixe1MJvoQTI=",
//       key: "my-file-key",
//       ContentType: "image/png",
//       data: fileData,
//       httpUploadProgressCallback: (event) => {
//         console.log(Math.round((event.loaded / event.total) * 100) + "% done");
//       },
//     });
//   });
// }

// function pinaz() {
//   // var url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
//   var url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", url);

//   xhr.setRequestHeader(
//     // "Authorization",
//     // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlYTljNWQyMC1kNTljLTRkM2QtYWFhNi0xZDU0MWZmNzU1YzIiLCJlbWFpbCI6Im5vcnVsbGFoMjY2Lm5rODZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZX0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjdmZGI3YmY1ODk0ZjUwODU2YWQwIiwic2NvcGVkS2V5U2VjcmV0IjoiODdlODdmYzg1MDg0MTg0NzAwYmJkOWI2ZDUyZWMwMGMyNTZmYzQ0NzJjMTYwODk5NTM5NTJhZmViNWRiOGY5OSIsImlhdCI6MTY1MDk1ODE4MH0.88_gBIOxvzFVc-CcH7yaJfk8HOqnEZzL1oXkCnWmXKY"
//     "pinata_api_key",
//     "a206b4d71b48e571b35e"
//   );
//   xhr.setRequestHeader(
//     "pinata_secret_api_key",
//     "a1a99b79252f3f8dc40c36b93f84e83cba7030bd4f1f00c8e82df1cd7f74bdd9"
//   );
//   xhr.setRequestHeader("Content-Type", "image/png");
//   let inp = document.getElementById("files");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//       console.log(inp.files[0]);
//     }
//   };

//   var data = inp.files[0];

//   xhr.send(data);
// }
// const stream = fs.createReadStream("./bike.mp4");

// const uploadedFile = await fleekStorage.streamUpload({
//   apiKey: "my-key",
//   apiSecret: "my-secret",
//   key: "my-file-key",
//   stream,
// });

// function readFile() {
//   console.log(this.files && this.files[0]);
//   if (this.files && this.files[0]) {
//     var FR = new FileReader();
//     FR.addEventListener("load", function (e) {
//       document.getElementById("imgs").src = e.target.result;
//       document.getElementById("b64").innerHTML = e.target.result;
//     });
//     console.log(FR.readAsDataURL(this.files[0]));
//     FR.readAsDataURL(this.files[0]);
//   }
// }

// async function upload() {
//   App.node = await Ipfs.create();
//   upad();
// }

// async function upad(event) {
//   const fileReader = new FileReader();
//   // Read file as ArrayBuffer
//   await fileReader.readAsArrayBuffer(event.target.files[0]);
//   //  Listen for the onload event
//   fileReader.onload = async (event) => {
//     // upload the file content
//     let result = await App.node.add(fileReader.result);
//     // Pick out the file path. Here cid stands for content identifier.
//     let cid = result.path;

//     // So we can decide what to do with the content identifier
//   };
// }
// function uploadPic(e) {
//   e.preventDefault();
//   var base64str = base64_encode(document.getElementById("file").value);
//   console.log(base64str);
// }

// function to encode file data to base64 encoded string
// function base64_encode(file) {
//   // read binary data
//   var bitmap = fs.readFileSync(file);
//   // convert binary data to base64 encoded string
//   return new Buffer(bitmap).toString("base64");
// }
