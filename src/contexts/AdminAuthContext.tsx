import { createContext, Dispatch, SetStateAction } from 'react';

interface NewsContextType {
    loggedIn: boolean;
    setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: NewsContextType = {
    loggedIn: false,
    setLoggedIn: () => { },
};

const NewsContext = createContext<NewsContextType>(defaultContextValue);

export default NewsContext;
