import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import '../panel_assets/vendor/js/helpers.js'
// import '../panel_assets/vendor/js/template-customizer.js'
// import '../panel_assets/js/config.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
