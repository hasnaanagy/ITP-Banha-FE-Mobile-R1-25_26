import { createRoot } from 'react-dom/client'
import MainLayout from './layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

createRoot(document.getElementById('root')).render(
  <MainLayout/>
)
