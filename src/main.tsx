import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@ui/design/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
    </ThemeProvider>
  
  </React.StrictMode>,
)
