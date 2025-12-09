import { useState, useEffect } from 'react'
import fotoAutora from '../../assets/Foto.jpeg'
import Card from '@mui/material/Card'
import Box from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Autora() {
  // Declare uma variável de estado e usando Lazy initializer inicialize-a 
  // com o valor lido de uma entrada do localStorage chamada likes 
  // dessa forma o localStorage é lido apenas 1 vez, na inicialização do componente melhorando a performance dele.
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes')
    return savedLikes ? JSON.parse(savedLikes) : 0
  })
  // sem lazy initializer:
  // const [likes, setLikes] = useState(0) ou
  // const [likes, setLikes] = useState(localStorage.getItem('likes') || 0)
  
  // localStorage.setItem('likes', JSON.stringify(likes)) Salva o valor atual de likes no navegador
  // JSON.stringify() converte número para string (localStorage só aceita strings)
  // [likes] (array de dependências)

  // useEffect só executa quando likes muda, se likes não mudar, não executa
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes))
  }, [likes])
   
  return (
<Card sx={{ 
  maxWidth: 200, 
  backgroundColor: '#2a2a2a', // Fundo escuro como no PDF
  color: 'white' 
}}>
  {/* Título na área escura superior */}
  <Box sx={{ 
    backgroundColor: '#1a1a1a', 
    padding: 1,
    textAlign: 'center'
  }}>
    <Typography variant="h6" sx={{ color: 'white' }}>
      Sobre a autora
    </Typography>
  </Box>

  {/* Foto da pessoa */}
  <CardMedia
    sx={{ height: 250 }}
    image={fotoAutora}
    title="Foto da autora"
  />
    
      <CardContent sx={{ backgroundColor: '#2a2a2a' }}>
        <Typography variant="h7" sx={{ color: 'white'}}>
          Andréa B. Lima
        </Typography>
        <Typography variant="body2" 
          sx={{ color: '#ccc', fontFamily: 'Cardo', // Fonte específica
            fontSize: '12px',                // Tamanho
            fontWeight: 'normal',
            marginTop: '8px'
          }}>
              Estudante...
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          variant="outlined"
          color="secondary"
          onClick={() => setLikes(prev => prev + 1)}>Curtir ({likes})              
        </Button>
      </CardActions>
    </Card>
  )
}



