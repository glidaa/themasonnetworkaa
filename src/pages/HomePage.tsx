import { useContext } from 'react'
import NewsContext from '@/contexts/NewsContext'
import WideNewsBanner from '@/components/WideNewsBanner'
import PaginatedItems from '@/components/PaginatedNewsCardsGrid'
import { Helmet } from "react-helmet";

const HomePage = () => {
    const newsArticles = useContext(NewsContext)


    return (
        <div className="relative">
            <Helmet>
                <title>The Mason Network | Home</title>
            </Helmet>
            <div className='container'>
                <div className="grid grid-rows-2 grid-cols-4 gap-2">
                    <WideNewsBanner className="row-start-1 row-end-3 col-start-1 col-end-3" showDescription newsItem={newsArticles[0]} />
                    <WideNewsBanner className="row-start-1 row-end-2 col-start-3 col-end-5" fontSize='2xl' newsItem={newsArticles[1]} />
                    <WideNewsBanner className="row-start-2 row-end-3 col-start-3 col-end-4" fontSize='lg' newsItem={newsArticles[2]} />
                    <WideNewsBanner className="row-start-2 row-end-3 col-start-4 col-end-5" fontSize='lg' newsItem={newsArticles[3]} />
                </div>
                <h1 className="relative text-3xl font-bold mt-12 mb-6 w-fit before:content-[''] before:absolute before:bottom-1 before:left-0  before:w-2/3 before:h-[4px] before:bg-red-500">Latest News</h1>
                <PaginatedItems news={newsArticles.slice(4)} newsPerPage={21} />

            </div>
        </div>
    )
}

export default HomePage