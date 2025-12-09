import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
<<<<<<< HEAD
 
import CoffeeIcon from '@mui/icons-material/Coffee'; 
export default function FooterBar() {
 return <>
   <Box
     component="footer"
     sx={{
       backgroundColor: 'action.disabledBackground',
       display: 'flex',
       justifyContent: 'center',
       position: 'fixed',  // posição fixa
       bottom: 0,          // na parte de baixo da página
       width: '100vw'
     }}
   >
     <Typography variant="caption"
     sx={{       //& representa o componente pai(Typography)
      '& a': {  // Altera a cor do link (a) dentro do Typography (&)
        color: 'secondary.light' //cor definida no arquivo karangos/src/ui/theme.jsx na sua tonalidade principal(main) mais clara.
      }
    }}
    >
        Desenvolvido e mantido com <CoffeeIcon /> por <a href="mailto:andreab-lima@hotmail.com">Andréa Lima</a>    
     </Typography>
   </Box>
 </>
}

=======
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function FooterBar() {
  return <>
    <Box
      component="footer"
      sx={{
        backgroundColor: 'action.disabledBackground',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',  // posição fixa
        bottom: 0,          // na parte de baixo da página
        width: '100vw'
      }}
    >
      <Typography 
        variant="caption"
        sx={{
          '& a': {  // Altera a cor do link (a) dentro do Typography (&)
            color: 'secondary.light'
          }
        }}
      >
        Desenvolvido e mantido com <CoffeeIcon fontSize="small" /> por <a href="mailto:professor@faustocintra.com.br">Prof. Fausto Cintra</a>
      </Typography>
    </Box>
  </>
}
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
