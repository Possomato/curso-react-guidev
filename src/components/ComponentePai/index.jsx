import { PrimeiroComponente } from '../PrimeiroComponente'

export function ComponentePai(){
  const nomeDaEtiqueta = 'Escreva seu nome: '

  return(
    <PrimeiroComponente
    titleLabel={nomeDaEtiqueta}
    />
  )
}