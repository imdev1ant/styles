import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { PostPage } from './pages/PostPage';
import { AboutPage } from './pages/AboutPage';
import { ScrollRestoration } from './components/ScrollRestoration';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollRestoration />
        <div className="min-h-screen bg-amber-50/50 dark:bg-amber-950 transition-colors">
          <Sidebar />
          <Header />
          
          <main className="md:ml-64 pt-16 min-h-screen transition-all">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>
            
            <footer className="bg-amber-100 dark:bg-amber-900 mt-16 transition-colors">
              <div className="max-w-4xl mx-auto px-4 py-8 text-center text-amber-900 dark:text-amber-50">
                <p>© 2024 Cozy Corner. All rights reserved.</p>
              </div>
            </footer>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;