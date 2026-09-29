document.addEventListener("DOMContentLoaded", () => {
  const tombolHamburger = document.getElementById("tombolHamburger");
  const tombolTutup = document.getElementById("tombolTutup");
  const sidebar = document.getElementById("sidebar");
  const lapisan = document.getElementById("lapisan");

  const tombolDropdownSidebar = document.getElementById(
    "tombolDropdownSidebar",
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
  const popupJumlahSoal = document.getElementById("popupJumlahSoal");
  const popupEstimasiWaktu = document.getElementById("popupEstimasiWaktu");
  const popupHadiah = document.getElementById("popupHadiah");
  const popupKursusMinimal = document.getElementById("popupKursusMinimal");

  const infoKunci = document.getElementById("infoKunci");
  const infoKunciTeks = document.getElementById("infoKunciTeks");
  const infoKunciBar = document.getElementById("infoKunciBar");
  const infoKunciPersen = document.getElementById("infoKunciPersen");

  const lapisanKuis = document.getElementById("lapisanKuis");
  const popupKuis = document.getElementById("popupKuis");
  const kuisJudul = document.getElementById("kuisJudul");
  const kuisWaktuWrapper = document.getElementById("kuisWaktuWrapper");
  const kuisTimer = document.getElementById("kuisTimer");
  const tombolKeluarKuis = document.getElementById("tombolKeluarKuis");
  const kuisNavigasi = document.getElementById("kuisNavigasi");
  const kuisTeksSoal = document.getElementById("kuisTeksSoal");
  const kuisOpsiList = document.getElementById("kuisOpsiList");
  const tombolSoalSebelumnya = document.getElementById("tombolSoalSebelumnya");
  const tombolSelesaikanKuis = document.getElementById("tombolSelesaikanKuis");
  const tombolSoalSelanjutnya = document.getElementById(
    "tombolSoalSelanjutnya",
  );

  const modalHasilKuis = document.getElementById("modalHasilKuis");
  const tombolTutupHasil = document.getElementById("tombolTutupHasil");
  const hasilKuisNama = document.getElementById("hasilKuisNama");
  const hasilKuisSkor = document.getElementById("hasilKuisSkor");
  const hasilKuisKeterangan = document.getElementById("hasilKuisKeterangan");
  const hasilKuisBenar = document.getElementById("hasilKuisBenar");
  const hasilKuisSalah = document.getElementById("hasilKuisSalah");
  const hasilKuisAkurasi = document.getElementById("hasilKuisAkurasi");
  const hasilKuisWaktu = document.getElementById("hasilKuisWaktu");
  const hasilKuisMasukan = document.getElementById("hasilKuisMasukan");
  const tombolUlangiKuis = document.getElementById("tombolUlangiKuis");
  const tombolKembaliTantangan = document.getElementById(
    "tombolKembaliTantangan",
  );

  const dataChallenge = {
    "landing-page": {
      ikon: "</>",
      kategori: "PENGEMBANGAN WEB",
      durasi: "15 MENIT",
      durasiDetail: "15 menit",
      judul: "Dasar-Dasar Landing Page",
      deskripsi:
        "Uji pemahamanmu tentang struktur dan elemen penting sebuah landing page lewat 10 pertanyaan pilihan ganda.",
      level: "Menengah",
      xp: "250 XP",
      status: "Tersedia",
      terkunci: false,
      siklusJam: 24,
      kursusMinimal: "Dasar-Dasar Pengembangan Web",
      kuis: [
        {
          pertanyaan: "Apa tujuan utama sebuah landing page?",
          opsi: [
            "Menampilkan seluruh riwayat perusahaan",
            "Mengarahkan pengunjung untuk melakukan satu tindakan spesifik",
            "Menjadi pengganti seluruh website",
            "Menyimpan data pengguna secara otomatis",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Bagian apa yang biasanya diletakkan paling atas pada landing page?",
          opsi: [
            "Footer",
            "Hero section berisi judul dan ajakan bertindak",
            "Formulir pembayaran",
            "Daftar harga",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Apa fungsi utama Call-to-Action (CTA) pada landing page?",
          opsi: [
            "Memperindah tampilan halaman",
            "Mendorong pengunjung melakukan tindakan tertentu",
            "Menampilkan navigasi situs",
            "Menyimpan riwayat kunjungan",
          ],
          jawaban: 1,
        },
        {
          pertanyaan: "Mengapa kecepatan loading penting untuk landing page?",
          opsi: [
            "Karena mesin pencari mengabaikannya",
            "Karena pengunjung cenderung pergi jika halaman lambat",
            "Karena tidak memengaruhi konversi",
            "Karena hanya memengaruhi desain",
          ],
          jawaban: 1,
        },
        {
          pertanyaan: 'Apa yang dimaksud dengan "above the fold"?',
          opsi: [
            "Bagian halaman yang terlihat tanpa perlu scroll",
            "Bagian paling bawah halaman",
            "Bagian yang hanya terlihat di mobile",
            "Menu navigasi tersembunyi",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Elemen apa yang membantu membangun kepercayaan pengunjung pada landing page?",
          opsi: [
            "Testimoni pelanggan",
            "Warna latar belakang yang mencolok",
            "Jumlah gambar yang banyak",
            "Ukuran font yang besar",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa risiko jika landing page memiliki terlalu banyak CTA berbeda?",
          opsi: [
            "Pengunjung menjadi bingung dan konversi menurun",
            "Halaman menjadi lebih cepat",
            "SEO otomatis meningkat",
            "Tidak ada risiko sama sekali",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Mengapa desain responsif penting untuk landing page?",
          opsi: [
            "Karena hanya pengguna desktop yang berkunjung",
            "Karena pengunjung mengakses dari berbagai ukuran perangkat",
            "Karena mengurangi kebutuhan gambar",
            "Karena tidak berpengaruh pada pengalaman pengguna",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Apa contoh metrik yang bisa mengukur keberhasilan sebuah landing page?",
          opsi: [
            "Jumlah warna yang digunakan",
            "Tingkat konversi pengunjung menjadi pengguna/pembeli",
            "Jumlah font yang dipakai",
            "Panjang kode HTML",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Kapan sebaiknya menempatkan formulir pendaftaran pada landing page?",
          opsi: [
            "Selalu di paling bawah tanpa pengecualian",
            "Disesuaikan dengan alur dan tujuan halaman, misalnya di hero atau setelah value proposition",
            "Tidak perlu ditampilkan",
            "Hanya di halaman terpisah",
          ],
          jawaban: 1,
        },
      ],
    },

    "explain-ai": {
      ikon: "✦",
      kategori: "KECERDASAN BUATAN",
      durasi: "20 MENIT",
      durasiDetail: "20 menit",
      judul: "Dasar-Dasar Kecerdasan Buatan",
      deskripsi:
        "Uji pemahamanmu tentang konsep dasar AI dan cara kerjanya lewat 10 pertanyaan pilihan ganda.",
      level: "Mudah",
      xp: "200 XP",
      status: "Tersedia",
      terkunci: false,
      siklusJam: 20,
      kursusMinimal: "Pengantar Kecerdasan Buatan",
      kuis: [
        {
          pertanyaan: "Secara sederhana, apa itu AI (Kecerdasan Buatan)?",
          opsi: [
            "Program yang bisa meniru kemampuan berpikir manusia untuk tugas tertentu",
            "Perangkat keras komputer generasi terbaru",
            "Jenis baru dari jaringan internet",
            "Sistem operasi komputer",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            'Apa yang dimaksud dengan "data latih" (training data) dalam AI?',
          opsi: [
            "Data yang digunakan untuk mengajarkan model mengenali pola",
            "Data hasil akhir dari sebuah model",
            "Data yang tidak digunakan sama sekali",
            "Data pribadi pengguna aplikasi",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Apa contoh penerapan AI dalam kehidupan sehari-hari?",
          opsi: [
            "Rekomendasi video di platform streaming",
            "Kalkulator sederhana",
            "Kalender dinding",
            "Mesin ketik manual",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Mengapa AI perlu belajar dari banyak contoh data?",
          opsi: [
            "Agar bisa mengenali pola dan membuat prediksi yang lebih akurat",
            "Agar ukuran file menjadi lebih besar",
            "Agar tidak membutuhkan komputer",
            "Karena tidak ada alasan khusus",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa perbedaan mendasar antara AI dan program komputer biasa?",
          opsi: [
            "AI dapat belajar dan menyesuaikan dari data, program biasa mengikuti instruksi tetap",
            "AI selalu lebih lambat",
            "Program biasa selalu lebih pintar",
            "Tidak ada perbedaan",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Apa itu machine learning?",
          opsi: [
            "Cabang AI yang memungkinkan sistem belajar dari data tanpa diprogram secara eksplisit untuk setiap aturan",
            "Proses merakit komputer",
            "Jenis kabel jaringan",
            "Sistem penyimpanan data biasa",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Mengapa penting menjelaskan AI dengan bahasa sederhana kepada pemula?",
          opsi: [
            "Agar konsep sulit tetap mudah dipahami",
            "Agar terlihat lebih rumit",
            "Karena tidak ada cara lain",
            "Karena pemula tidak perlu memahami AI",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Apa risiko jika AI dilatih dengan data yang bias?",
          opsi: [
            "Hasil prediksi AI juga bisa menjadi bias atau tidak adil",
            "AI menjadi lebih cepat",
            "Tidak ada risiko",
            "AI otomatis memperbaiki dirinya sendiri",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Apa peran manusia dalam sistem AI saat ini?",
          opsi: [
            "Menyediakan data, mengawasi, dan mengambil keputusan akhir pada hal penting",
            "Tidak memiliki peran sama sekali",
            "Hanya menyalakan komputer",
            "Menggantikan seluruh pekerjaan AI",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Bagaimana cara terbaik memperkenalkan AI kepada orang yang belum familiar?",
          opsi: [
            "Menggunakan analogi dan contoh dari kehidupan sehari-hari",
            "Langsung menjelaskan rumus matematika kompleks",
            "Menghindari memberi contoh",
            "Menggunakan istilah teknis sebanyak mungkin",
          ],
          jawaban: 0,
        },
      ],
    },

    "ux-audit": {
      ikon: "◌",
      kategori: "DESAIN UX / UI",
      durasi: "25 MENIT",
      durasiDetail: "25 menit",
      judul: "Dasar-Dasar UI/UX Design",
      deskripsi:
        "Uji pemahamanmu tentang prinsip UX/UI dan cara memperbaiki antarmuka lewat 10 pertanyaan pilihan ganda.",
      level: "Sulit",
      xp: "350 XP",
      status: "Tersedia",
      terkunci: true,
      siklusJam: 72,
      kursusMinimal: "Dasar-Dasar UX/UI Design",
      syaratProgress: 70,
      progressSaatIni: 35,
      kuis: [
        {
          pertanyaan:
            "Apa langkah pertama yang tepat saat melakukan audit UX pada sebuah antarmuka?",
          opsi: [
            "Langsung mengubah warna tombol",
            "Mengidentifikasi masalah pengalaman pengguna melalui observasi dan data",
            "Menghapus semua elemen desain",
            "Menambahkan animasi sebanyak mungkin",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Apa yang dimaksud dengan hierarki visual dalam desain antarmuka?",
          opsi: [
            "Urutan warna pada logo",
            "Cara elemen disusun agar pengguna tahu mana yang paling penting",
            "Jumlah halaman dalam sebuah situs",
            "Ukuran file gambar",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Mengapa konsistensi desain penting dalam sebuah produk digital?",
          opsi: [
            "Membantu pengguna belajar pola interaksi lebih cepat",
            "Membuat file lebih kecil",
            "Tidak memiliki manfaat nyata",
            "Hanya untuk estetika semata",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa yang sebaiknya dilakukan jika navigasi sebuah aplikasi membingungkan pengguna?",
          opsi: [
            "Menambah lebih banyak menu tanpa pengelompokan",
            "Menyederhanakan struktur dan mengelompokkan berdasarkan tujuan pengguna",
            "Menghapus navigasi sepenuhnya",
            "Membiarkannya karena pengguna akan terbiasa",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            'Apa itu "predictable interface" (antarmuka yang dapat diprediksi)?',
          opsi: [
            "Antarmuka yang perilakunya konsisten sehingga pengguna bisa menebak hasil dari sebuah aksi",
            "Antarmuka yang selalu berubah tanpa pola",
            "Antarmuka yang hanya berfungsi di satu perangkat",
            "Antarmuka tanpa tombol interaktif",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Bagaimana cara memprioritaskan perbaikan UX ketika menemukan banyak masalah sekaligus?",
          opsi: [
            "Memperbaiki semuanya secara acak",
            "Memprioritaskan berdasarkan dampak terhadap pengguna dan tujuan bisnis",
            "Memilih perbaikan yang paling mudah dikerjakan saja",
            "Mengabaikan masalah kecil selamanya",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Apa dampak dari kontras warna yang buruk pada teks dan latar belakang?",
          opsi: [
            "Meningkatkan estetika secara otomatis",
            "Menurunkan keterbacaan dan aksesibilitas konten",
            "Tidak memiliki dampak berarti",
            "Membuat halaman lebih cepat dimuat",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Mengapa umpan balik (feedback) visual penting setelah pengguna melakukan aksi seperti klik tombol?",
          opsi: [
            "Memberi tahu pengguna bahwa aksinya berhasil dikenali sistem",
            "Membuat tampilan lebih ramai",
            "Tidak berpengaruh pada pengalaman pengguna",
            "Hanya diperlukan pada aplikasi game",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Apa perbedaan antara UI dan UX?",
          opsi: [
            "UI berfokus pada tampilan visual, UX berfokus pada keseluruhan pengalaman pengguna",
            "UI dan UX adalah hal yang sama persis",
            "UX hanya berkaitan dengan warna",
            "UI tidak berkaitan dengan desain",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Bagaimana cara memvalidasi bahwa perubahan desain benar-benar memperbaiki pengalaman pengguna?",
          opsi: [
            "Menduga-duga tanpa data",
            "Melakukan pengujian dengan pengguna nyata atau data penggunaan",
            "Hanya berdasarkan opini pribadi desainer",
            "Tidak perlu divalidasi",
          ],
          jawaban: 1,
        },
      ],
    },

    "product-pitch": {
      ikon: "↗",
      kategori: "BISNIS",
      durasi: "15 MENIT",
      durasiDetail: "15 menit",
      judul: "Dasar-Dasar Bisnis Digital",
      deskripsi:
        "Uji pemahamanmu tentang cara menyusun dan menyampaikan ide produk lewat 10 pertanyaan pilihan ganda.",
      level: "Menengah",
      xp: "250 XP",
      status: "Tersedia",
      terkunci: false,
      siklusJam: 30,
      kursusMinimal: "Dasar Bisnis Digital",
      kuis: [
        {
          pertanyaan:
            "Apa elemen paling penting yang harus ada di awal sebuah product pitch?",
          opsi: [
            "Daftar harga produk",
            "Masalah nyata yang dihadapi target pengguna",
            "Struktur organisasi perusahaan",
            "Daftar fitur teknis secara detail",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Mengapa menentukan target pengguna itu penting sebelum presentasi ide produk?",
          opsi: [
            "Agar solusi yang ditawarkan relevan dengan kebutuhan mereka",
            "Karena wajib disebutkan meskipun tidak relevan",
            "Tidak berpengaruh pada hasil presentasi",
            "Hanya formalitas semata",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: 'Apa yang dimaksud dengan "value proposition"?',
          opsi: [
            "Daftar semua fitur produk",
            "Nilai unik yang ditawarkan produk untuk menyelesaikan masalah pengguna",
            "Harga jual produk",
            "Nama merek produk",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Mengapa pitch produk sebaiknya disampaikan secara ringkas dan jelas?",
          opsi: [
            "Karena audiens memiliki waktu terbatas untuk memahami inti ide",
            "Karena audiens tidak perlu memahami idenya",
            "Karena semakin panjang semakin meyakinkan",
            "Tidak ada alasan khusus",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa yang sebaiknya dilakukan jika pendengar mengajukan pertanyaan kritis saat pitch?",
          opsi: [
            "Mengabaikan pertanyaan tersebut",
            "Menjawab dengan tenang dan berdasarkan data atau alasan yang jelas",
            "Mengubah topik pembicaraan",
            "Membatalkan presentasi",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Mengapa contoh nyata atau studi kasus dapat memperkuat sebuah pitch?",
          opsi: [
            "Membantu audiens memahami dampak nyata dari solusi yang ditawarkan",
            "Membuat presentasi menjadi lebih panjang",
            "Tidak memberikan manfaat tambahan",
            "Hanya menambah durasi presentasi",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa risiko jika sebuah pitch terlalu berfokus pada fitur teknis tanpa menjelaskan manfaatnya?",
          opsi: [
            "Audiens sulit memahami relevansi produk bagi mereka",
            "Presentasi menjadi lebih meyakinkan",
            "Tidak ada risiko sama sekali",
            "Audiens otomatis tertarik",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            'Apa tujuan menyampaikan "call to action" di akhir sebuah pitch?',
          opsi: [
            "Mengarahkan audiens pada langkah selanjutnya yang diinginkan",
            "Menutup presentasi tanpa kesimpulan",
            "Mengulang seluruh isi presentasi",
            "Tidak memiliki tujuan tertentu",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Mengapa penting memahami masalah sebelum menawarkan solusi dalam sebuah pitch?",
          opsi: [
            "Agar solusi yang ditawarkan benar-benar relevan dan meyakinkan",
            "Karena masalah tidak penting untuk dibahas",
            "Karena solusi selalu lebih penting dari masalah",
            "Tidak ada hubungannya",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa yang membuat sebuah pitch produk mudah diingat oleh audiens?",
          opsi: [
            "Cerita atau narasi yang jelas dan relevan dengan masalah nyata",
            "Jumlah slide yang sangat banyak",
            "Penggunaan istilah teknis yang rumit",
            "Durasi presentasi yang sangat panjang",
          ],
          jawaban: 0,
        },
      ],
    },

    "debug-javascript": {
      ikon: "JS",
      kategori: "PENGEMBANGAN WEB",
      durasi: "20 MENIT",
      durasiDetail: "20 menit",
      judul: "Dasar-Dasar JavaScript",
      deskripsi:
        "Uji pemahamanmu tentang logika debugging dan alur eksekusi JavaScript lewat 10 pertanyaan pilihan ganda.",
      level: "Sulit",
      xp: "400 XP",
      status: "Tersedia",
      terkunci: true,
      siklusJam: 48,
      kursusMinimal: "Fundamental JavaScript",
      syaratProgress: 60,
      progressSaatIni: 20,
      kuis: [
        {
          pertanyaan:
            "Apa langkah pertama yang tepat saat menemukan bug pada interaksi website?",
          opsi: [
            "Langsung mengubah banyak kode secara bersamaan",
            "Mereproduksi masalah untuk memahami kondisi yang memicunya",
            "Menghapus seluruh file JavaScript",
            "Mengabaikan bug tersebut",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Apa fungsi utama dari console.log() saat proses debugging?",
          opsi: [
            "Mengubah tampilan halaman",
            "Menampilkan nilai variabel atau alur eksekusi untuk membantu analisis",
            "Menghapus data dari server",
            "Mempercepat loading halaman",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Mengapa memahami urutan eksekusi kode penting saat debugging?",
          opsi: [
            "Agar bisa menemukan titik di mana perilaku menyimpang dari yang diharapkan",
            "Tidak berpengaruh pada proses debugging",
            "Hanya relevan untuk kode CSS",
            "Karena urutan kode tidak memengaruhi hasil",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa yang dimaksud dengan root cause dalam konteks debugging?",
          opsi: [
            "Baris kode terakhir yang dijalankan",
            "Penyebab mendasar dari sebuah masalah, bukan hanya gejalanya",
            "Nama file tempat bug ditemukan",
            "Jumlah baris kode dalam sebuah fungsi",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Mengapa event listener yang tidak terpasang dengan benar bisa menyebabkan tombol tidak merespons?",
          opsi: [
            "Karena browser secara otomatis menonaktifkan tombol",
            "Karena fungsi tidak akan dijalankan ketika elemen diklik",
            "Karena CSS selalu menjadi penyebabnya",
            "Karena hal ini tidak mungkin terjadi",
          ],
          jawaban: 1,
        },
        {
          pertanyaan:
            "Apa manfaat menggunakan breakpoint di developer tools browser?",
          opsi: [
            "Menghentikan eksekusi kode pada titik tertentu untuk memeriksa kondisi variabel",
            "Menghapus baris kode secara otomatis",
            "Mempercepat proses loading halaman",
            "Mengubah warna tampilan halaman",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Bagaimana cara memastikan sebuah perbaikan bug benar-benar berhasil?",
          opsi: [
            "Menguji ulang skenario yang sebelumnya menyebabkan masalah",
            "Langsung menganggap selesai tanpa pengujian",
            "Menghapus kode terkait tanpa verifikasi",
            "Mengabaikan pengujian karena memakan waktu",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa risiko mengubah banyak bagian kode sekaligus saat mencoba memperbaiki bug?",
          opsi: [
            "Sulit mengetahui perubahan mana yang benar-benar menyelesaikan masalah",
            "Bug pasti langsung hilang",
            "Tidak ada risiko sama sekali",
            "Kode menjadi otomatis lebih cepat",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Mengapa membaca pesan error di console browser penting saat debugging?",
          opsi: [
            "Karena pesan error sering menunjukkan lokasi dan jenis masalah",
            "Karena pesan error selalu tidak relevan",
            "Karena hanya berguna untuk desainer",
            "Karena tidak memberikan informasi apa pun",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa pendekatan yang tepat ketika bug sulit direproduksi secara konsisten?",
          opsi: [
            "Mengabaikan bug tersebut sepenuhnya",
            "Mencatat kondisi spesifik saat bug muncul untuk menemukan pola penyebabnya",
            "Menghapus fitur terkait tanpa investigasi",
            "Berasumsi bug tidak nyata",
          ],
          jawaban: 1,
        },
      ],
    },

    "ai-ethics": {
      ikon: "◎",
      kategori: "KECERDASAN BUATAN",
      durasi: "15 MENIT",
      durasiDetail: "15 menit",
      judul: "Etika dan Kebijakan AI",
      deskripsi:
        "Uji pemahamanmu tentang etika, bias, dan tanggung jawab dalam penggunaan AI lewat 10 pertanyaan pilihan ganda.",
      level: "Menengah",
      xp: "250 XP",
      status: "Selesai",
      terkunci: false,
      siklusJam: 24,
      kursusMinimal: "Etika dan Kebijakan AI",
      kuis: [
        {
          pertanyaan:
            "Mengapa keputusan penting yang dibantu AI tetap memerlukan pertimbangan manusia?",
          opsi: [
            "Karena AI dapat memiliki bias atau keterbatasan konteks",
            "Karena AI selalu salah",
            "Karena manusia tidak boleh menggunakan teknologi",
            "Karena tidak ada alasan khusus",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Apa yang dimaksud dengan bias pada sistem AI?",
          opsi: [
            "Kecenderungan hasil yang tidak adil akibat data atau desain sistem",
            "Kecepatan pemrosesan data",
            "Jumlah pengguna yang menggunakan sistem",
            "Ukuran model AI",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Mengapa transparansi penting dalam penggunaan AI untuk pengambilan keputusan?",
          opsi: [
            "Agar pengguna memahami bagaimana dan mengapa keputusan diambil",
            "Karena transparansi tidak memiliki manfaat",
            "Agar sistem menjadi lebih lambat",
            "Karena hanya diperlukan untuk keperluan pemasaran",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa risiko utama jika AI digunakan tanpa pengawasan manusia dalam keputusan yang berdampak besar pada individu?",
          opsi: [
            "Kesalahan atau ketidakadilan bisa terjadi tanpa ada pihak yang bertanggung jawab",
            "Prosesnya pasti menjadi lebih adil secara otomatis",
            "Tidak ada risiko yang perlu dipertimbangkan",
            "Biaya operasional pasti menurun",
          ],
          jawaban: 0,
        },
        {
          pertanyaan: "Bagaimana cara mengurangi risiko bias pada sistem AI?",
          opsi: [
            "Menggunakan data pelatihan yang lebih beragam dan melakukan evaluasi berkala",
            "Mengabaikan data pelatihan sepenuhnya",
            "Menghindari evaluasi sistem",
            "Membiarkan sistem berjalan tanpa pengujian",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Mengapa penting menetapkan batas jelas antara tugas yang boleh diotomatisasi AI dan yang tetap memerlukan manusia?",
          opsi: [
            "Untuk memastikan akuntabilitas dan keputusan etis tetap terjaga",
            "Karena AI tidak boleh digunakan sama sekali",
            "Karena tidak ada perbedaan antara keduanya",
            "Untuk mempercepat semua proses tanpa pengecualian",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa contoh dampak positif AI dalam pengambilan keputusan jika diterapkan dengan tepat?",
          opsi: [
            "Membantu menganalisis data dalam jumlah besar untuk mendukung keputusan yang lebih baik",
            "Menggantikan seluruh tanggung jawab manusia",
            "Menjamin hasil selalu sempurna tanpa pengawasan",
            "Menghilangkan kebutuhan akan evaluasi etis",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Mengapa privasi data menjadi isu etis penting dalam pengembangan AI?",
          opsi: [
            "Karena AI sering menggunakan data yang berkaitan dengan individu",
            "Karena privasi tidak relevan dengan AI",
            "Karena data pribadi tidak pernah digunakan dalam AI",
            "Karena hal ini hanya berlaku untuk perusahaan teknologi besar",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Apa peran regulasi dalam penggunaan AI di sektor yang berdampak pada masyarakat luas?",
          opsi: [
            "Membantu memastikan penggunaan AI tetap bertanggung jawab dan adil",
            "Menghambat seluruh perkembangan teknologi",
            "Tidak memiliki peran penting",
            "Hanya relevan untuk satu negara saja",
          ],
          jawaban: 0,
        },
        {
          pertanyaan:
            "Bagaimana pendekatan terbaik saat sebuah organisasi mempertimbangkan penggunaan AI untuk keputusan sensitif?",
          opsi: [
            "Menggunakannya sepenuhnya tanpa evaluasi tambahan",
            "Mengevaluasi risiko, memastikan pengawasan manusia, dan menjaga transparansi",
            "Menghindari AI sepenuhnya tanpa mempertimbangkan manfaatnya",
            "Mengabaikan dampak sosial dari keputusan tersebut",
          ],
          jawaban: 1,
        },
      ],
    },
  };

  /* =====================================================
     STATUS KARTU (TERKUNCI)
  ====================================================== */

  /* =====================================================
     BATAS WAKTU (LIVE COUNTDOWN)
     Dihitung dari siklusJam agar tetap konsisten walau
     halaman di-refresh, bukan direset ulang dari awal.
  ====================================================== */

  function hitungSisaWaktu(siklusJam) {
    const siklusMs = siklusJam * 60 * 60 * 1000;
    const sisaMs = siklusMs - (Date.now() % siklusMs);

    return { sisaMs, siklusMs };
  }

  function formatSisaWaktu(ms) {
    const totalDetik = Math.max(0, Math.floor(ms / 1000));
    const jam = Math.floor(totalDetik / 3600);
    const menit = Math.floor((totalDetik % 3600) / 60);
    const detik = totalDetik % 60;

    return `${jam} jam ${String(menit).padStart(2, "0")} menit ${String(
      detik,
    ).padStart(2, "0")} detik`;
  }

  function perbaruiBatasWaktu() {
    document.querySelectorAll(".kartu-challenge").forEach((kartu) => {
      const id = kartu.dataset.challenge;
      const challenge = dataChallenge[id];
      const siklusJam =
        challenge?.siklusJam || Number(kartu.dataset.siklusJam) || 0;

      if (!siklusJam) return;

      const slot = kartu.querySelector(".batas-waktu");
      const teksEl = kartu.querySelector("[data-batas-waktu-teks]");
      const barEl = kartu.querySelector("[data-batas-waktu-bar]");

      if (!teksEl || !barEl) return;

      const { sisaMs, siklusMs } = hitungSisaWaktu(siklusJam);
      const persen = Math.max(0, Math.min(100, (sisaMs / siklusMs) * 100));

      teksEl.textContent = formatSisaWaktu(sisaMs);
      barEl.style.width = `${persen}%`;
      slot?.classList.toggle("kritis", sisaMs <= 60 * 60 * 1000);
    });
  }

  perbaruiBatasWaktu();
  setInterval(perbaruiBatasWaktu, 1000);

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

    popupIkon.innerHTML = challenge.terkunci
      ? '<img src="./assets/icon/padlock_orange.svg" alt="padlock icon" />'
      : '<img src="./assets/icon/fire_blue.svg" alt="fire icon" />';
    popupKategori.textContent = challenge.kategori;
    popupDurasi.textContent = challenge.durasi;
    popupJudul.textContent = challenge.judul;
    popupDeskripsi.textContent = challenge.deskripsi;
    popupLevel.textContent = challenge.level;
    popupXp.textContent = challenge.xp;
    popupStatus.textContent = challenge.terkunci
      ? "Terkunci"
      : challenge.status;
    popupStatus.classList.toggle("popup-status-terkunci", challenge.terkunci);

    popupJumlahSoal.textContent = `${challenge.kuis.length} Soal Pilihan Ganda`;
    popupEstimasiWaktu.textContent = challenge.durasiDetail;
    popupHadiah.textContent = challenge.xp;
    popupKursusMinimal.textContent =
      challenge.kursusMinimal || "Tidak ada syarat khusus";

    if (challenge.terkunci) {
      tombolMulai.hidden = true;
      infoKunci.hidden = false;

      infoKunciTeks.textContent = `Selesaikan ${challenge.syaratProgress}% dari kursus "${challenge.kursusMinimal}" untuk membuka tantangan ini.`;

      const persen = Math.min(
        100,
        Math.round(
          (challenge.progressSaatIni / challenge.syaratProgress) * 100,
        ),
      );
      infoKunciBar.style.width = `${persen}%`;
      infoKunciPersen.textContent = `${challenge.progressSaatIni}% dari ${challenge.syaratProgress}% tercapai`;
    } else {
      infoKunci.hidden = true;
      tombolMulai.hidden = false;

      tombolMulai.textContent =
        challenge.status === "Selesai" ? "Ulangi Tantangan" : "Mulai Tantangan";
      tombolMulai.dataset.challenge = id;
    }
  }

  function bukaDetail(kartu) {
    const id = kartu.dataset.challenge;
    const challenge = dataChallenge[id];

    if (!id || !challenge || challenge.terkunci) return;

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
    if (event.target.closest(".kartu-alert-kunci a")) return;

    const kartu = event.target.closest(".kartu-challenge");

    if (!kartu || !gridChallenge.contains(kartu)) return;

    bukaDetail(kartu);
  });

  // Dukungan keyboard untuk kartu.
  gridChallenge?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    if (event.target.closest(".kartu-alert-kunci a")) return;

    const kartu = event.target.closest(".kartu-challenge");

    if (!kartu) return;

    event.preventDefault();
    bukaDetail(kartu);
  });

  tombolTutupDetail?.addEventListener("click", tutupDetail);
  lapisanDetail?.addEventListener("click", tutupDetail);

  /* =====================================================
     TOMBOL MULAI
     Membuka kuis pilihan ganda untuk tantangan terpilih.
  ====================================================== */

  tombolMulai?.addEventListener("click", (event) => {
    event.stopPropagation();

    const id = tombolMulai.dataset.challenge;
    if (!id) return;

    tutupDetail();
    window.setTimeout(() => mulaiKuis(id), 260);
  });

  /* =====================================================
     KUIS TANTANGAN (PILIHAN GANDA)
  ====================================================== */

  let kuisChallengeId = null;
  let kuisSoal = [];
  let kuisJawabanTerpilih = [];
  let kuisIndexSoal = 0;
  let kuisWaktuTersisa = 0;
  let kuisWaktuMulai = 0;
  let kuisIntervalTimer = null;

  function formatWaktuKuis(totalDetik) {
    const aman = Math.max(0, totalDetik);
    const menit = Math.floor(aman / 60);
    const detik = aman % 60;

    return `${String(menit).padStart(2, "0")}:${String(detik).padStart(
      2,
      "0",
    )}`;
  }

  function renderNavigasiKuis() {
    kuisNavigasi.replaceChildren();

    kuisSoal.forEach((_, index) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className = "kuis-nomor";
      tombol.textContent = String(index + 1);
      tombol.addEventListener("click", () => tampilkanSoalKuis(index));
      kuisNavigasi.appendChild(tombol);
    });
  }

  function tampilkanSoalKuis(index) {
    kuisIndexSoal = index;
    const soal = kuisSoal[index];

    kuisTeksSoal.textContent = soal.pertanyaan;

    kuisOpsiList.replaceChildren();

    soal.opsi.forEach((opsi, opsiIndex) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className = "kuis-opsi";

      if (kuisJawabanTerpilih[index] === opsiIndex) {
        tombol.classList.add("dipilih");
      }

      const huruf = document.createElement("span");
      huruf.className = "kuis-opsi-huruf";
      huruf.textContent = String.fromCharCode(65 + opsiIndex);

      const teks = document.createElement("span");
      teks.className = "kuis-opsi-teks";
      teks.textContent = opsi;

      tombol.append(huruf, teks);
      tombol.addEventListener("click", () => pilihJawabanKuis(opsiIndex));
      kuisOpsiList.appendChild(tombol);
    });

    Array.from(kuisNavigasi.children).forEach((tombol, i) => {
      tombol.classList.toggle("aktif", i === index);
      tombol.classList.toggle("terjawab", kuisJawabanTerpilih[i] !== null);
    });

    const soalTerakhir = index === kuisSoal.length - 1;

    tombolSoalSebelumnya.disabled = index === 0;
    tombolSoalSelanjutnya.hidden = soalTerakhir;
    tombolSelesaikanKuis.hidden = !soalTerakhir;
  }

  function pilihJawabanKuis(opsiIndex) {
    kuisJawabanTerpilih[kuisIndexSoal] = opsiIndex;
    tampilkanSoalKuis(kuisIndexSoal);
  }

  function updateTimerKuis() {
    kuisTimer.textContent = formatWaktuKuis(kuisWaktuTersisa);
    kuisWaktuWrapper.classList.toggle("waktu-kritis", kuisWaktuTersisa <= 30);
  }

  function mulaiTimerKuis() {
    clearInterval(kuisIntervalTimer);

    kuisIntervalTimer = setInterval(() => {
      kuisWaktuTersisa -= 1;
      updateTimerKuis();

      if (kuisWaktuTersisa <= 0) {
        clearInterval(kuisIntervalTimer);
        selesaikanKuis();
      }
    }, 1000);
  }

  function mulaiKuis(id) {
    const challenge = dataChallenge[id];

    if (!challenge || !challenge.kuis || challenge.terkunci) return;

    kuisChallengeId = id;
    kuisSoal = challenge.kuis;
    kuisJawabanTerpilih = new Array(kuisSoal.length).fill(null);
    kuisIndexSoal = 0;

    const menit = parseInt(challenge.durasiDetail, 10) || 10;
    kuisWaktuTersisa = menit * 60;
    kuisWaktuMulai = kuisWaktuTersisa;

    kuisJudul.textContent = challenge.judul;

    renderNavigasiKuis();
    tampilkanSoalKuis(0);
    updateTimerKuis();
    mulaiTimerKuis();

    lapisanKuis.hidden = false;
    popupKuis.hidden = false;

    lapisanKuis.setAttribute("aria-hidden", "false");
    popupKuis.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      lapisanKuis.classList.add("aktif");
      popupKuis.classList.add("aktif");
    });

    document.body.classList.add("popup-terbuka");
  }

  function tutupKuis() {
    lapisanKuis.classList.remove("aktif");
    popupKuis.classList.remove("aktif");

    lapisanKuis.setAttribute("aria-hidden", "true");
    popupKuis.setAttribute("aria-hidden", "true");

    window.setTimeout(() => {
      lapisanKuis.hidden = true;
      popupKuis.hidden = true;
    }, 250);

    document.body.classList.remove("popup-terbuka");
  }

  function keluarDariKuis() {
    if (popupKuis.hidden) return;

    selesaikanKuis();
  }

  tombolKeluarKuis?.addEventListener("click", keluarDariKuis);

  tombolSoalSebelumnya?.addEventListener("click", () => {
    if (kuisIndexSoal > 0) tampilkanSoalKuis(kuisIndexSoal - 1);
  });

  tombolSoalSelanjutnya?.addEventListener("click", () => {
    if (kuisIndexSoal < kuisSoal.length - 1) {
      tampilkanSoalKuis(kuisIndexSoal + 1);
    }
  });

  tombolSelesaikanKuis?.addEventListener("click", () => {
    selesaikanKuis();
  });

  function selesaikanKuis() {
    clearInterval(kuisIntervalTimer);

    const totalSoal = kuisSoal.length;
    let benar = 0;

    kuisSoal.forEach((soal, index) => {
      if (kuisJawabanTerpilih[index] === soal.jawaban) benar += 1;
    });

    const salah = totalSoal - benar;
    const skor = Math.round((benar / totalSoal) * 100);
    const waktuDipakai = kuisWaktuMulai - kuisWaktuTersisa;

    tutupKuis();

    window.setTimeout(() => {
      tampilkanHasilKuis({ benar, salah, skor, waktuDipakai });
    }, 260);
  }

  /* =====================================================
     HASIL KUIS
  ====================================================== */

  function keteranganSkor(skor) {
    if (skor >= 90) return "Luar biasa! Pemahamanmu sangat kuat.";
    if (skor >= 70) return "Kerja bagus, pemahamanmu sudah cukup solid.";
    if (skor >= 50)
      return "Lumayan, tapi masih ada ruang untuk belajar lebih dalam.";
    return "Coba pelajari kembali materinya sebelum mengulang tantangan ini.";
  }

  function tampilkanHasilKuis({ benar, salah, skor, waktuDipakai }) {
    const challenge = dataChallenge[kuisChallengeId];

    hasilKuisNama.textContent = challenge ? challenge.judul : "Tantangan";
    hasilKuisSkor.textContent = String(skor);
    hasilKuisKeterangan.textContent = keteranganSkor(skor);
    hasilKuisBenar.textContent = String(benar);
    hasilKuisSalah.textContent = String(salah);
    hasilKuisAkurasi.textContent = `${skor}%`;
    hasilKuisWaktu.textContent = formatWaktuKuis(waktuDipakai);
    hasilKuisMasukan.textContent = keteranganSkor(skor);

    if (challenge) {
      challenge.status = "Selesai";
    }

    modalHasilKuis.hidden = false;
    modalHasilKuis.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      modalHasilKuis.classList.add("aktif");
    });

    document.body.classList.add("popup-terbuka");
  }

  function tutupHasilKuis() {
    modalHasilKuis.classList.remove("aktif");
    modalHasilKuis.setAttribute("aria-hidden", "true");

    window.setTimeout(() => {
      modalHasilKuis.hidden = true;
    }, 250);

    document.body.classList.remove("popup-terbuka");
  }

  tombolTutupHasil?.addEventListener("click", tutupHasilKuis);

  modalHasilKuis?.addEventListener("click", (event) => {
    if (event.target === modalHasilKuis) tutupHasilKuis();
  });

  tombolUlangiKuis?.addEventListener("click", () => {
    const id = kuisChallengeId;
    tutupHasilKuis();
    window.setTimeout(() => mulaiKuis(id), 260);
  });

  tombolKembaliTantangan?.addEventListener("click", () => {
    tutupHasilKuis();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (!popupKuis.hidden) {
      keluarDariKuis();
    } else if (!modalHasilKuis.hidden) {
      tutupHasilKuis();
    } else if (!popupDetail.hidden) {
      tutupDetail();
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
