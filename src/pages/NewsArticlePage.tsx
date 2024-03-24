import { useContext, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import NewsContext from '@/contexts/NewsContext';
import ArticleDetails from "@/components/ArticleDetails";
import { NewsArticle } from "@/types";
import ReadMoreSection from "@/components/ReadMoreSection";
import ShareRow from '@/components/ShareRow';
import { Helmet } from 'react-helmet';

const NewsArticlePage = () => {
    const { articleId } = useParams();
    const newsArticles = useContext(NewsContext);
    const [article, setArticle] = useState<NewsArticle>(newsArticles.find((article) => article.id.toString() === articleId) || {} as NewsArticle);
    const [articleRefHeight, setArticleRefHeight] = useState<number>(0);

    useEffect(() => {
        setArticle(newsArticles.find((article) => article.id.toString() === articleId) || {} as NewsArticle);
    }, [articleId, newsArticles]);

    const articleRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setArticleRefHeight(articleRef.current?.clientHeight || 0);
    }, [articleRef]);

    return (
        <div className='relative'>
            <Helmet>
                <title>TMN | {article?.title || ''}</title>
                <meta property="og:title" content={`The Mason Network | ${article?.title}`} />
                <meta property="og:image" content={article?.image} />
                <meta property="og:description" content={article?.text} />
                <meta property="og:url" content={`https://themasonnetwork.com/news-article/${article?.id}`} />
            </Helmet>
            <div className='absolute top-[-32px] left-0 right-0 h-[55vh] -z-10'>
                <div className='absolute inset-0 opacity-80' style={{
                    backgroundImage: `url(${article?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%',
                    filter: "blur(100px)"
                }} />
            </div>
            <div className='container flex gap-6' ref={articleRef}>
                <section className='grow container flex flex-col gap-5 px-6'>
                    <div className="flex flex-col gap-3">
                        <h1 className='text-4xl font-bold'>{article?.title}</h1>
                        <ArticleDetails article={article} />
                    </div>
                    <hr />
                    <ShareRow />
                    <hr />
                    <img className="w-[80%] aspect-video object-cover" src={article?.image} alt={article?.title} />


                    <p className="text-lg text-justify">{article?.text}</p>
                </section >

                <aside className='basis-[25%] bg-white rounded-lg border border-gray-300 self-stretch flex flex-col overflow-y-scroll p-4'
                    style={{
                        height: articleRefHeight
                    }}>
                    <h2 className="text-xl font-bold">Read More</h2>
                    <hr className="mb-3" />
                    <ReadMoreSection newsArticles={newsArticles} displayedArticleId={articleId || ''} />
                </aside>
            </div >
        </div>
    )
}

export default NewsArticlePage