import { useState } from "react";

function Exercicio13(){
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");

    const calcular = () => {
        setResultado(Number(valor1) * 60);
        setValor1("");
    }

    return(
        <div>
            <input type="number" placeholder="Insira o valor em metros" value={valor1} onChange={(e)=> setValor1(e.target.value)}/>
            <button onClick={calcular}>Caucular</button>

            <p>O valor em centimetros é: {resultado}</p>
        </div>

    );

}

export default Exercicio13;