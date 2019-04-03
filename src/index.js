console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", function() {
  const names = document.querySelector("#dog-breeds");
  const place = document.querySelector("#dog-image-container");
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const breedDropdown = document.querySelector("#breed-dropdown");
  const filterButton = document.querySelector("#filter-button");

  fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(dogImageData) {
      for (const dog of dogImageData.message) {
        const img = document.createElement("a");
        img.innerHTML = `<img src=${dog} alt=dogpic>`;
        place.append(img);
      }
    });

  filterButton.addEventListener("click", function(e) {
    e.preventDefault();

    fetch(breedUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(dogBreedData) {
        for (const doge of Object.keys(dogBreedData.message)) {
          if (doge.slice(0, 1) == breedDropdown.value) {
            if (dogBreedData.message[doge] != false) {
              for (const dog of dogBreedData.message[doge]) {
                const item = document.createElement("li");
                item.innerText = `${dog} ${doge}`;
                item.id;
                names.append(item);
                item.addEventListener("click", function() {
                  item.style.color = "#f45f42";
                });
              }
            } else {
              const li = document.createElement("li");
              li.innerText = `${doge}`;
              names.append(li);
            }
          }
        }
      });
  });
});
