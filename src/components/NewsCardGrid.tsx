import NewsCard from '@components/NewsCard';
import type { NewsArticle } from '@/types';

const NewsCardGrid = ({ news }: { news: NewsArticle[] }) => {
    return (
        < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
            {
                news.map((article, index) => (
                    <NewsCard key={index} newsItem={article} />
                ))
            }
        </div >
    );
}

export default NewsCardGrid;