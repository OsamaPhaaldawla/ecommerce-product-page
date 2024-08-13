// Cart elements
let cartIcon = document.querySelector(".cart-icon");
let cartContent = document.querySelector(".cart-content");
// Buttons
let suplyBtn = document.querySelector(".suply button:first-child");
let suplyDec = suplyBtn.children[0];
let suplyCount = suplyBtn.children[1];
let suplyInc = suplyBtn.children[2];
let addBtn = document.querySelector(".suply button:last-child");

// Suply
// Increment
suplyInc.addEventListener("click", () => {
  suplyCount.innerHTML++;
});
// Decrement
suplyDec.addEventListener("click", () => {
  if (suplyCount.innerHTML > 0) {
    suplyCount.innerHTML--;
  }
});

// Add Suply To Cart
addBtn.addEventListener("click", () => {
  if (suplyCount.innerHTML > 0) {
    document.querySelector(".empty-cart").style.display = "none";
    document.querySelector(".cart-img").classList.add("show");
    document.querySelector(".details").classList.add("show");
    document.querySelector(".cart-footer").classList.add("show");
    document.querySelector(".delete-icon").classList.add("show");
    document.querySelector(".cart-body").classList.remove("empty");

    // suply price Elements
    let pricePerOne = document.querySelector(".per-one");
    let pricePerAll = document.querySelector(".per-all");
    let amount = document.querySelector(".amount");
    pricePerOne.innerHTML = "$125.00";
    amount.innerHTML = suplyCount.innerHTML;
    pricePerAll.innerHTML = `$${+suplyCount.innerHTML * 125}.00`;
    let count = document.querySelector(".cart-icon-holder span");
    count.style.display = "block";
    count.innerHTML = suplyCount.innerHTML;
  }
});

// Remove Item From Cart
document.querySelector(".delete-icon").addEventListener("click", () => {
  document.querySelector(".empty-cart").style.display = "block";
  document.querySelector(".cart-img").classList.remove("show");
  document.querySelector(".details").classList.remove("show");
  document.querySelector(".cart-footer").classList.remove("show");
  document.querySelector(".delete-icon").classList.remove("show");
  document.querySelector(".cart-body").classList.add("empty");
  document.querySelector(".cart-icon-holder span").style.display = "none";
  suplyCount.innerHTML = "0";
});

// Show Cart
cartIcon.addEventListener("click", () => {
  cartContent.classList.toggle("show");
});

// Gallery
let gallery = document.querySelector(".gallery-container");
let imgs = document.querySelectorAll(".grid-box .images .img-navigation img");
let imgs_gallery = document.querySelectorAll(".gallery .img-navigation img");
let active_img = document.querySelector(".active-img");
let gallery_active_img = document.querySelector(".gallery .active-img");
let img_sources = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

// display Gallery
imgs_gallery.forEach((element) => {
  element.addEventListener("click", () => {
    gallery_active_img.src = img_sources[element.getAttribute("data-index")];
    removeActiveClass();
    element.classList.add("active");
  });
});

imgs.forEach((element) => {
  element.addEventListener("click", () => {
    gallery.style.display = "flex";
    gallery_active_img.src = img_sources[element.getAttribute("data-index")];
    removeActiveClass();
    imgs_gallery[element.getAttribute("data-index")].classList.add("active");
  });
});

// Remove Active class from all elements
function removeActiveClass() {
  imgs_gallery.forEach((element) => {
    element.classList.remove("active");
  });
}

// Close Gallery
let closeIcon = document.querySelector(".close-gallery");
closeIcon.addEventListener("click", () => {
  gallery.style.display = "none";
});

// show the previous image
let previousBtns = document.querySelectorAll(".previous");
previousBtns.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    if (index == 0) {
      decrement(active_img);
    } else {
      decrement(gallery_active_img);
    }
  });
});

// show the previous image
let nextBtns = document.querySelectorAll(".next");
nextBtns.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    if (index == 0) {
      increment(active_img);
    } else {
      increment(gallery_active_img);
    }
  });
});

function decrement(active) {
  let active_src_index = "";
  for (let i = 0; i < img_sources.length; i++) {
    if (active.src.slice(active_img.src.indexOf("images")) == img_sources[i]) {
      active_src_index = i;
    }
  }
  if (active_src_index != 0) {
    active_src_index -= 1;
    active.src = img_sources[active_src_index];
    removeActiveClass();
    imgs_gallery[active_src_index].classList.add("active");
  }
}

function increment(active) {
  let active_src_index = "";
  for (let i = 0; i < img_sources.length; i++) {
    if (active.src.slice(active_img.src.indexOf("images")) == img_sources[i]) {
      active_src_index = i;
    }
  }
  if (active_src_index != 3) {
    active_src_index += 1;
    active.src = img_sources[active_src_index];
    removeActiveClass();
    imgs_gallery[active_src_index].classList.add("active");
  }
}
