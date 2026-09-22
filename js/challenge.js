document.addEventListener("DOMContentLoaded", () => {
  const tombolHamburger = document.getElementById("tombolHamburger");
  const tombolTutup = document.getElementById("tombolTutup");
  const sidebar = document.getElementById("sidebar");
  const lapisan = document.getElementById("lapisan");

  const tombolDropdownSidebar = document.getElementById(
    "tombolDropdownSidebar"
  );
  const isiDropdownSidebar = document.getElementById("isiDropdownSidebar");
  const panahSidebar = document.getElementById("panahSidebar");

  const gridChallenge = document.getElementById("gridChallenge");
  const tombolFilter = document.querySelectorAll(".filter-challenge button");

  const lapisanDetail = document.getElementById("lapisanDetail");
  const popupDetail = document.getElementById("popupDetail");
  const tombolTutupDetail = document.getElementById("tombolTutupDetail");
  const tombolMulai = document.getElementById("tombolMulai");

  const popupIkon = document.getElementById("popupIkon");
  const popupKategori = document.getElementById("popupKategori");
  const popupDurasi = document.getElementById("popupDurasi");
  const popupJudul = document.getElementById("popupJudul");
  const popupDeskripsi = document.getElementById("popupDeskripsi");
  const popupLevel = document.getElementById("popupLevel");
  const popupXp = document.getElementById("popupXp");
  const popupStatus = document.getElementById("popupStatus");
  const sidebarLevel = document.getElementById("sidebarLevel");
  const sidebarDurasi = document.getElementById("sidebarDurasi");
  const sidebarXp = document.getElementById("sidebarXp");
  const popupTugas = document.getElementById("popupTugas");
  const popupAktivitas = document.getElementById("popupAktivitas");

  const dataChallenge = {
    "landing-page": {
      ikon: "</>",
      kategori: "PENGEMBANGAN WEB",
      durasi: "15 MENIT",
      durasiDetail: "15 menit",
      judul: "Membuat Landing Page",
      deskripsi:
        "Susun struktur landing page yang jelas dan jelaskan alasan di balik setiap bagian yang kamu pilih.",
      level: "Menengah",
      xp: "250 XP",
      status: "Tersedia",
      tugas:
        "Bayangkan kamu sedang membuat landing page untuk sebuah produk pembelajaran baru. Jelaskan bagaimana kamu menyusun halaman dari bagian pembuka hingga ajakan bertindak terakhir.",
      aktivitas: [
        "Tentukan tujuan utama halaman.",
        "Pilih bagian halaman yang paling penting.",
        "Jelaskan alasan dari setiap keputusan.",
        "Pertahankan pendekatanmu ketika mendapat pertanyaan lanjutan.",
      ],
    },

    "explain-ai": {
      ikon: "✦",
      kategori: "KECERDASAN BUATAN",
      durasi: "20 MENIT",
      durasiDetail: "20 menit",
      judul: "Jelaskan AI dengan Sederhana",
      deskripsi:
        "Jelaskan cara kerja sistem AI kepada pemula tanpa bergantung pada istilah teknis yang sulit.",
      level: "Mudah",
      xp: "200 XP",
      status: "Tersedia",
      tugas:
        "Bayangkan kamu sedang berbicara dengan seseorang yang belum pernah mempelajari AI. Jelaskan apa yang dilakukan model AI, bagaimana model belajar dari data, dan bagaimana AI digunakan dalam kehidupan sehari-hari.",
      aktivitas: [
        "Definisikan AI menggunakan bahasa sederhana.",
        "Berikan satu contoh yang dekat dengan kehidupan sehari-hari.",
        "Jelaskan peran data dalam AI.",
        "Jawab satu pertanyaan lanjutan dari AI.",
      ],
    },

    "ux-audit": {
      ikon: "◌",
      kategori: "DESAIN UX / UI",
      durasi: "25 MENIT",
      durasiDetail: "25 menit",
      judul: "Perbaiki Antarmuka yang Membingungkan",
      deskripsi:
        "Temukan masalah pengalaman pengguna dan jelaskan perubahan yang akan kamu lakukan untuk memperbaikinya.",
      level: "Sulit",
      xp: "350 XP",
      status: "Tersedia",
      tugas:
        "Kamu menemukan sebuah layar produk dengan navigasi yang membingungkan, tindakan yang tidak jelas, dan hierarki visual yang tidak konsisten. Jelaskan apa yang akan kamu ubah dan alasan di baliknya.",
      aktivitas: [
        "Temukan masalah pengalaman pengguna yang paling besar.",
        "Tentukan prioritas perubahan.",
        "Jelaskan rancangan antarmuka yang kamu usulkan.",
        "Pertahankan keputusanmu dari sudut pandang pengguna.",
      ],
    },

    "product-pitch": {
      ikon: "↗",
      kategori: "BISNIS",
      durasi: "15 MENIT",
      durasiDetail: "15 menit",
      judul: "Presentasikan Ide Produk",
      deskripsi:
        "Sampaikan ide produk, tentukan pengguna sasaran, dan jelaskan masalah yang ingin diselesaikan.",
      level: "Menengah",
      xp: "250 XP",
      status: "Tersedia",
      tugas:
        "Bayangkan kamu hanya memiliki dua menit untuk meyakinkan sebuah tim bahwa ide produkmu layak dibuat. Jelaskan masalah, pengguna sasaran, solusi, dan alasan mengapa produk tersebut penting.",
      aktivitas: [
        "Jelaskan masalah yang ingin diselesaikan.",
        "Tentukan pengguna sasaran.",
        "Presentasikan solusi yang ditawarkan.",
        "Jelaskan nilai yang diberikan produk.",
      ],
    },

    "debug-javascript": {
      ikon: "JS",
      kategori: "PENGEMBANGAN WEB",
      durasi: "20 MENIT",
      durasiDetail: "20 menit",
      judul: "Berpikir Seperti Debugger",
      deskripsi:
        "Analisis sebuah interaksi yang rusak dan jelaskan proses berpikirmu untuk menemukan penyebab utamanya.",
      level: "Sulit",
      xp: "400 XP",
      status: "Tersedia",
      tugas:
        "Sebuah tombol pada website terlihat benar tetapi tidak merespons ketika diklik. Jelaskan bagaimana kamu akan menyelidiki masalah tersebut, bukti apa yang akan dicari, dan bagaimana kamu memastikan perbaikannya berhasil.",
      aktivitas: [
        "Jelaskan proses debugging yang akan kamu lakukan.",
        "Identifikasi kemungkinan penyebab.",
        "Jelaskan bukti yang perlu diperiksa.",
        "Jelaskan cara memverifikasi solusi.",
      ],
    },

    "ai-ethics": {
      ikon: "◎",
      kategori: "KECERDASAN BUATAN",
      durasi: "15 MENIT",
      durasiDetail: "15 menit",
      judul: "Haruskah AI Mengambil Keputusan?",
      deskripsi:
        "Bahas skenario AI di dunia nyata dan sampaikan alasanmu dengan pemikiran yang jelas dan terstruktur.",
      level: "Menengah",
      xp: "250 XP",
      status: "Selesai",
      tugas:
        "Bayangkan sebuah organisasi menggunakan AI untuk membantu mengambil keputusan penting. Jelaskan bagian yang dapat dibantu AI, bagian yang tetap membutuhkan pertimbangan manusia, dan cara mengurangi risiko yang mungkin muncul.",
      aktivitas: [
        "Identifikasi pertanyaan utama dalam skenario.",
        "Jelaskan manfaat penggunaan AI.",
        "Identifikasi risiko yang mungkin muncul.",
        "Sampaikan pendekatan yang menurutmu paling masuk akal.",
      ],
    },
  };

  /* =====================================================
     SIDEBAR MOBILE
  ====================================================== */

  function bukaSidebar() {
    sidebar?.classList.add("aktif");
    lapisan?.classList.add("aktif");
    document.body.classList.add("popup-terbuka");
  }

  function tutupSidebar() {
    sidebar?.classList.remove("aktif");
    lapisan?.classList.remove("aktif");
    document.body.classList.remove("popup-terbuka");
  }

  tombolHamburger?.addEventListener("click", bukaSidebar);
  tombolTutup?.addEventListener("click", tutupSidebar);
  lapisan?.addEventListener("click", tutupSidebar);

  tombolDropdownSidebar?.addEventListener("click", () => {
    isiDropdownSidebar?.classList.toggle("aktif");

    const terbuka = isiDropdownSidebar?.classList.contains("aktif");
    if (panahSidebar) {
      panahSidebar.textContent = terbuka ? "−" : "+";
    }
  });

  /* =====================================================
     FILTER
  ====================================================== */

  tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", () => {
      tombolFilter.forEach((item) => item.classList.remove("filter-aktif"));
      tombol.classList.add("filter-aktif");

      const kategoriDipilih = tombol.dataset.filter;
      const kartuChallenge = document.querySelectorAll(".kartu-challenge");

      kartuChallenge.forEach((kartu) => {
        const kategori = kartu.dataset.kategori;
        const tampil =
          kategoriDipilih === "Semua" || kategori === kategoriDipilih;

        kartu.classList.toggle("tersembunyi", !tampil);
      });
    });
  });

  /* =====================================================
     DETAIL CHALLENGE
     Popup sengaja hidden di HTML.
     JS hanya membuka / menutup dan mengisi data.
  ====================================================== */

  function isiPopup(id) {
    const challenge = dataChallenge[id];

    if (!challenge) return;

    popupIkon.textContent = challenge.ikon;
    popupKategori.textContent = challenge.kategori;
    popupDurasi.textContent = challenge.durasi;
    popupJudul.textContent = challenge.judul;
    popupDeskripsi.textContent = challenge.deskripsi;
    popupLevel.textContent = challenge.level;
    popupXp.textContent = challenge.xp;
    popupStatus.textContent = challenge.status;

    sidebarLevel.textContent = challenge.level;
    sidebarDurasi.textContent = challenge.durasiDetail;
    sidebarXp.textContent = challenge.xp;
    popupTugas.textContent = challenge.tugas;

    popupAktivitas.replaceChildren();

    challenge.aktivitas.forEach((aktivitas) => {
      const item = document.createElement("li");
      item.textContent = aktivitas;
      popupAktivitas.appendChild(item);
    });

    tombolMulai.innerHTML = "";

    const teksTombol = document.createElement("span");
    teksTombol.textContent =
      challenge.status === "Selesai" ? "Lihat Hasil" : "Mulai Tantangan";

    const panah = document.createElement("span");
    panah.textContent = "→";

    tombolMulai.append(teksTombol, panah);
    tombolMulai.dataset.challenge = id;
  }

  function bukaDetail(kartu) {
    const id = kartu.dataset.challenge;

    if (!id || !dataChallenge[id]) return;

    isiPopup(id);

    // Pastikan hidden dilepas sebelum animasi dijalankan.
    lapisanDetail.hidden = false;
    popupDetail.hidden = false;

    lapisanDetail.setAttribute("aria-hidden", "false");
    popupDetail.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      lapisanDetail.classList.add("aktif");
      popupDetail.classList.add("aktif");
    });

    document.body.classList.add("popup-terbuka");

    const scrollPopup = popupDetail.querySelector(".popup-detail-scroll");
    if (scrollPopup) {
      scrollPopup.scrollTop = 0;
    }
  }

  function tutupDetail() {
    if (popupDetail.hidden) return;

    lapisanDetail.classList.remove("aktif");
    popupDetail.classList.remove("aktif");

    lapisanDetail.setAttribute("aria-hidden", "true");
    popupDetail.setAttribute("aria-hidden", "true");

    window.setTimeout(() => {
      lapisanDetail.hidden = true;
      popupDetail.hidden = true;
    }, 250);

    document.body.classList.remove("popup-terbuka");
  }

  // Event delegation:
  // klik di area mana pun pada kartu akan membuka detail.
  gridChallenge?.addEventListener("click", (event) => {
    const kartu = event.target.closest(".kartu-challenge");

    if (!kartu || !gridChallenge.contains(kartu)) return;

    bukaDetail(kartu);
  });

  // Dukungan keyboard untuk kartu.
  gridChallenge?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const kartu = event.target.closest(".kartu-challenge");

    if (!kartu) return;

    event.preventDefault();
    bukaDetail(kartu);
  });

  tombolTutupDetail?.addEventListener("click", tutupDetail);
  lapisanDetail?.addEventListener("click", tutupDetail);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popupDetail.hidden) {
      tutupDetail();
    }
  });

  /* =====================================================
     TOMBOL MULAI
     Hanya navigasi demo karena lomba berfokus pada tampilan.
  ====================================================== */

  tombolMulai?.addEventListener("click", (event) => {
    event.stopPropagation();

    if (tombolMulai.dataset.challenge) {
      window.location.href = "socratic-session.html";
    }
  });

  /* =====================================================
     FORM BERLANGGANAN
     Tidak ada backend; cegah reload halaman.
  ====================================================== */

  const formulir = document.querySelector(".formulir-berlangganan");

  formulir?.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
