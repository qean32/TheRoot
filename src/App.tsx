import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/style/index.css'
import '@/style/app.scss'
import { Router } from './router'
import { initTheme } from './lib/utils'

initTheme()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router />
    </StrictMode>,
)
