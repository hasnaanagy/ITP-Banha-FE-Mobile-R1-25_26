import { createRoot } from 'react-dom/client'
import './styles/globalStyle.css'
import MainLayout from './mainlayout/MainLayout'

createRoot(document.getElementById('root')).render(
  <MainLayout/>
)
