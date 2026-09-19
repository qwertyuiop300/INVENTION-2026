const tombolPassword = document.querySelector("#tombolPassword");
const inputPassword = document.querySelector("#password");
const formulirLogin = document.querySelector("#formulirLogin");

tombolPassword?.addEventListener("click", () => {
  const sedangTersembunyi = inputPassword.type === "password";
  inputPassword.type = sedangTersembunyi ? "text" : "password";
  tombolPassword.classList.toggle("aktif", sedangTersembunyi);
  tombolPassword.setAttribute(
    "aria-label",
    sedangTersembunyi ? "Sembunyikan kata sandi" : "Tampilkan kata sandi",
  );
});

formulirLogin?.addEventListener("submit", (event) => {
  event.preventDefault();

  const tombolMasuk = formulirLogin.querySelector(".tombol-masuk");
  const teksTombol = tombolMasuk.querySelector("span");

  teksTombol.textContent = "Memproses...";
  tombolMasuk.disabled = true;

  setTimeout(() => {
    teksTombol.textContent = "Masuk ke Akun";
    tombolMasuk.disabled = false;
  }, 1000);
});
