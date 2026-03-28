// ================= IMPORT =================
import { 
    db, 
    collection, 
    addDoc, 
    query, 
    where, 
    onSnapshot 
  } from "./firebase.js";
  
  // ================= STATE =================
  let classCode = "";
  
  // ================= OPEN MODE =================
  function openClassMode(){
    switchScreen('classMode');
  }
  
  // ================= GENERATE CODE =================
  function generateCode(){
    return Math.random().toString(36).substring(2,7).toUpperCase();
  }
  
  // ================= BUAT KELAS =================
  async function createClass(){
    classCode = generateCode();
  
    await addDoc(collection(db, "classes"), {
      code: classCode,
      createdAt: Date.now()
    });
  
    document.getElementById("classInfo").innerText =
      "Kode kelas: " + classCode;
  }
  
  // ================= JOIN KELAS =================
  function joinClass(){
    const code = document.getElementById("joinCode").value;
  
    if(!code){
      alert("Masukkan kode!");
      return;
    }
  
    classCode = code.toUpperCase();
  
    document.getElementById("classInfo").innerText =
      "Gabung ke kelas: " + classCode;
  }
  
  // ================= EXPORT GLOBAL =================
  window.openClassMode = openClassMode;
  window.createClass = createClass;
  window.joinClass = joinClass;