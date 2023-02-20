document.getElementById("getPosts").addEventListener("click", getPosts);

function getPosts() {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      console.log("data", data);

      data.forEach((post) => {
        output += `
            <div class ="card-item">
            <h3>${post.name}</h3>
            <img src="${post.img}" class="img-item"/>
            <h3>${post.level}</h3>
            </div>
            `;
      });

      document.getElementById("output").innerHTML = output;
    })

    .catch((err) => console.log(err));
}
