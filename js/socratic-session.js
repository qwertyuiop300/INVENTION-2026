document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     DATA DEMO
     ========================================================= */

  const pertanyaan = {
    easy: [
      {
        question: "In your own words, what makes a website responsive?",
        context:
          "Think about how the same page can adapt to different screen sizes.",
      },
      {
        question:
          "Why would you use semantic HTML instead of only div elements?",
        context: "Explain the idea as if you were teaching it to a beginner.",
      },
      {
        question: "What is the purpose of CSS media queries?",
        context: "Give one simple example of when you would use one.",
      },
      {
        question: "What does a mobile-first approach mean in web design?",
        context: "Focus on the design process, not a specific framework.",
      },
      {
        question:
          "What is one thing you check before calling a webpage responsive?",
        context: "Choose a practical check that you could perform yourself.",
      },
    ],
    medium: [
      {
        question:
          "A layout looks good on desktop but breaks on mobile. How would you diagnose it?",
        context:
          "Walk through your reasoning rather than only listing CSS properties.",
      },
      {
        question: "When would you choose CSS Grid over Flexbox for a layout?",
        context:
          "Compare the two based on the problem you are trying to solve.",
      },
      {
        question: "How can image choices affect a website's performance?",
        context: "Connect visual quality with loading experience.",
      },
      {
        question:
          "A client wants every section to look visually different. How would you keep the design consistent?",
        context: "Think about reusable design decisions and visual hierarchy.",
      },
      {
        question:
          "How would you improve a page that feels crowded on a 13-inch laptop?",
        context: "Explain which design signals you would inspect first.",
      },
    ],
    hard: [
      {
        question:
          "A beautiful landing page scores poorly on accessibility. What would you investigate first, and why?",
        context:
          "Defend your priorities as if you were reviewing the project with a team.",
      },
      {
        question:
          "You need to improve page speed without changing the visual design. What trade-offs would you consider?",
        context:
          "Explain how you would balance performance and visual fidelity.",
      },
      {
        question:
          "Two responsive layouts are both technically valid. How would you decide which one creates a better user experience?",
        context: "Use principles rather than personal preference alone.",
      },
      {
        question:
          "A design system has too many components and is slowing the team down. How would you simplify it?",
        context: "Explain how you would identify what should stay reusable.",
      },
      {
        question:
          "How would you explain the difference between a visually consistent interface and a predictable interface?",
        context: "Use an example from a real product or website.",
      },
    ],
  };

  const hasilLevel = {
    easy: "Explorer",
    medium: "Problem Solver",
    hard: "Critical Thinker",
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
    statusJawaban.textContent = "Listening...";
    teksStatusSesi.textContent = "Recording your answer";

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

    statusJawaban.textContent = "Answer captured";
    teksStatusSesi.textContent = "Ready for the next question";
    tombolRekam.querySelector("strong").textContent = "Record again";
  }

  function resetJawaban() {
    sedangMenjawab = false;
    clearInterval(intervalJawaban);

    tombolRekam.classList.remove("aktif");
    gelombangJawaban.classList.remove("aktif");

    statusJawaban.textContent = "Your turn";
    durasiJawaban.textContent = "00:00";
    teksStatusSesi.textContent = "Listening for your answer";
    tombolRekam.querySelector("strong").textContent = "Hold to answer";
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
