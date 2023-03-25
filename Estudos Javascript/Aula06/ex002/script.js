window.confirm('Vamos somar?')
var n1 = Number(window.prompt('Digite um número')) //pode-se usar Number.ParseInt para números inteiros ou Number.ParseFloat para números flutuantes ou apenas Number ele ja detecta automaticamente.
var n2 = Number(window.prompt('Digite outro número'))//caso queira converter de número para String é só usar String(n2) ou a variavél exemplo: n2.toString()
var total = n1+n2
window.alert(`a soma entre ${n1} + ${n2} é igual à ${total}`)
