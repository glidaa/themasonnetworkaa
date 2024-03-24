// type NewsArticle = {
//     id: string;
//     sourceName: string;
//     title: string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     description: string;
//     author: string | null;
//     content: string | null;
//     jokes: string[];
//     category: string;
// };

type NewsArticle = {
    id: number;
    title: string;
    text: string;
    url: string;
    image: string;
    publish_date: string;
    author?: string;
    authors: string[];
    language: string;
    source_country: string;
    sentiment: number
    jokes: string[];
    category: string;
};

export type { NewsArticle };