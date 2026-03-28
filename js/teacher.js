// ================= MODE GURU =================
function openTeacher(){
    switchScreen('teacher');
  }

  async function addQuestion(){
    let q = document.getElementById('qText').value;
    let options = [
      opt1.value,
      opt2.value,
      opt3.value,
      opt4.value
    ];
    let answer = parseInt(document.getElementById('correct').value);
  
    if(!q || options.includes("") || isNaN(answer)){
      alert("Isi semua data!");
      return;
    }
  
    await addDoc(collection(db, "questions"), {
      q: q,
      options: options,
      answer: answer
    });
  
    alert("✔ Soal tersimpan ke database online!");
  
    document.querySelectorAll('#teacher input').forEach(i=>i.value="");
  }


  // ================= SOAL DARI FIREBASE =================
  async function loadQuestions(){
    const querySnapshot = await getDocs(collection(db, "questions"));
  
    let firebaseQuestions = [];
  
    querySnapshot.forEach(doc => {
      firebaseQuestions.push(doc.data());
    });
  
    return firebaseQuestions;
  }

  // ================= KEMBALI =================
function showScreen(id){
  document.querySelectorAll(`.screen`).forEach(s => {
    s.classList.remove(`active`);
  });

  const target =
  document.getElementById(id);

  if(target){
    target.classList.add(`active`);
  } else {
    console.log("Screen tidak ditemukan:", id);
  }

  document.getElementById(id).classList.add(`active`);
}

function backMenu(){
  showScreen('menu');
}

// reset kelas //
async function resetClass(){
  const snapshot = await getDocs(
    query(collection(db, "scores"), where("classCode", "==", classCode))
  );

  snapshot.forEach(async (docu) => {
    await deleteDoc(doc(db, "scores", docu.id));
  });

  alert("Leaderboard direset!");
}

window.openTeacher = openTeacher;
window.addQuestion = addQuestion;
window.backMenu = backMenu;
window.namaFunction = namaFunction;

// dashboard guru //
import { db, collection, query, where, onSnapshot } from "./firebase.js";
import { currentUser } from "./auth.js";

function openDashboard(){
  switchScreen('teacherDashboard');

  const list = document.getElementById("classList");

  const q = query(
    collection(db, "classes"),
    where("teacherId", "==", currentUser)
  );

  onSnapshot(q, (snapshot)=>{
    list.innerHTML = "";

    snapshot.forEach(doc=>{
      const d = doc.data();

      list.innerHTML += `
        <li>
          Kode: ${d.code}
          <button onclick="viewClass('${d.code}')">Lihat</button>
        </li>
      `;
    });
  });
}

window.openDashboard = openDashboard;

