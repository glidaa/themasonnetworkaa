import SLink from "@components/SLink";
import ArticleDetails from "@/components/ArticleDetails";
import { NewsArticle } from "@/types";

const ReadMoreSection = ({ newsArticles, displayedArticleId }: { newsArticles: NewsArticle[], displayedArticleId: string }) => {
    return (
        <div className='flex flex-col gap-3'>
            {
                newsArticles.filter((article) => article.id.toString() !== displayedArticleId).map((article, index) => {
                    return (
                        <SLink key={index} to={`/news-article/${article.id}`}>
                            <div className="flex flex-col group">
                                <h3 className="font-semibold mb-3 group-hover:text-red-500 group-hover:underline">{article.title}</h3>
                                <ArticleDetails className='group-hover:opacity-70' article={article} showAvatar={false} />
                                <hr />
                            </div>
                        </SLink>
                    )
                })
            }
        </div>
    )
}

export default ReadMoreSection