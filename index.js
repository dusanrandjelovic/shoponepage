function sabiranje(){
  let cena = 0;
  const kolic = Number(document.getElementById("kol1").value);
  const cenat = Number(document.getElementById("cena1").innerText);
  const kolici = Number(document.getElementById("kol2").value);
  const cenata = Number(document.getElementById("cena2").innerText);
  const kolicin = Number(document.getElementById("kol3").value);
  const cenatar = Number(document.getElementById("cena3").innerText);
  const kolicina = Number(document.getElementById("kol4").value);
  const cenatara = Number(document.getElementById("cena4").innerText);

  const kol5Input = Number(document.getElementById("kol5").value);
  const cena5Input = Number(document.getElementById("cena5").innerText);
  const kol6Input  = Number(document.getElementById("kol6").value);
  const cena6Input = Number(document.getElementById("cena6").innerText);
  const kol7Input  = Number(document.getElementById("kol7").value);
  const cena7Input  = Number(document.getElementById("cena7").innerText);
  const kol8Input  = Number(document.getElementById("kol8").value);
  const cena8Input  = Number(document.getElementById("cena8").innerText);

  const dugme = document.getElementById("dugme");
  const prostor = document.getElementById("prostor");

  const naruceno = document.getElementById("naruceno");
  const ukupnacena = document.getElementById("ukupnacena");

  const prostor1n = document.getElementById("ispis1n");
  const prostor2n = document.getElementById("ispis2n");
  const prostor3n = document.getElementById("ispis3n");
  const prostor4n = document.getElementById("ispis4n");
  const prostor5n = document.getElementById("ispis5n");
  const prostor6n = document.getElementById("ispis6n");
  const prostor7n = document.getElementById("ispis7n");
  const prostor8n = document.getElementById("ispis8n");

  cena = (kolic * cenat) + (kolici * cenata) + (kolicin * cenatar) + (kolicina * cenatara) +
   (kol5Input * cena5Input) + (kol6Input * cena6Input) + (kol7Input * cena7Input) + (kol8Input * cena8Input);
  prostor.innerHTML = cena + " RSD";
  ukupnacena.value = "Vaš račun je: " + cena + " RSD";
}

function nar1(){
  const kolic = Number(document.getElementById("kol1").value);
  const cenat = Number(document.getElementById("cena1").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor1n = document.getElementById("ispis1n");
  if(kolic > 0){
    const poruka1 = `Naručeno: Ženske farmerke, komada ${kolic}.<br>`
    prostor1n.innerHTML = poruka1;
    naruceno.value = poruka1;
  }
  else {
      const poruka2 = "";
      prostor1n.innerHTML = poruka2;
      naruceno.value = poruka2;
  }
}


function nar2(){
  const kolici = Number(document.getElementById("kol2").value);
  const cenata = Number(document.getElementById("cena2").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor2n = document.getElementById("ispis2n");
  if(kolici > 0){
    const poruka3 = `Naručeno: Muške farmerke, komada ${kolici}.<br>`
    prostor2n.innerHTML = poruka3;
    naruceno.value = poruka3;
  }
  else {
      const poruka4 = "";
      prostor2n.innerHTML = poruka4;
      naruceno.value = poruka4;
  }
}

function nar3(){
  const kolicin = Number(document.getElementById("kol3").value);
  const cenatar = Number(document.getElementById("cena3").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor3n = document.getElementById("ispis3n");
  if(kolicin > 0){
    const poruka5 = `Naručeno: Sive patike, komada ${kolicin}.<br>`
    prostor3n.innerHTML = poruka5;
    naruceno.value = poruka5;
  }
  else {
    const poruka6 = "";
    prostor3n.innerHTML = poruka6;
    naruceno.value = poruka6;
  }
}

function nar4(){
  const kolicina = Number(document.getElementById("kol4").value);
  const cenatara = Number(document.getElementById("cena4").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor4n = document.getElementById("ispis4n");
  if(kolicina > 0){
    const poruka7 = `Naručeno: Plave patike, komada ${kolicina}.<br>`
    prostor4n.innerHTML = poruka7;
    naruceno.value = poruka7;
  }
  else {
    const poruka8 = "";
    prostor4n.innerHTML = poruka8;
    naruceno.value = poruka8;
  }
}

function nar5(){
  const kol5Input = Number(document.getElementById("kol5").value);
  const cena5Input = Number(document.getElementById("cena5").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor5n = document.getElementById("ispis5n");
  if(kol5Input > 0){
    const poruka9 = `Naručeno: Crna majica, komada ${kol5Input}.<br>`
    prostor5n.innerHTML = poruka9
    naruceno.value = poruka9;
  }
  else {
    const poruka10 = "";
    prostor5n.innerHTML = poruka10;
    naruceno.value = poruka10;
  }
}

function nar6(){
  const kol6Input = Number(document.getElementById("kol6").value);
  const cena6Input = Number(document.getElementById("cena6").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor6n = document.getElementById("ispis6n");
  if(kol6Input > 0){
    const poruka11 = `Naručeno: Narukvica, komada ${kol6Input}.<br>`
    prostor6n.innerHTML = poruka11;
    naruceno.value = poruka11;
  }
  else {
    const poruka12 = "";
    prostor6n.innerHTML = poruka12;
    naruceno.value = poruka12;
  }
}

function nar7(){
  const kol7Input = Number(document.getElementById("kol7").value);
  const cena7Input = Number(document.getElementById("cena7").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor7n = document.getElementById("ispis7n");
  if(kol7Input > 0){
    const poruka13 = `Naručeno: Braon torba, komada ${kol7Input}.<br>`
    prostor7n.innerHTML = poruka13;
    naruceno.value = poruka13;
  }
  else {
    const poruka14 = "";
    prostor7n.innerHTML = poruka14;
    naruceno.value = poruka14;
  }
}

function nar8(){
  const kol8Input = Number(document.getElementById("kol8").value);
  const cena8Input = Number(document.getElementById("cena8").innerText);
  const naruceno = document.getElementById("naruceno");
    const prostor8n = document.getElementById("ispis8n");
  if(kol8Input > 0){
    const poruka15 = `Naručeno: Plave farmerice, komada ${kol8Input}.<br>`
    prostor8n.innerHTML = poruka15;
    naruceno.value = poruka15;
  }
  else {
    const poruka16 = "";
    prostor8n.innerHTML = poruka16;
    naruceno.value = poruka16;
  }
}

function korpa(){
  const kolic = Number(document.getElementById("kol1").value);
  const cenat = Number(document.getElementById("cena1").innerText);
  const kolici = Number(document.getElementById("kol2").value);
  const cenata = Number(document.getElementById("cena2").innerText);
  const kolicin = Number(document.getElementById("kol3").value);
  const cenatar = Number(document.getElementById("cena3").innerText);
  const kolicina = Number(document.getElementById("kol4").value);
  const cenatara = Number(document.getElementById("cena4").innerText);

  const kol5Input = Number(document.getElementById("kol5").value);
  const cena5Input = Number(document.getElementById("cena5").innerText);
  const kol6Input  = Number(document.getElementById("kol6").value);
  const cena6Input = Number(document.getElementById("cena6").innerText);
  const kol7Input  = Number(document.getElementById("kol7").value);
  const cena7Input  = Number(document.getElementById("cena7").innerText);
  const kol8Input  = Number(document.getElementById("kol8").value);
  const cena8Input  = Number(document.getElementById("cena8").innerText);

  const proizvodi = document.getElementById("proizvodi");
  proizvodi.innerHTML = kolic + kolici + kolicin + kolicina + kol5Input + kol6Input +
   kol7Input + kol8Input;
}
//dugme.addEventListener("click", sabiranje);  na dugme racun, ovde dole mora sam id, a ne naziv konstante za input

kol1.addEventListener("input", sabiranje)
kol2.addEventListener("input", sabiranje)
kol3.addEventListener("input", sabiranje)
kol4.addEventListener("input", sabiranje)
kol5.addEventListener("input", sabiranje)
kol6.addEventListener("input", sabiranje)
kol7.addEventListener("input", sabiranje)
kol8.addEventListener("input", sabiranje)

kol1.addEventListener("input", nar1)
kol2.addEventListener("input", nar2)
kol3.addEventListener("input", nar3)
kol4.addEventListener("input", nar4)
kol5.addEventListener("input", nar5)
kol6.addEventListener("input", nar6)
kol7.addEventListener("input", nar7)
kol8.addEventListener("input", nar8)

kol1.addEventListener("input", korpa)
kol2.addEventListener("input", korpa)
kol3.addEventListener("input", korpa)
kol4.addEventListener("input", korpa)
kol5.addEventListener("input", korpa)
kol6.addEventListener("input", korpa)
kol7.addEventListener("input", korpa)
kol8.addEventListener("input", korpa)

sabiranje()
korpa()
nar1()
nar2()
nar3()
nar4()
nar5()
nar6()
nar7()
nar8()


/*const ispisivanjeUkupno = document.getElementById("iznos");
const naruceno = document.getElementById("naruceno");
const ukupnacena = document.getElementById("ukupnacena");

ispisivanjeUkupno.innerText = localStorage.nesto;
ukupnacena.value = localStorage.nesto;

const prostor1n = document.getElementById("ispis1n");
const prostor2n = document.getElementById("ispis2n");
const prostor3n = document.getElementById("ispis3n");
const prostor4n = document.getElementById("ispis4n");
const prostor5n = document.getElementById("ispis5n");
const prostor6n = document.getElementById("ispis6n");
const prostor7n = document.getElementById("ispis7n");
const prostor8n = document.getElementById("ispis8n");

prostor1n.innerHTML = localStorage.novo;
prostor2n.innerHTML = localStorage.drugo;
prostor3n.innerHTML = localStorage.trece;
prostor4n.innerHTML = localStorage.cetvrto;
prostor5n.innerHTML = localStorage.peto;
prostor6n.innerHTML = localStorage.sesto;
prostor7n.innerHTML = localStorage.sedmo;
prostor8n.innerHTML = localStorage.osmo;
naruceno.value = localStorage.novo + localStorage.drugo + localStorage.trece + localStorage.cetvrto + localStorage.peto + localStorage.sesto + localStorage.sedmo + localStorage.osmo;
*/
