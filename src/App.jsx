import React from 'react';
import './App.css';

function App() {
//var primeiro = prompt("Insira seu nome aqui...");
//alert("Bem-vindo " + primeiro);
setTimeout(function(){
    window.location.href = "page.html";
},3000);
  return (
    <main>
    <h3>
    Gerenciador de Bloqueados da Speed Fiber
    </h3>
    </main>
  );
}

export default App;