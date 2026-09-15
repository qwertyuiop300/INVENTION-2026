document.addEventListener("DOMContentLoaded", () => {
  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  const sidebarNav = document.getElementById("sidebarNav");

  // Toggle Sembunyikan / Tampilkan Sidebar Navigasi Kiri
  if (toggleSidebarBtn && sidebarNav) {
    toggleSidebarBtn.addEventListener("click", () => {
      sidebarNav.classList.toggle("hidden");
    });
  }
});

// Callback saat kartu diklik
function bukaCourse() {
  console.log("Navigasi ke detail kursus...");
}
