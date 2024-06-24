feather.replace();

const bukaMenu = document.querySelector('.navbar');

document.querySelector('#humberger').
onclick = () => {
    bukaMenu.classList.toggle('aktif');
}

document.querySelector('#navbar_close').
onclick = () => {
    bukaMenu.classList.remove('aktif');
}

const navbarclose = document.querySelector('#navbar_close');

document.addEventListener('click', function (e) {
    if(!bukaMenu.contains(e.target)){
        bukaMenu.classList.remove('aktif');
    }
})

// bagian paragraft di section 2

const textNya = document.querySelector('#text_paragraf')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

const listTextnya = [
    
    "Adalah server minecraft yang menggunkanAdalah server minecraft yang menggunakan software bedrock edition dan menggunakan hosting server yang cepat. Dan kami menggunakan hosting server premium. Gerilya di bangun pada bulan juni 2023 dan sampai saat ini masih aktif, ayo gabung dan temukan teman!", 
    "Fitur : \n Kami memberi mod rank untuk para player dan player bisa menggunakannya, kami memberi mod addon seperti senjata legendary, kami menyediakan minigame juga yang di antaranya kita bangung dengan comand block yang kompleks, ada parkour, race boat, pvp, dan block drop.", 
    "Dan itulah semua tentang gerilya server, terima kasih -"

];

let keBerapa = 0;

function lihat(index) {
    textNya.textContent = listTextnya[index];
}

lihat(keBerapa);

nextBtn.addEventListener('click', 
    function() {
    keBerapa = (keBerapa + 1) % listTextnya.length;
    lihat(keBerapa);
});

prevBtn.addEventListener('click', 
    function() {
    keBerapa = (keBerapa - 1 + listTextnya.length) % listTextnya.length;
    lihat(keBerapa);
});

// untuk status online server

const TextStatus = document.querySelector('.online');

async function ambilStatServer(serverIP, serverPORT) {
    const url = `https://api.mcsrvstat.us/bedrock/2/${serverIP}:${serverPORT}`;
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

const serverIP = 'Resnopal.aternos.me';
const serverPORT = 33975;
ambilStatServer(serverIP, serverPORT)
    .then(data => {
        if (data.online) {
            TextStatus.textContent = `${data.players.online}/${data.players.max} Online`; 
        }
        else {
            TextStatus.textContent = 'Offline';
        }
    })