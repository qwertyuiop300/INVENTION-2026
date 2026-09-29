document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("chatbotWidget");
  if (!widget) return;

  const launcher = document.getElementById("chatbotLauncher");
  const chatJendela = document.getElementById("chatbotJendela");
  const tombolTutup = document.getElementById("chatbotTutup");
  const daftarPesan = document.getElementById("chatbotPesan");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");
  const tombolKirim = document.getElementById("chatbotKirim");
  const badge = document.getElementById("chatbotBadge");
  const saranWrapper = document.getElementById("chatbotSaran");

  const AVATAR_BOT = "./assets/icon/chatbot-avatar.svg";
  const STORAGE_KEY = "socraticChatState";
  const SAPAAN_AWAL =
    "Halo! 👋 Aku Socratic Bot. Ada yang bisa aku bantu seputar kursus, tantangan, atau Socratic AI di sini?";

  const SARAN_CEPAT = [
    "Ada kursus apa saja?",
    "Bagaimana cara ikut tantangan?",
    "Apa itu Socratic AI?",
  ];

  const ATURAN_BALASAN = [
    {
      pola: /\b(halo|hai|hi|hello|pagi|siang|sore|malam)\b/i,
      balasan:
        "Halo juga! 😊 Mau tanya soal apa nih — kursus, tantangan, atau cara pakai Socratic AI?",
    },
    {
      pola: /\b(kursus|course|belajar|materi)\b/i,
      balasan:
        'Kamu bisa jelajahi semua kursus kami di halaman "Courses". Ada kategori Teknologi, Bisnis, Keuangan, Sains, Bahasa, sampai Pengembangan Diri lho!',
    },
    {
      pola: /\b(tantangan|challenge|kuis|quiz)\b/i,
      balasan:
        "Tantangan di sini berupa kuis pilihan ganda berisi 10 soal untuk menguji pemahamanmu. Beberapa tantangan baru terbuka setelah kamu menyelesaikan kursus terkait ya.",
    },
    {
      pola: /socratic\s*ai/i,
      balasan:
        "Socratic AI itu fitur latihan berbicara berbasis pertanyaan — AI akan menanyakan pemahamanmu dan memberi masukan, bukan cuma kasih jawaban instan.",
    },
    {
      pola: /\b(harga|biaya|price|bayar)\b/i,
      balasan:
        "Harga tiap kursus berbeda-beda, mulai dari sekitar Rp130.000-an. Detail lengkapnya ada di halaman masing-masing kursus.",
    },
    {
      pola: /\b(progres|progress|dashboard)\b/i,
      balasan:
        'Progres belajarmu bisa dipantau lengkap di halaman "My Learning" / Dashboard.',
    },
    {
      pola: /\b(terima kasih|makasih|thanks|thank you)\b/i,
      balasan: "Sama-sama! Semangat belajarnya 🔥",
    },
    {
      pola: /\b(bye|dadah|sampai jumpa)\b/i,
      balasan:
        "Sampai jumpa! Jangan ragu buka chat ini lagi kalau butuh bantuan ya 👋",
    },
    {
      pola: /\b(bantuan|help|tolong)\b/i,
      balasan:
        "Tentu, ceritakan kendalamu. Atau pilih salah satu topik: kursus, tantangan, Socratic AI, atau progres belajar.",
    },
  ];

  const BALASAN_DEFAULT = [
    "Menarik! Ini masih simulasi demo, tapi pertanyaanmu sudah aku catat 📝",
    "Bisa diceritakan sedikit lebih detail? Aku masih dalam mode simulasi demo.",
    "Pertanyaan bagus! Untuk saat ini aku masih versi simulasi, nanti tim kami akan melengkapi jawabannya.",
  ];

  let indexDefault = 0;
  let sedangMengetik = false;

  function ambilState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function simpanState(state) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      /* sessionStorage tidak tersedia, abaikan */
    }
  }

  let state = ambilState() || {
    terbuka: false,
    sudahDisapa: false,
    pesan: [],
  };

  function scrollKeBawah() {
    daftarPesan.scrollTop = daftarPesan.scrollHeight;
  }

  function buatBubble(dari, teks) {
    const baris = document.createElement("div");
    baris.className = `pesan pesan-${dari}`;

    if (dari === "bot") {
      const avatar = document.createElement("img");
      avatar.src = AVATAR_BOT;
      avatar.alt = "";
      avatar.className = "pesan-avatar";
      baris.appendChild(avatar);
    }

    const bubble = document.createElement("div");
    bubble.className = "pesan-bubble";
    bubble.textContent = teks;
    baris.appendChild(bubble);

    return baris;
  }

  function renderSemuaPesan() {
    daftarPesan.replaceChildren();
    state.pesan.forEach((item) => {
      daftarPesan.appendChild(buatBubble(item.dari, item.teks));
    });
    scrollKeBawah();
  }

  function tambahPesan(dari, teks, simpan) {
    daftarPesan.appendChild(buatBubble(dari, teks));
    scrollKeBawah();

    if (simpan !== false) {
      state.pesan.push({ dari, teks });
      simpanState(state);
    }
  }

  function tampilkanMengetik() {
    sedangMengetik = true;

    const baris = document.createElement("div");
    baris.className = "pesan pesan-bot";
    baris.id = "chatbotIndikatorMengetik";

    const avatar = document.createElement("img");
    avatar.src = AVATAR_BOT;
    avatar.alt = "";
    avatar.className = "pesan-avatar";

    const bubble = document.createElement("div");
    bubble.className = "pesan-bubble pesan-mengetik";
    bubble.innerHTML = "<span></span><span></span><span></span>";

    baris.append(avatar, bubble);
    daftarPesan.appendChild(baris);
    scrollKeBawah();
  }

  function sembunyikanMengetik() {
    sedangMengetik = false;
    document.getElementById("chatbotIndikatorMengetik")?.remove();
  }

  function cariBalasan(teksUser) {
    for (const aturan of ATURAN_BALASAN) {
      if (aturan.pola.test(teksUser)) return aturan.balasan;
    }

    const balasan = BALASAN_DEFAULT[indexDefault % BALASAN_DEFAULT.length];
    indexDefault += 1;
    return balasan;
  }

  function kirimPesanUser(teks) {
    const bersih = teks.trim();
    if (!bersih || sedangMengetik) return;

    tambahPesan("user", bersih);
    input.value = "";
    tombolKirim.disabled = true;

    tampilkanMengetik();

    const waktuTunggu = 700 + Math.random() * 700;

    window.setTimeout(() => {
      sembunyikanMengetik();
      tambahPesan("bot", cariBalasan(bersih));
      tombolKirim.disabled = false;
      input.focus();
    }, waktuTunggu);
  }

  function bukaChat() {
    widget.classList.add("terbuka");
    launcher.setAttribute("aria-expanded", "true");
    chatJendela.setAttribute("aria-hidden", "false");
    if (badge) badge.hidden = true;

    state.terbuka = true;
    simpanState(state);

    if (!state.sudahDisapa) {
      state.sudahDisapa = true;
      simpanState(state);

      window.setTimeout(() => {
        tampilkanMengetik();
        window.setTimeout(() => {
          sembunyikanMengetik();
          tambahPesan("bot", SAPAAN_AWAL);
        }, 650);
      }, 250);
    }

    window.setTimeout(() => input?.focus(), 260);
  }

  function tutupChat() {
    widget.classList.remove("terbuka");
    launcher.setAttribute("aria-expanded", "false");
    chatJendela.setAttribute("aria-hidden", "true");

    state.terbuka = false;
    simpanState(state);
  }

  launcher?.addEventListener("click", () => {
    if (widget.classList.contains("terbuka")) {
      tutupChat();
    } else {
      bukaChat();
    }
  });

  tombolTutup?.addEventListener("click", tutupChat);

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    kirimPesanUser(input.value);
  });

  saranWrapper?.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    kirimPesanUser(tombol.textContent.trim());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && widget.classList.contains("terbuka")) {
      tutupChat();
    }
  });

  // Isi ulang saran cepat (hanya statis, tidak perlu disimpan ke state).
  if (saranWrapper) {
    saranWrapper.replaceChildren();
    SARAN_CEPAT.forEach((teks) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.textContent = teks;
      saranWrapper.appendChild(tombol);
    });
  }

  // Pulihkan riwayat percakapan & status buka/tutup dari halaman sebelumnya.
  renderSemuaPesan();

  if (state.terbuka) {
    widget.classList.add("terbuka");
    launcher.setAttribute("aria-expanded", "true");
    chatJendela.setAttribute("aria-hidden", "false");
  }

  if (badge) {
    badge.hidden = state.terbuka || state.sudahDisapa === true;
  }
});
