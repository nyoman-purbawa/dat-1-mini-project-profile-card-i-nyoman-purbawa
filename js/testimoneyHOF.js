const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fGVufDB8fHx8fGVufDB8fHx8fA%3D",
    comment: "kurang sih pak saya kasii bintang 1",
    name: "Riska Pramudita",
    rating: 1,
  },
  {
    img: "assets/img/images.jpg",
    comment: "Programnya bagus pak sangat recomended",
    name: "I Nyoman Purbawa",
    rating: 5,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "Maaf Cuma Bintang 3",
    name: "Rama Maulana",
    rating: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "Sayang Sekali Anda tidak pilih tirai 4",
    name: "Gopals",
    rating: 4,
  },

  {
    img: "https://images.unsplash.com/photo-1545776312-71c1641b3849?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "lumayan tapi saya kasih bintang 2 awokoawka",
    name: "Ketty",
    rating: 2,
  },
];

function ContainerTestimonial(testimonialShow) {
  let tagHtml = ``;
  testimonialShow.map(function (value) {
    return (tagHtml += `
        <div class="card">
          <div class="images">
            <img src="${value.img}" alt="" />
            <p class="testy">${value.comment}</p>
            <div class="penulis">
              <p>~ ${value.name}</p>
            </div>
            <div class="rating">
              <p>${value.rating} <i class="fa-solid fa-star"></i></p>
            </div>
          </div>
        </div>`);
  });
  document.querySelector(".container-card").innerHTML = tagHtml;
}

function buttonRating() {
  let buttons = document.querySelectorAll(".rating-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const ratingFilter = parseInt(button.dataset.rating);
      let testimonialShow;
      if (ratingFilter === 0) {
        testimonialShow = testimonials;
      } else {
        testimonialShow = testimonials.filter(
          (testimonial) => testimonial.rating === ratingFilter
        );
      }

      ContainerTestimonial(testimonialShow);
    });
  });
}

ContainerTestimonial(testimonials);

buttonRating();
