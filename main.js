import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

document.addEventListener('DOMContentLoaded', ()=>{
  const kepUrl = document.getElementById('kepUrl');
  const betuMeret = document.getElementById('betuMeret');
  const sorkozMeret = document.getElementById('sorkozMeret');
  const betuSzin = document.getElementById('betuSzin');
  const button = document.getElementById('button')
  const szoveg = document.getElementById('szoveg');
  const kep = document.getElementById('kep');

  function update() {
    if (kepUrl.value) {
      kep.src = kepUrl.value;
      szoveg.style.fontSize = `${parseInt(betuMeret.value)}pt`;
      szoveg.style.lineHeight = `${parseInt(sorkozMeret.value)}em`;
      szoveg.style.color = betuSzin.value;
    }
  }

  kepUrl.addEventListener('input',()=>{
    update();
  })

  betuMeret.addEventListener('input',()=>{
    update();
  })

  sorkozMeret.addEventListener('input',()=>{
    update();
  })

  betuSzin.addEventListener('input',()=>{
    update();
  })

  button.addEventListener('click',()=>{
    if (kep.classList.contains("img-right")) {
      kep.classList.remove("img-right")
    } else{
      kep.classList.add("img-right")
    }
  })
})