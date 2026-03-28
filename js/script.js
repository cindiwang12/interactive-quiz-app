let user = "";

// ================= LOGIN =================
function login(){
  user = document.getElementById('username').value;
  if(!user) return alert("Isi nama dulu!");

  document.getElementById('userDisplay').innerText = user;
  switchScreen('menu');
}

// ================= NAVIGATION =================
function switchScreen(id){
  document.querySelectorAll('.screen').forEach(s=>{
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// ACAK SOAL & JAWABAN//
function shuffleArray(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleQuestion(q){
  let options = q.options.map((opt, i) => ({
    text: opt,
    correct: i === q.answer
  }));

  shuffleArray(options);

  return {
    ...q,
    options: options.map(o => o.text),
    answer: options.findIndex(o => o.correct)
  };
}

// ================= DATA SOAL =================
const bank = [
  // ================= SISTEM KOMPUTER =================
  [
    {q:"CPU adalah?",options:["Otak komputer","Keyboard","Mouse"],answer:0},
    {q:"RAM berfungsi?",options:["Memori sementara","Internet","Monitor"],answer:0},
    {q:"ROM adalah?",options:["Memori permanen","Input","Output"],answer:0},
    {q:"Harddisk berfungsi?",options:["Penyimpanan data","Mengetik","Menampilkan"],answer:0},
    {q:"Monitor termasuk?",options:["Output","Input","Proses"],answer:0},
    {q:"Keyboard termasuk?",options:["Input","Output","Storage"],answer:0},
    {q:"Mouse digunakan untuk?",options:["Menggerakkan kursor","Mengetik","Menyimpan"],answer:0},
    {q:"Printer termasuk?",options:["Output","Input","CPU"],answer:0},
    {q:"Software adalah?",options:["Program","Hardware","Jaringan"],answer:0},
    {q:"Sistem operasi contoh?",options:["Windows","CPU","Mouse"],answer:0},
    {q:"Perangkat ini disebut?",img:"img/keyboard.png",options:["Keyboard","Monitor","Printer","CPU"],answer:0},
    {q:"Gambar ini termasuk perangkat apa?",img:"img/monitor.png",options:["Output","Input","Proses","Storage"],answer:0},
    {q:"Perangkat pada gambar adalah?",img:"img/mouse.png",options:["Mouse","Keyboard","Printer","Scanner"],answer:0},
    {q:"Komponen ini berfungsi sebagai otak komputer",img:"img/cpu.png",options:["CPU","RAM","ROM","GPU"],answer:0},
    {q:"Perangkat penyimpanan ini adalah",img:"img/hard disk.png",options:["Harddisk","RAM","CPU","Monitor"],answer:0},
  ],

  // ================= JARINGAN =================
  [
    {q:"Internet adalah?",options:["Jaringan global","Game","App"],answer:0},
    {q:"LAN adalah?",options:["Jaringan lokal","Global","Server"],answer:0},
    {q:"WAN adalah?",options:["Jaringan luas","Lokal","CPU"],answer:0},
    {q:"Router berfungsi?",options:["Menghubungkan jaringan","Mengetik","Menyimpan"],answer:0},
    {q:"IP Address adalah?",options:["Alamat jaringan","Nama file","Program"],answer:0},
    {q:"Modem digunakan untuk?",options:["Menghubungkan internet","Mengetik","Menggambar"],answer:0},
    {q:"Switch adalah?",options:["Penghubung jaringan","CPU","RAM"],answer:0},
    {q:"Topologi jaringan adalah?",options:["Bentuk jaringan","Program","File"],answer:0},
    {q:"WiFi adalah?",options:["Jaringan nirkabel","Kabel","CPU"],answer:0},
    {q:"Server adalah?",options:["Penyedia layanan","Client","Mouse"],answer:0},
    {q:"Perangkat ini adalah?",img:"img/router.png",options:["Router","Switch","CPU","Monitor"],answer:0},
    {q:"Jaringan tanpa kabel disebut?",img:"img/wifi.png",options:["WiFi","LAN","WAN","MAN"],answer:0},
  ],

  // ================= KEAMANAN DIGITAL=================
  [
    {q:"Password kuat adalah?",options:["Kombinasi kompleks","123","Nama"],answer:0},
    {q:"Phishing adalah?",options:["Penipuan online","Game","Coding"],answer:0},
    {q:"Antivirus berfungsi?",options:["Melindungi sistem","Mengetik","Internet"],answer:0},
    {q:"Firewall adalah?",options:["Pengaman jaringan","CPU","RAM"],answer:0},
    {q:"Backup data berarti?",options:["Cadangan data","Hapus","Edit"],answer:0},
    {q:"Malware adalah?",options:["Program berbahaya","Game","Aplikasi"],answer:0},
    {q:"Spam adalah?",options:["Pesan tidak diinginkan","Game","Coding"],answer:0},
    {q:"Enkripsi adalah?",options:["Pengamanan data","Menghapus data","Menyalin"],answer:0},
    {q:"2FA adalah?",options:["Keamanan tambahan","Game","CPU"],answer:0},
    {q:"Etika digital adalah?",options:["Perilaku di dunia digital","Hardware","Software"],answer:0},
    {q:"Ini contoh apa?",img:"img/phishing.png",options:["Phishing","Game","Software","CPU"],answer:0},
    {q:"Gambar ini menunjukkan virus",img:"img/malware.png",options:["Malware","WiFi","Router","LAN"],answer:0},
  ],

  // ================= BERPIKIR KOMPUTASIONAL =================
  [
    {q:"Algoritma adalah?",options:["Langkah logis","Game","Gambar"],answer:0},
    {q:"Dekomposisi adalah?",options:["Memecah masalah","Menggabung","Menghapus"],answer:0},
    {q:"Pola adalah?",options:["Kesamaan","Random","Error"],answer:0},
    {q:"Abstraksi adalah?",options:["Menyederhanakan","Menambah","Menghapus"],answer:0},
    {q:"Debugging adalah?",options:["Memperbaiki error","Main","Install"],answer:0},
    {q:"Flowchart adalah?",options:["Diagram alur","Game","File"],answer:0},
    {q:"Logika digunakan untuk?",options:["Pemecahan masalah","Game","Design"],answer:0},
    {q:"Input adalah?",options:["Data masuk","Data keluar","Proses"],answer:0},
    {q:"Output adalah?",options:["Hasil","Masukan","Error"],answer:0},
    {q:"Proses adalah?",options:["Pengolahan data","Input","Output"],answer:0},
    {q:"Diagram ini disebut?",img:"img/flowchart.png",options:["Flowchart","Grafik","Tabel","Diagram batang"],answer:0},
    {q:"Gambar ini menunjukkan proses apa?",img:"img/algoritma flowchart.png",options:["Algoritma","Game","Jaringan","CPU"],answer:0},
  ]
];

// ================= STATE =================
let questions = [];
let currentQ = 0;
let score = 0;
let time = 0;
let timer;

// ================= START GAME =================
async function startLevel(lvl){
  try {
    let snapshot = await getDocs(collection(db, "questions"));

    questions = snapshot.docs.map(doc => doc.data());

    if(questions.length === 0){
      throw new Error("Kosong");
    }

  } catch (error) {
    if(location.hostname === "localhost"){
      console.warn("Mode offline aktif");
    }
  
    questions = shuffleArray([...bank[lvl]])
      .map(q => shuffleQuestion(q));
  }

  currentQ = 0;
  score = 0;
  time = 0;

  switchScreen('game');
  startTimer();
  showQuestion();
}

console.log(questions);

// ================= TIMER =================
let countdown = 25; // waktu per soal

function startTimer(){
  clearInterval(timer);
  countdown = 25;

  timer = setInterval(()=>{
    countdown--;
    document.getElementById('timer').innerText = `⏱ ${countdown}s`;

    if(countdown <= 0){
      clearInterval(timer);
      answer(-1); // auto salah
    }
  },1000);
}

// ================= SHOW QUESTION =================
function showQuestion(){
    startTimer();
  let q = questions[currentQ];
  document.getElementById('question').innerText = q.q;

  let img = document.getElementById('question-img');
  if(q.img){
    img.src = q.img;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }

  let html = "";
  q.options.forEach((opt,i)=>{
    html += `<div class='option' onclick='answer(${i})'>${opt}</div>`;
  });

  document.getElementById('options').innerHTML = html;
  updateProgress(currentQ, questions.length);
}

// ================= ANSWER + ANIMATION =================
function answer(i){
  let correct = questions[currentQ].answer;
  let options = document.querySelectorAll('.option');

  if(i === correct){
    score++;
    soundCorrect.play().catch(() => {});
    options[i].style.background = '#22c55e';
  } else {
    soundWrong.play().catch(() => {});
    options[i].style.background = '#ef4444';
    options[correct].style.background = '#22c55e';
  }

  setTimeout(()=>{
    currentQ++;
    if(currentQ < questions.length){
      showQuestion();
    } else {
      endGame();
    }
  },800);
}

// ================= END GAME =================
function endGame(){
    clearInterval(timer);
    switchScreen('result');
  
    let total = questions.length;
    let persen = Math.round((score / total) * 100);
  
    document.getElementById('score').innerText =
      `${user} - Skor: ${score}`;
  
    document.getElementById('detail').innerText =
      `Benar: ${score} dari ${total} soal (${persen}%) | Waktu: ${time}s`;
  
    if(score === total){
      soundWin.play().catch(() => {});
      confetti();
    }
  }

// ================= SAVE =================
function saveScore(){
    let data = JSON.parse(localStorage.getItem("scores") || "[]");
  
    data.push({
      name: user,
      score: score,
      time: time
    });
  
    localStorage.setItem("scores", JSON.stringify(data));
  
    alert("✔ Skor berhasil disimpan!");
  }

// ================= LEADERBOARD =================
function showLeaderboard(){
    switchScreen('leaderboard');
  
    let data = JSON.parse(localStorage.getItem("scores") || "[]");
    data.sort((a,b)=>b.score-a.score);
  
    let list = "";
    data.forEach((d,i)=>{
      let medal = i===0 ? "🥇" : i===1 ? "🥈" : i===2 ? "🥉" : "";
      list += `<li>${medal} ${d.name} - ${d.score}</li>`;
    });
  
    document.getElementById('list').innerHTML = list;
  }

// ================= EXPORT =================
function exportCSV(){
    let data = JSON.parse(localStorage.getItem("scores") || "[]");
  
    let csv = "Nama,Skor,Waktu\n";
  
    data.forEach(d=>{
      csv += `${d.name},${d.score},${d.time}s\n`;
    });
  
    let blob = new Blob([csv]);
    let a = document.createElement('a');
  
    a.href = URL.createObjectURL(blob);
    a.download = "nilai_siswa.csv";
    a.click();
  }

// ================= BACK =================
function backMenu(){
  switchScreen('menu');
}

// ================= SOUND =================
const soundCorrect = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
const soundWrong = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-buzz-950.mp3');
const soundWin = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');

// ================= CONFETTI =================
function confetti(){
  for(let i=0;i<50;i++){
    let el = document.createElement('div');
    el.style.position='fixed';
    el.style.width='8px';
    el.style.height='8px';
    el.style.background=`hsl(${Math.random()*360},100%,50%)`;
    el.style.top='-10px';
    el.style.left=Math.random()*100+'%';

    document.body.appendChild(el);

    let fall = el.animate([
      {transform:'translateY(0px)'},
      {transform:`translateY(${window.innerHeight}px)`}
    ],{
      duration:1500,
      easing:'ease-out'
    });

    fall.onfinish=()=>el.remove();
  }
}

// ================= PROGRESS =================
function updateProgress(current,total){
  let percent = (current/total)*100;
  document.getElementById('progress-fill').style.width = percent+"%";
}

function goTeacher(){
  switchScreen(`teacher`);
}

//  LIGHT/DARK MODE 
function toggleTheme(){
  document.body.classList.toggle("light");

  // simpan ke localStorage
  if(document.body.classList.contains("light")){
    localStorage.setItem("theme","light");
  } else {
    localStorage.setItem("theme","dark");
  }
}

// LOAD SAAT AWAL
function loadTheme(){
  const theme = localStorage.getItem("theme");

  if(theme === "light"){
    document.body.classList.add("light");
  }
}

// 🔥 WAJIB (BIAR BISA DIKLIK HTML)
window.toggleTheme = toggleTheme;
window.loadTheme = loadTheme;


function startApp(){
  switchScreen('menu');
}



// WAJIB agar bisa dipanggil dari HTML
window.startApp = startApp;
window.switchScreen = switchScreen;
window.login = login;
window.startLevel = startLevel;
window.answer = answer;
window.showLeaderboard = showLeaderboard;
window.backMenu = backMenu;

window.goTeacher = goTeacher;
window.showLeaderboard = showLeaderboard;
window.startLevel = startLevel;
window.answer = answer;

