document.getElementById("idbutun").value = "click Here";

window.idtextBox.value = "text box in Java file";

document.getElementById("idLink").innerHTML = "Google";

function function1() {
  var name = window.idnam.value;
  document.getElementById("idh").innerHTML = "Hello " + name;
  var password = window.idpassword.value;
  document.getElementById("idh2").innerHTML = "your password is : " + password;
}

function function2(Adres, Age) {
  var d1 = Adres + "  , " + Age;

  window.label2id.innerHTML = d1;
}

function function3(name, textbox) {
  var n = name;
  window.hfh.innerHTML = n;
  textbox.value = "done !";
}

function getelement() {
  return "Hello ali " + 22 + " >>>>>>>>";
}

function bigimag(imag) {
  imag.style.width = 120;
  imag.style.height = 120;
}

function smallimsg(imag) {
  imag.style.width = 70;
  imag.style.height = 70;
}

function opsityevent(hh) {
  hh.style.opacity = 0.2;
}

function opsityevent2(hh) {
  hh.style.opacity = 1;
  hh.style.color = "darkorchid";
}

function eventXY(ev) {
  var x = ev.clientX;
  var y = ev.clientY;

  window.P1.innerHTML = "x : " + x + "  ||  y : " + y;
}

// += دالة الطباعة استخدمت  بيها اولا عبرت متغير ثم داخل الدالة انطيتة امر يطبع القديم والجديد عن طريق عملية
function print(pri) {
  window.pid.innerHTML += pri + "<br>";
}

function codiIF() {
  var nuber1 = window.numid1.value;
  var nuber2 = window.numid2.value;
  print(" the nuber 1 =  " + nuber1);
  print("the nuber 2 =  " + nuber2);

  if (nuber1 > nuber2) {
    print("the nuber 1 >  nuber 2");
  } else if (nuber1 < nuber2) {
    print("the nuber 1 < number 2 ");
  } else {
    print("number 1 =  number 2");
  }
}

function swichi() {
  var number3 = window.txt2id.value;

  window.p2id.innerHTML = number3;
}
