import React from "react"
import JokeCard from "./JokeCard";


function App() {
 
  return (
    <div className="jokes" style={{color: "purple", fontSize: 20}}>
      <JokeCard 
        question ="O que o pato disse para a pata? "
        punchLine= "R.: Vem Quá!"
      />

      <JokeCard 
         question= "Por que o menino estava falando ao telefone deitado?"
         punchLine= "R.: Para não cair a ligação."
      />

      <JokeCard
         question= "A enfermeira diz ao médico: Tem um homem invisível na sala de espera."
         punchLine= "O médico responde: Diga a ele que não posso vê-lo agora."
      />

      <JokeCard 
         question= "Qual é a fórmula da água benta?"
         punchLine= "R.: H Deus O!"
        />

      <JokeCard 
         question= "R.: H Deus O!"
         punchLine= "R.: Uberlândia."
      />
  </div>
  );
}

export default App;