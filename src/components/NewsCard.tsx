import AvatarBadge from "@components/AvatarBadge";
import dateFormat from "dateformat";
import type { NewsArticle } from '@/types';
import SLink from "@components/SLink";
import { wrapStr } from "@/utils";


const NewsCard = ({ newsItem }: { newsItem: NewsArticle }) => {
    return (
        <SLink to={`/news-article/${newsItem.id}`}>
            <div className={`w-full h-full overflow-hidden shadow-lg flex flex-col border border-slate-200 group`
            }>
                <div className="relative min-h-[250px] overflow-hidden">
                    <img
                        className="absolute w-full h-full object-cover"
                        src={newsItem.image}
                        alt={newsItem.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                    <div className="absolute bottom-0 p-4">
                        <h2 className="font-bold text-xl text-slate-100 group-hover:underline">{newsItem.title}</h2>
                        <small className="text-slate-100 opacity-80">
                            {wrapStr(newsItem.url, 50)}
                        </small>
                    </div>
                </div>

                <div className="p-4 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <AvatarBadge name={newsItem.authors[0] || "Unknown source"} />
                        <div className="flex flex-col">
                            <span className="text-xs">
                                <span className="font-semibold">
                                    {newsItem.authors[0] || "Unknown source"}
                                </span>
                                <span className="px-1">&#x2022;</span>
                                <span>{dateFormat(newsItem.publish_date, "longDate")}</span>
                            </span>
                        </div>
                    </div>
                    <p className="grow">{wrapStr(newsItem.text, 150)}</p>
                </div>
            </div>
        </SLink >
    );
};

export default NewsCard;
