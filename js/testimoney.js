class Testimonial {
  constructor(images, comment, name) {
    this.images = images;
    this.comment = comment;
    this.name = name;
  }

  get tagHtml() {
    return `
          <div class="card">
            <div class="images">
              <img src="${this.images}" alt="" />
              <p class="testy">${this.comment}</p>
              <div class="penulis">
                <p>~ ${this.name}</p>
              </div>
            </div>
          </div>`;
  }
}

class TestimonialCompany extends Testimonial {
  get tagHtml() {
    return `
              <div class="card">
                <div class="images">
                  <img src="${this.images}" alt="" />
                  <p class="testy">${this.comment}</p>
                  <div class="penulis">
                    <p>~ ${this.name} - Company</p>
                  </div>
                </div>
              </div>`;
  }
}

const testimonials = [
  new Testimonial(
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Programnya bagus sekali hehehe",
    "Riska Pramudita"
  ),
  new Testimonial(
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mantap sekali mas",
    "Nyoman Purbawa"
  ),
  new TestimonialCompany(
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mantap sekali mas",
    "Nyoman Purbawa"
  ),
];

let htmlInner = "";

for (let i = 0; i < testimonials.length; i++) {
  htmlInner += testimonials[i].tagHtml;
}

const containerCard = document.querySelector(".container-card");
containerCard.innerHTML = htmlInner;
