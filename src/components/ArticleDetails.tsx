import AvatarBadge from "@components/AvatarBadge"
import dateFormat from "dateformat"
import type { NewsArticle } from '@/types'

const ArticleDetails = ({ className = '', article, showAvatar = true }: { className?: string, article: NewsArticle, showAvatar?: boolean }) => {
    return (
        <div className={`${className} flex items-center gap-2`}>
            {showAvatar && <AvatarBadge name={article?.authors[0] || "Unknown source"} />}
            <span className="text-xs">
                <span className="font-semibold">
                    {article?.authors[0] || "Unknown source"}
                </span>
                <span className="px-1">&#x2022;</span>
                <span>{dateFormat(article?.publish_date, "longDate")}</span>
            </span>
        </div>
    )
}

export default ArticleDetails