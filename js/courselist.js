document.addEventListener("DOMContentLoaded", () => {
  const tombolSidebar = document.getElementById("toggleSidebarBtn");
  const sidebarKursus = document.getElementById("sidebarNav");

  tombolSidebar?.addEventListener("click", () => {
    sidebarKursus?.classList.toggle("hidden");
  });
});

function bukaCourse() {
  window.location.href = "./course.html";
}
