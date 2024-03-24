import AvatarBadge from "./AvatarBadge";
import dateFormat from "dateformat";
import SLink from "@components/SLink";
import type { NewsArticle } from '@/types';
import { wrapStr } from "@/utils";

const WideNewsBanner = ({
    newsItem,
    className,
    fontSize = '3xl',
    showDescription = false
}: {
    className: string;
    newsItem: NewsArticle;
    fontSize?: string
    showDescription?: boolean
}) => {
    return (
        <SLink className={`${className} min-h-[250px]`} to={`/news-article/${newsItem.id}`}>
            <div
                className="relative w-full h-full grid place-content-end group"
            >
                <img
                    className="absolute w-full h-full object-cover"
                    src={newsItem.image}
                    alt={newsItem.title}
                />
                <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-black to-black opacity-80" />

                <div className="relative w-full h-full p-4 flex flex-col gap-2 basis-[100%] text-white">
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
                    <h2 className={`font-bold text-${fontSize} group-hover:underline`}>{newsItem.title}</h2>
                    {showDescription && <p>
                        {wrapStr(newsItem?.text || '', 150)}
                    </p>}
                </div>

            </div>
        </SLink >
    );
};

export default WideNewsBanner;
