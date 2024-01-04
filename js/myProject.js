const cardForm = document.getElementById("card-form");

let projectShow = [];

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const projectNameInput = document.getElementById("project-name").value;
  const startDateInput = document.getElementById("start-date").value;
  const endDateInput = document.getElementById("end-date").value;
  const descriptionsInput = document.getElementById("descriptions").value;
  const technologiInput = document.getElementsByClassName("tech");
  let images = document.getElementById("upload-image").files;

  let arrayTechInput = Array.from(technologiInput);

  // Condition Jika Form Kosong
  if (projectNameInput === "" || startDateInput === "" || endDateInput === "" || descriptionsInput === "" || technologiInput === "" || images.length === 0) {
    alert("Form Tidak Boleh Kosong");
    return;
  }

  // Url Images
  images = URL.createObjectURL(images[0]);

  // Untuk Push Icon Technologi
  let tech = [];
  for (let i = 0; i < arrayTechInput.length; i++) {
    if (arrayTechInput[i].checked) {
      if (i === 0) {
        tech.push(`<i class="fa-brands fa-node"></i>`);
      } else if (i === 1) {
        tech.push(`<i class="fa-brands fa-react"></i>`);
      } else if (i === 2) {
        tech.push(`<i class="fa-brands fa-golang"></i>`);
      } else if (i === 3) {
        tech.push(`<i class="fa-brands fa-js"></i>`);
      }
      // Tambahkan kondisi lain sesuai kebutuhan
    }
  }

  // Date
  let inputStartDate = new Date(startDateInput);
  let inputEndDate = new Date(endDateInput);

  const oneDay = 24 * 60 * 60 * 1000;
  const day = Math.round(Math.abs((inputStartDate - inputEndDate) / oneDay));
  const month = Math.round(day / 30);
  const years = Math.round(month / 12);

  let days = [];

  if (day < 30) {
    days.push(`durasi: ${day} Hari`);
  } else if (month < 12) {
    days.push(`durasi: ${month} Bulan`);
  } else {
    days.push(`durasi: ${years} Tahun`);
  }

  console.log(days);

  let inputData = {
    projectNameInput,
    days,
    descriptionsInput,
    tech,
    images,
  };

  // Untuk Mengambil Array Terbaru
  projectShow.unshift(inputData);

  showMyProject();
});

console.log(projectShow);

function showMyProject() {
  let htmlInner = ``;

  for (let i = 0; i < projectShow.length; i++) {
    let techIcons = projectShow[i].tech.join("&nbsp;&nbsp;&nbsp;");
    htmlInner += `
   
    
      <section class="card-project">
        <div class="img-card">
          <img src="${projectShow[i].images}" alt="" />
        </div>

        <div class="descriptions-card">
          <h1 style="font-size: 20px; margin: 10px 0 0 0">${projectShow[i].projectNameInput}</h1>
          <p style="font-size: 12px; margin: 0 0 10px 0">${projectShow[i].days}</p>

          <p class="" style="font-size: 15px; margin: 0 0 10px 0">${projectShow[i].descriptionsInput}</p>
          <div class="icon-tech">
            <p class="teknologi-card" style="margin: 10px 0">${techIcons}</p>
          </div>

          <div class="button-card" style="margin: 10px 0">
            <button>Edit</button>
            <button>Delet</button>
          </div>
        </div>
      
   
  </section>
 
    
      `;
  }

  document.querySelector(".container-title").innerHTML = `<h1 style="text-align: center;">MY PROJECT</h1>`;

  document.querySelector(".list-project-container").innerHTML = htmlInner;

  detailProject();
}

function detailProject() {
  const cardContainer = document.querySelector(".list-project-container");
  cardContainer.addEventListener("click", () => {
    window.location.href = "detailProject.html";
  });
}
