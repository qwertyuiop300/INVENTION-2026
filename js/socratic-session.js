document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     DATA DEMO
     ========================================================= */

  const pertanyaan = {
    easy: [
      {
        question:
          "Menurut pemahamanmu sendiri, apa yang membuat sebuah website disebut responsif?",
        context:
          "Pikirkan bagaimana satu halaman yang sama bisa menyesuaikan diri dengan berbagai ukuran layar.",
      },
      {
        question:
          "Mengapa kamu perlu menggunakan HTML semantik dibanding hanya elemen div?",
        context:
          "Jelaskan idenya seolah-olah kamu sedang mengajarkannya kepada pemula.",
      },
      {
        question: "Apa tujuan dari CSS media queries?",
        context: "Berikan satu contoh sederhana kapan kamu akan menggunakannya.",
      },
      {
        question:
          "Apa arti pendekatan mobile-first dalam desain web?",
        context: "Fokus pada proses desainnya, bukan pada framework tertentu.",
      },
      {
        question:
          "Apa satu hal yang kamu periksa sebelum menyatakan sebuah halaman web sudah responsif?",
        context: "Pilih pemeriksaan praktis yang bisa kamu lakukan sendiri.",
      },
    ],
    medium: [
      {
        question:
          "Sebuah tampilan terlihat bagus di desktop tapi berantakan di mobile. Bagaimana cara kamu mendiagnosisnya?",
        context:
          "Jelaskan alur pemikiranmu, bukan hanya menyebutkan daftar properti CSS.",
      },
      {
        question:
          "Kapan kamu akan memilih CSS Grid dibanding Flexbox untuk sebuah tata letak?",
        context:
          "Bandingkan keduanya berdasarkan masalah yang ingin kamu selesaikan.",
      },
      {
        question:
          "Bagaimana pilihan gambar dapat memengaruhi performa sebuah website?",
        context: "Hubungkan kualitas visual dengan pengalaman waktu muat.",
      },
      {
        question:
          "Seorang klien ingin setiap bagian terlihat berbeda secara visual. Bagaimana kamu menjaga konsistensi desainnya?",
        context:
          "Pikirkan tentang keputusan desain yang dapat digunakan ulang dan hierarki visual.",
      },
      {
        question:
          "Bagaimana kamu akan memperbaiki halaman yang terasa penuh sesak di laptop berlayar 13 inci?",
        context: "Jelaskan sinyal desain apa yang akan kamu periksa terlebih dahulu.",
      },
    ],
    hard: [
      {
        question:
          "Sebuah landing page yang indah mendapat skor aksesibilitas yang buruk. Apa yang akan kamu selidiki terlebih dahulu, dan mengapa?",
        context:
          "Pertahankan prioritasmu seolah-olah kamu sedang meninjau proyek tersebut bersama tim.",
      },
      {
        question:
          "Kamu perlu meningkatkan kecepatan halaman tanpa mengubah desain visualnya. Trade-off apa yang akan kamu pertimbangkan?",
        context:
          "Jelaskan bagaimana kamu akan menyeimbangkan performa dan kesetiaan visual.",
      },
      {
        question:
          "Dua tata letak responsif sama-sama valid secara teknis. Bagaimana kamu memutuskan mana yang menciptakan pengalaman pengguna lebih baik?",
        context: "Gunakan prinsip desain, bukan sekadar preferensi pribadi.",
      },
      {
        question:
          "Sebuah design system memiliki terlalu banyak komponen sehingga memperlambat tim. Bagaimana kamu akan menyederhanakannya?",
        context:
          "Jelaskan bagaimana kamu akan menentukan komponen mana yang perlu tetap dapat digunakan ulang.",
      },
      {
        question:
          "Bagaimana kamu menjelaskan perbedaan antara antarmuka yang konsisten secara visual dan antarmuka yang dapat diprediksi?",
        context: "Gunakan contoh dari produk atau website nyata.",
      },
    ],
  };

  const hasilLevel = {
    easy: "Penjelajah",
    medium: "Pemecah Masalah",
    hard: "Pemikir Kritis",
  };

  const skorLevel = {
    easy: 88,
    medium: 86,
    hard: 82,
  };

  /* =========================================================
     ELEMENTS
     ========================================================= */

  const tombolHamburger = document.getElementById("tombolHamburger");
  const tombolTutup = document.getElementById("tombolTutup");
  const sidebar = document.getElementById("sidebar");
  const lapisan = document.getElementById("lapisan");

  const tombolDropdownSidebar = document.getElementById(
    "tombolDropdownSidebar",
  );
  const isiDropdownSidebar = document.getElementById("isiDropdownSidebar");
  const panahSidebar = document.getElementById("panahSidebar");

  const pengaturanSesi = document.getElementById("pengaturanSesi");
  const ruangSesi = document.getElementById("ruangSesi");
  const tombolMulai = document.getElementById("tombolMulai");

  const pilihanLevel = document.querySelectorAll(".pilihan-level-item");
  const durasiItem = document.querySelectorAll(".durasi-item");

  const timerElement = document.getElementById("timer");
  const badgeLevel = document.getElementById("badgeLevel");
  const teksPertanyaan = document.getElementById("teksPertanyaan");
  const konteksPertanyaan = document.getElementById("konteksPertanyaan");
  const nomorPertanyaan = document.getElementById("nomorPertanyaan");
  const progresBar = document.getElementById("progresBar");

  const tombolAkhiri = document.getElementById("tombolAkhiri");
  const tombolLanjut = document.getElementById("tombolLanjut");
  const tombolRekam = document.getElementById("tombolRekam");

  const statusJawaban = document.getElementById("statusJawaban");
  const durasiJawaban = document.getElementById("durasiJawaban");
  const gelombangJawaban = document.getElementById("gelombangJawaban");
  const teksStatusSesi = document.getElementById("teksStatusSesi");

  const videoPengguna = document.getElementById("videoPengguna");
  const kameraFallback = document.getElementById("kameraFallback");
  const tombolMikrofon = document.getElementById("tombolMikrofon");
  const tombolKamera = document.getElementById("tombolKamera");
  const tombolMute = document.getElementById("tombolMute");

  const modalHasil = document.getElementById("modalHasil");
  const modalTutup = document.getElementById("modalTutup");
  const tombolUlangi = document.getElementById("tombolUlangi");
  const tombolLihatProgress = document.getElementById("tombolLihatProgress");

  const nilaiAngka = document.getElementById("nilaiAngka");
  const hasilLevelElement = document.getElementById("hasilLevel");

  const formulirBerlangganan = document.querySelector(".formulir-berlangganan");

  /* =========================================================
     STATE
     ========================================================= */

  let levelTerpilih = "easy";
  let durasiTerpilih = 300;
  let waktuTersisa = durasiTerpilih;
  let intervalTimer = null;
  let intervalJawaban = null;
  let streamKamera = null;
  let pertanyaanIndex = 0;
  let sedangMenjawab = false;

  /* =========================================================
     SIDEBAR
     ========================================================= */

  function bukaSidebar() {
    sidebar.classList.add("aktif");
    lapisan.classList.add("aktif");
    document.body.style.overflow = "hidden";
  }

  function tutupSidebar() {
    sidebar.classList.remove("aktif");
    lapisan.classList.remove("aktif");
    document.body.style.overflow = "";
  }

  tombolHamburger?.addEventListener("click", bukaSidebar);
  tombolTutup?.addEventListener("click", tutupSidebar);
  lapisan?.addEventListener("click", tutupSidebar);

  tombolDropdownSidebar?.addEventListener("click", () => {
    isiDropdownSidebar.classList.toggle("aktif");
    panahSidebar.textContent = isiDropdownSidebar.classList.contains("aktif")
      ? "−"
      : "+";
  });

  document.querySelectorAll(".isi-sidebar a").forEach((link) => {
    link.addEventListener("click", tutupSidebar);
  });

  /* =========================================================
     PILIHAN LEVEL & DURASI
     ========================================================= */

  pilihanLevel.forEach((button) => {
    button.addEventListener("click", () => {
      pilihanLevel.forEach((item) => item.classList.remove("aktif"));
      button.classList.add("aktif");
      levelTerpilih = button.dataset.level;
    });
  });

  durasiItem.forEach((button) => {
    button.addEventListener("click", () => {
      durasiItem.forEach((item) => item.classList.remove("aktif"));
      button.classList.add("aktif");

      durasiTerpilih = Number(button.dataset.duration);
      waktuTersisa = durasiTerpilih;
      updateTimer();
    });
  });

  /* =========================================================
     TIMER
     ========================================================= */

  function formatWaktu(totalDetik) {
    const menit = Math.floor(totalDetik / 60);
    const detik = totalDetik % 60;

    return `${String(menit).padStart(2, "0")}:${String(detik).padStart(
      2,
      "0",
    )}`;
  }

  function updateTimer() {
    timerElement.textContent = formatWaktu(waktuTersisa);

    if (waktuTersisa <= 30) {
      timerElement.parentElement.style.color = "#df4d4d";
    } else {
      timerElement.parentElement.style.color = "";
    }
  }

  function mulaiTimer() {
    clearInterval(intervalTimer);

    intervalTimer = setInterval(() => {
      waktuTersisa -= 1;
      updateTimer();

      if (waktuTersisa <= 0) {
        clearInterval(intervalTimer);
        akhiriSesi();
      }
    }, 1000);
  }

  /* =========================================================
     QUESTION
     ========================================================= */

  function tampilkanPertanyaan() {
    const daftar = pertanyaan[levelTerpilih];
    const item = daftar[pertanyaanIndex];

    teksPertanyaan.textContent = item.question;
    konteksPertanyaan.textContent = item.context;
    nomorPertanyaan.textContent = pertanyaanIndex + 1;

    const progress = ((pertanyaanIndex + 1) / daftar.length) * 100;
    progresBar.style.width = `${progress}%`;

    badgeLevel.textContent = levelTerpilih.toUpperCase();

    resetJawaban();
  }

  /* =========================================================
     CAMERA
     ========================================================= */

  async function mulaiKamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      kameraFallback.classList.remove("nonaktif");
      return;
    }

    try {
      streamKamera = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      videoPengguna.srcObject = streamKamera;
      kameraFallback.classList.add("nonaktif");
    } catch (error) {
      console.info("Camera permission was not granted.");
      kameraFallback.classList.remove("nonaktif");
    }
  }

  function hentikanKamera() {
    if (!streamKamera) return;

    streamKamera.getTracks().forEach((track) => track.stop());
    streamKamera = null;
    videoPengguna.srcObject = null;
  }

  /* =========================================================
     SESSION START
     ========================================================= */

  tombolMulai.addEventListener("click", () => {
    pertanyaanIndex = 0;
    waktuTersisa = durasiTerpilih;

    pengaturanSesi.classList.add("tersembunyi");
    ruangSesi.classList.remove("tersembunyi");

    updateTimer();
    tampilkanPertanyaan();
    mulaiTimer();
    mulaiKamera();

    window.scrollTo({
      top: document.querySelector(".ruang-sesi").offsetTop - 100,
      behavior: "smooth",
    });
  });

  /* =========================================================
     ANSWER RECORDING SIMULATION
     ========================================================= */

  function mulaiJawaban() {
    if (sedangMenjawab) {
      selesaiJawaban();
      return;
    }

    sedangMenjawab = true;
    let durasi = 0;

    tombolRekam.classList.add("aktif");
    gelombangJawaban.classList.add("aktif");
    statusJawaban.textContent = "Mendengarkan...";
    teksStatusSesi.textContent = "Merekam jawabanmu";

    intervalJawaban = setInterval(() => {
      durasi += 1;
      durasiJawaban.textContent = `00:${String(durasi).padStart(2, "0")}`;
    }, 1000);
  }

  function selesaiJawaban() {
    sedangMenjawab = false;

    clearInterval(intervalJawaban);

    tombolRekam.classList.remove("aktif");
    gelombangJawaban.classList.remove("aktif");

    statusJawaban.textContent = "Jawaban tersimpan";
    teksStatusSesi.textContent = "Siap untuk pertanyaan berikutnya";
    tombolRekam.querySelector("strong").textContent = "Rekam lagi";
  }

  function resetJawaban() {
    sedangMenjawab = false;
    clearInterval(intervalJawaban);

    tombolRekam.classList.remove("aktif");
    gelombangJawaban.classList.remove("aktif");

    statusJawaban.textContent = "Giliranmu";
    durasiJawaban.textContent = "00:00";
    teksStatusSesi.textContent = "Mendengarkan jawabanmu";
    tombolRekam.querySelector("strong").textContent = "Tahan untuk menjawab";
  }

  tombolRekam.addEventListener("click", () => {
    if (sedangMenjawab) {
      selesaiJawaban();
    } else {
      mulaiJawaban();
    }
  });

  /* =========================================================
     NEXT QUESTION
     ========================================================= */

  tombolLanjut.addEventListener("click", () => {
    const daftar = pertanyaan[levelTerpilih];

    if (pertanyaanIndex < daftar.length - 1) {
      pertanyaanIndex += 1;
      tampilkanPertanyaan();
    } else {
      akhiriSesi();
    }
  });

  /* =========================================================
     END SESSION + RESULT
     ========================================================= */

  function akhiriSesi() {
    clearInterval(intervalTimer);
    clearInterval(intervalJawaban);

    sedangMenjawab = false;
    hentikanKamera();

    const skor = skorLevel[levelTerpilih];

    nilaiAngka.textContent = skor;
    hasilLevelElement.textContent = hasilLevel[levelTerpilih];

    modalHasil.classList.add("aktif");
    modalHasil.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-terbuka");
  }

  function tutupModal() {
    modalHasil.classList.remove("aktif");
    modalHasil.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-terbuka");
  }

  tombolAkhiri.addEventListener("click", akhiriSesi);
  modalTutup.addEventListener("click", tutupModal);

  modalHasil.addEventListener("click", (event) => {
    if (event.target === modalHasil) {
      tutupModal();
    }
  });

  tombolUlangi.addEventListener("click", () => {
    tutupModal();
    ruangSesi.classList.add("tersembunyi");
    pengaturanSesi.classList.remove("tersembunyi");
    waktuTersisa = durasiTerpilih;
    updateTimer();
    window.scrollTo({
      top: document.querySelector(".sesi-hero").offsetTop - 90,
      behavior: "smooth",
    });
  });

  tombolLihatProgress.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });

  /* =========================================================
     CAMERA / MICROPHONE CONTROLS
     ========================================================= */

  tombolKamera.addEventListener("click", () => {
    const aktif = tombolKamera.classList.contains("aktif");

    if (aktif) {
      tombolKamera.classList.remove("aktif");
      tombolKamera.classList.add("nonaktif");
      videoPengguna.style.visibility = "hidden";
      kameraFallback.classList.remove("nonaktif");
    } else {
      tombolKamera.classList.remove("nonaktif");
      tombolKamera.classList.add("aktif");
      videoPengguna.style.visibility = "visible";

      if (streamKamera) {
        kameraFallback.classList.add("nonaktif");
      }
    }
  });

  tombolMikrofon.addEventListener("click", () => {
    tombolMikrofon.classList.toggle("aktif");
    tombolMikrofon.classList.toggle("nonaktif");

    const icon = tombolMikrofon.querySelector("i");

    if (tombolMikrofon.classList.contains("nonaktif")) {
      icon.className = "fa-solid fa-microphone-slash";
    } else {
      icon.className = "fa-solid fa-microphone";
    }
  });

  tombolMute.addEventListener("click", () => {
    tombolMute.classList.toggle("aktif");

    const icon = tombolMute.querySelector("i");

    if (tombolMute.classList.contains("aktif")) {
      icon.className = "fa-solid fa-volume-high";
    } else {
      icon.className = "fa-solid fa-volume-xmark";
    }
  });

  /* =========================================================
     FOOTER FORM
     ========================================================= */

  formulirBerlangganan?.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = formulirBerlangganan.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Subscribed";

    setTimeout(() => {
      button.textContent = originalText;
      formulirBerlangganan.reset();
    }, 1800);
  });

  updateTimer();
});
