const tombolHamburger = document.getElementById("tombolHamburger");
const sidebar = document.getElementById("sidebar");
const lapisan = document.getElementById("lapisan");
const tombolTutup = document.getElementById("tombolTutup");
const tombolDropdownSidebar = document.getElementById("tombolDropdownSidebar");
const isiDropdownSidebar = document.getElementById("isiDropdownSidebar");
const panahSidebar = document.getElementById("panahSidebar");

function tutupSidebar() {
  sidebar?.classList.remove("aktif");
  lapisan?.classList.remove("aktif");
  document.body.style.overflow = "";
}

function bukaSidebar() {
  sidebar?.classList.add("aktif");
  lapisan?.classList.add("aktif");
  document.body.style.overflow = "hidden";
}

tombolHamburger?.addEventListener("click", bukaSidebar);
tombolTutup?.addEventListener("click", tutupSidebar);
lapisan?.addEventListener("click", tutupSidebar);

tombolDropdownSidebar?.addEventListener("click", () => {
  isiDropdownSidebar?.classList.toggle("aktif");
  panahSidebar.textContent = isiDropdownSidebar?.classList.contains("aktif")
    ? "−"
    : "+";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") tutupSidebar();
});

document.querySelectorAll(".item-faq").forEach((item) => {
  item.querySelector(".pertanyaan-faq")?.addEventListener("click", () => {
    document.querySelectorAll(".item-faq.aktif").forEach((itemAktif) => {
      if (itemAktif !== item) itemAktif.classList.remove("aktif");
    });
    item.classList.toggle("aktif");
  });
});

function bukaCourse() {
  window.location.href = "./course.html";
}
