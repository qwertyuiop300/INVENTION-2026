/* =====================================================
   TOGGLE PASSWORD
===================================================== */

const tombolPassword = document.querySelector("#tombolPassword");
const inputPassword = document.querySelector("#password");

if (tombolPassword && inputPassword) {
  tombolPassword.addEventListener("click", () => {
    const sedangTersembunyi = inputPassword.type === "password";

    inputPassword.type = sedangTersembunyi ? "text" : "password";

    tombolPassword.classList.toggle("aktif", sedangTersembunyi);

    tombolPassword.setAttribute(
      "aria-label",
      sedangTersembunyi ? "Sembunyikan kata sandi" : "Tampilkan kata sandi",
    );
  });
}

/* =====================================================
   FORM LOGIN
===================================================== */

const formulirLogin = document.querySelector("#formulirLogin");

if (formulirLogin) {
  formulirLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const tombolMasuk = formulirLogin.querySelector(".tombol-masuk");
    const teksTombol = tombolMasuk.querySelector("span");

    teksTombol.textContent = "Memproses...";

    tombolMasuk.disabled = true;
    tombolMasuk.style.opacity = "0.75";

    /*
      Hubungkan dengan backend / sistem login kamu di sini.

      Contoh:
      window.location.href = "dashboard.html";
    */

    setTimeout(() => {
      teksTombol.textContent = "Masuk ke Akun";
      tombolMasuk.disabled = false;
      tombolMasuk.style.opacity = "1";
    }, 1000);
  });
}
