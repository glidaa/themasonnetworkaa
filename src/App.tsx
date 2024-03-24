
import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router";
import Header from "@components/Header";
import NewsContext from "@contexts/NewsContext";
import HomeRoute from "@routes/HomeRoute";
import NewsArticleRoute from "@routes/NewsArticleRoute";
import AdminRoute from "./routes/AdminRoute";
import LegalRoute from '@routes/LegalRoute'
import './App.sass'
import rawNews from '@/news.json'
import Footer from "@components/Footer";

const App = () => {
  const news = rawNews.filter(article => article.language == 'en').map((article) => {
    return {
      ...article,
      jokes: ['joke1', 'joke2', 'joke3'],
      category: ''
    }
  })

  const [contentPadding, setContentPadding] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setContentPadding(headerRef.current?.getBoundingClientRect().height || 0)
  }, [headerRef])

  return (
    <NewsContext.Provider value={news}>
      <div className="min-h-[100vh] flex flex-col">
        <Header ref={headerRef} />
        <div className="grow" style={{
          paddingTop: `${contentPadding + 32}px`
        }}>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/news-article/:articleId" element={<NewsArticleRoute />} />
            <Route path="/admin" element={<AdminRoute />} />
            <Route path="/legal/:topic" element={<LegalRoute />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </NewsContext.Provider>
  )
}

export default App
