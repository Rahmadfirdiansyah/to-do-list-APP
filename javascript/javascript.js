//mengambil elemen html
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//membuat fungsi tambah list
function tambahList() {
  if (inputBox.value === "") {
    alert("Diisi dulu");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

//fungsi menampilkan css sesudah di checked
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);

//fungsi simpan data
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

//fungsi menampilakan data list
function tampilkanList(){
  listContainer.innerHTML = localStorage.getItem("data");
}

tampilkanList();