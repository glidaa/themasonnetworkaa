import { createContext } from "react";
import type { NewsArticle } from '@/types';

const NewsContext = createContext<NewsArticle[]>([]);

export default NewsContext;
