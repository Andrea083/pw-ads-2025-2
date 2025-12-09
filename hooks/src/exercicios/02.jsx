import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
<<<<<<< HEAD

  const [name, setName] = React.useState(
    //Verifica se existe algo salvo no local storage com a chave chamada "name".
    //caso exista, usa esse valor. Se não existir, usa o valor da initialName

    //Lazy initializer => quando o valor inicial de uma variável de estado é FORNECIDO POR 
    //UMA FUNÇÃO, garantimos que esse valor inicial seja atribuído apenas uma vez na fase 
    //de montagem do componente. Para ativar isso insere uma arrow function na frente da função inicializarVar()
    //() => inicializarVar()
    
    () => window.localStorage.getItem('name') ?? initialName //operador coalescência de nulos
    )

    // function inicializarVar(){
    //   console.count('Inicializou "name"!')
    //   return window.localStorage.getItem('name') ?? initialName //operador coalescência de nulos
    // }

  const [count, setCount] = React.useState(0)  //cria a variável count
=======
  const [name, setName] = React.useState(
    // Verifica se existe algo salvo no local storage com
    // a chave "name". Caso exista, usa esse valor. Se não
    // existir, usa o valor de initialName

    // Lazy initializer => quando o valor inicial de uma variável
    // de estado é FORNECIDO POR UMA FUNÇÃO, garantimos que esse
    // valor inicial seja atribuído apenas uma vez, na fase de 
    // montagem do componente
    () => window.localStorage.getItem('name') ?? initialName
  )

  // function inicializarVar() {
  //   console.count('Inicializou "name"!')
  //   return window.localStorage.getItem('name') ?? initialName
  // }

  const [count, setCount] = React.useState(0)
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
<<<<<<< HEAD

  React.useEffect(()=>{
    window.localStorage.setItem('name', name)
    console.log('Componente foi atualizado')
  }, [name]) // ~>Vetor de dependências
  //Este useEffect será executado apenas quando o valor da variável de estado 'name' for alterado
=======
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.count('Componente foi atualizado!')
  }, [name]) // ~> Vetor de dependências
  // Este useEffect será executado apenas quando o valor da
  // variável de estado "name" for alterado
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
<<<<<<< HEAD
        <label htmlFor="name">Nome: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
      <br /> <button onClick = {() => setCount(count + 1)}>
=======
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
      <br /> <button onClick={() => setCount(count + 1)}>
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
        Contagem: {count}
      </button>
    </div>
  )
}

function Exercicio02() {
<<<<<<< HEAD
  return <Greeting initialName='Orozimbo'/>
=======
  return <Greeting initialName="Orozimbo" />
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
}

export default Exercicio02