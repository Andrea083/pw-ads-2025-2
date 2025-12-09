{/*
    Avaliação 2
    Não fiz a prova completa e o commit dela não funcionou. 
    Esse arquivo foi copiado para estudos e não corresponde
    à minha prova. 
    Instruções enviadas para a aprova salvo na pasta pw-ads-2025-2
*/}

import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'

import Foto from '../../assets/Foto.png'

// Exibe informações sobre o autor e um botão de "curtir" com persistência de estado
export default function Autor() {
    // Inicializa o estado 'likes'. A função é passada para ler o valor inicial do localStorage
    const [totalLikes, setTotalLikes] = useState(() => {
        const valorSalvo = localStorage.getItem('likes_contador')
        return valorSalvo ? Number(valorSalvo) : 0
    })

    // Esse useEffect serve para atualizar o localStorage toda vez que a variável 'totalLikes' mudar
    useEffect(() => {
        localStorage.setItem('likes_contador', totalLikes)
    }, [totalLikes])

    // Função para somar 1 like quando clicado
    const handleLike = () => {
        setTotalLikes(prev => prev + 1)
    }

    return (
        // Usei flex-start para alinhar tudo à esquerda
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px' }}>
            <Typography variant="h1" gutterBottom>
                Sobre a autora
            </Typography>

        {/* Configurações do cartão */}
        <Card sx={{ maxWidth: 250 }}> 
            <CardMedia
            sx={{ height: 200 }} 
            image={Foto}
            title="nome"
            />
        
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                Meu nome
            </Typography>
          
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Estudante de Análise e Desenvolvimento de Sistemas com formação prevista para 12/26.
            </Typography>
            </CardContent>

        <CardActions>
          <Button 
            size="small" 
            startIcon={<FavoriteIcon />} 
            onClick={handleLike} // Chama a função que incrementa o contador
            sx={{
                backgroundColor: '#d81b60', // Define a cor do fundo
                color: 'white' // Define a cor do texto
            }} 
          >
            Curtir ({totalLikes})
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}