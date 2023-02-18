function salary() {
let chasi = document.getElementById("chasi").value;
let days = document.getElementById("days").value;
let zpZaChas = document.getElementById("zpZaChas").value;

document.getElementById("zp").innerText = (+chasi * days * zpZaChas * 4)
}