document.getElementById("button").addEventListener("click", () => {
  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const number = document.getElementById("number").value;
  const subject = document.getElementById("subject").value;
  const massage = document.getElementById("massage").value;

  let a = document.createElement("a");

  a.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
    `Nama : ${nama} \n Number Phone : ${number} \n  Message : ${massage}`
  )}`;
  a.click();

  alert("Email Berhasil Terkirm");
});
