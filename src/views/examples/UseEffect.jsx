import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

/**
 * @param {num} Number Retorna o numero fatorial do argumento
 */
function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

/**
 * @param {x} Number Retorna se Par, Impar ou indefinido no caso do zero
 */
function parImpar(num) {
  const n = parseInt(Math.abs(num));
  if (n === 0) return 'Indefinido'
  if (n % 2 === 1) return 'Ímpar';
  if (n % 2 === 0) return 'Par';
}

function UseEffect(props) {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState("impar");

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      setStatus(parImpar(number));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
      <SectionTitle title="useEffect exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? "Não existe!!!" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)} />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status:</span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
}

export default UseEffect;
