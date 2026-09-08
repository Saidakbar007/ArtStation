import React from 'react'
import ReactDOM from 'react-dom/client'
// HashRouter (адреса вида /#/events/...) — GitHub Pages не умеет отдавать
// index.html на произвольный путь, поэтому обычный BrowserRouter ломался бы
// при перезагрузке вложенных страниц.
import { HashRouter } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
)
