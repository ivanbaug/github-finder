import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import Alert from './components/layout/Alert'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
