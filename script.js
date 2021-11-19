const calcular = document.getElementById('calcular');

function prova () {

  const nome = document.getElementById('nome').value
  const p = document.getElementById('valor').value
  let i = document.getElementById('juros').value
  const n = document.getElementById('parcelas').value
  const resultado = document.getElementById('resultado');

  if(nome !== '' && valor !== '' && juros !== '' && parcelas !== ''){

    iD = ( i / 100 );
    const vf = ( p * ( ( ( 1 + iD ) ** n - 1) / iD ) ).toFixed(2);

    resultado.textContent = `${nome}, se você aplicar R$${p}, à taxa de juros de ${i}% ao mês, durante ${n} meses, acumulará uma poupança de R$${vf}`;

  }else{

    alert('Preencha os Campos Corretamente!')

  }  

}

calcular.addEventListener('click', prova);