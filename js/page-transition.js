(function () {
  "use strict";

  var overlay = document.getElementById("pageTransisi");
  if (!overlay) return;

  var bar = document.getElementById("pageTransisiBar");
  var NAV_DELAY = 520;
  var SAFETY_TIMEOUT = 4000;
  var sudahDialihkan = false;

  function tampilkanOverlay() {
    bar && bar.classList.remove("selesai");
    overlay.classList.remove("selesai");
  }

  function sembunyikanOverlay() {
    if (bar) bar.classList.add("selesai");

    window.setTimeout(function () {
      overlay.classList.add("selesai");
    }, 220);
  }

  function bolehDialihkan(link) {
    if (!link) return false;
    if (link.target && link.target !== "_self") return false;
    if (link.hasAttribute("download")) return false;

    var href = link.getAttribute("href");
    if (!href) return false;
    if (href.charAt(0) === "#") return false;
    if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(href)) return false;
    if (/^(mailto|tel|javascript):/i.test(href)) return false;

    return true;
  }

  window.addEventListener("load", sembunyikanOverlay);
  window.setTimeout(sembunyikanOverlay, SAFETY_TIMEOUT);

  document.addEventListener("click", function (event) {
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    var link = event.target.closest ? event.target.closest("a[href]") : null;
    if (!bolehDialihkan(link)) return;

    var tujuan = link.href;

    event.preventDefault();

    if (sudahDialihkan) return;
    sudahDialihkan = true;

    tampilkanOverlay();

    window.setTimeout(function () {
      window.location.href = tujuan;
    }, NAV_DELAY);
  });

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      sudahDialihkan = false;
      tampilkanOverlay();
      window.setTimeout(sembunyikanOverlay, 30);
    }
  });
})();
