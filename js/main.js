/* =========================
   AMBIL ELEMEN
========================= */

const tombolHamburger = document.getElementById("tombolHamburger");

const sidebar = document.getElementById("sidebar");

const lapisan = document.getElementById("lapisan");

const tombolTutup = document.getElementById("tombolTutup");

const tombolDropdownSidebar = document.getElementById("tombolDropdownSidebar");

const isiDropdownSidebar = document.getElementById("isiDropdownSidebar");

const panahSidebar = document.getElementById("panahSidebar");

/* =========================
   BUKA SIDEBAR
========================= */

function bukaSidebar() {
  sidebar.classList.add("aktif");

  lapisan.classList.add("aktif");

  document.body.style.overflow = "hidden";
}

/* =========================
   TUTUP SIDEBAR
========================= */

function tutupSidebar() {
  sidebar.classList.remove("aktif");

  lapisan.classList.remove("aktif");

  document.body.style.overflow = "";
}

/* =========================
   EVENT HAMBURGER
========================= */

tombolHamburger.addEventListener("click", bukaSidebar);

/* =========================
   EVENT TOMBOL TUTUP
========================= */

tombolTutup.addEventListener("click", tutupSidebar);

/* =========================
   EVENT LAPISAN
========================= */

lapisan.addEventListener("click", tutupSidebar);

/* =========================
   DROPDOWN SIDEBAR
========================= */

tombolDropdownSidebar.addEventListener("click", function () {
  isiDropdownSidebar.classList.toggle("aktif");

  if (isiDropdownSidebar.classList.contains("aktif")) {
    panahSidebar.textContent = "−";
  } else {
    panahSidebar.textContent = "+";
  }
});

/* =========================
   TUTUP DENGAN ESC
========================= */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    tutupSidebar();
  }
});

const itemFaq = document.querySelectorAll(".item-faq");

itemFaq.forEach((item) => {
  const tombol = item.querySelector(".pertanyaan-faq");
  tombol.addEventListener("click", () => {
    // Tutup item lain yang sedang terbuka (opsional, membuat tampilan lebih rapi)
    itemFaq.forEach((i) => {
      if (i !== item) {
        i.classList.remove("aktif");
      }
    });
    // Buka/tutup item yang diklik
    item.classList.toggle("aktif");
  });
});
