const starter = document.getElementById("JS-starter");
const professional = document.getElementById("JS-professional");
const company = document.getElementById("JS-company");

const toggle = document.getElementById("price")
const priceTogler = document.querySelector(".price-togler")
const month = document.querySelector(".month")
const year = document.querySelector(".year")

const countMax = (el, min, max, ms = 30) => {
  let counter = setInterval(() => {
    min = min + 1
    el.innerHTML = `$${min}`
    if (min >= max) {
      clearInterval(counter)
    }
  }, ms)
}

const countMin = (el, min, max, ms = 30) => {
  let counter = setInterval(() => {
    max = max - 1
    el.innerHTML = `$${max}`
    if (max <= min) {
      clearInterval(counter)
    }
  }, ms)
}


toggle.addEventListener("click", () => {
  if (toggle.checked) {
    countMin(starter, 12, 19, 150)
    countMin(professional, 36, 54, 70)
    countMin(company, 56, 89)
    priceTogler.classList.add("active");
    month.style.color = "#3B3472"
    year.style.color = "#fff"
  } else {
    countMax(starter, 12, 19, 150)
    countMax(professional, 36, 54, 70)
    countMax(company, 56, 89)
    priceTogler.classList.remove("active")
    year.style.color = "#3B3472"
    month.style.color = "#fff"
  }
});