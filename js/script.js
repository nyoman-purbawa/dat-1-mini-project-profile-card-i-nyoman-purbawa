document.getElementById("button").addEventListener("click", () => {
  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const number = document.getElementById("number").value;
  const subject = document.getElementById("subject").value;
  const massage = document.getElementById("massage").value;

  if (nama == "") {
    alert("Nama Tidak Boleh Kosong");
  } else if (email == "") {
    alert("Email Tidak Boleh Kosong");
  } else if (number == "") {
    alert("Number Tidak Boleh Kosong");
  } else if (subject == "") {
    alert("Subject Tidak Boleh Kosong");
  } else if (massage == "") {
    alert("Massage Tidak Boleh Kosong");
  }

  let a = document.createElement("a");

  a.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
    `Nama : ${nama} \n Number Phone : ${number} \n  Message : ${massage}`
  )}`;
  a.click();

  alert("Email Berhasil Terkirm");
});
