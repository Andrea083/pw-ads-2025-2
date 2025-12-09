import * as React from 'react'

function Greeting({initialName}) {
  // 💣 exclua esta declaração de variável e troque por uma chamada a React.useState
<<<<<<< HEAD
  const [name, setName] = React.useState('')
=======
  //const name = ''
  const [name, setName] = React.useState(initialName)  // Valor inicial
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546

  function handleChange(event) {
    // 🐨 atualize o nome aqui baseado em event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
<<<<<<< HEAD
        {/*
          Em React, um componente controlado é aquele que tem seu valor 
          sincronizado com uma variável de estado.
          Assim, quando a variável de estado muda seu valor, o valor do componente
          muda, o valor da variável de estado também é alterado. No caso abaixo,
          isso é implementado associando o valor do atributo value à variável de estado.*/}
        <input onChange = {handleChange} id="name" value={name}/>
=======
        {/* 
          Em React, um COMPONENTE CONTROLADO é aquele que tem seu
          valor sincronizado com uma variável de estado. Assim, quando
          a variável de estado muda seu valor, o valor do componente
          também muda. O inverso também ocorre: se o valor do componente
          muda, o valor da variável de estado também é alterado
          No caso abaixo, isso é implementado associando o valor do
          atributo "value" à variável de estado.
        */}
        <input onChange={handleChange} id="name" value={name} />
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio01() {
  return Greeting({initialName: "Turíbio"})
}

export default Exercicio01