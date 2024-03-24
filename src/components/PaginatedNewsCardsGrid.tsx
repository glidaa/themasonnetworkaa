import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import NewsCardGrid from '@components/NewsCardGrid';
import type { NewsArticle } from '@/types';

function PaginatedItems({ news, newsPerPage }: { news: NewsArticle[], newsPerPage: number }) {
    const [itemOffset, setItemOffset] = useState<number>(0);
    const endOffset = itemOffset + newsPerPage;

    const currentItems = news.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(news.length / newsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * newsPerPage) % news.length;
        setItemOffset(newOffset);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <NewsCardGrid news={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}

                containerClassName='flex gap-1 justify-center items-center mt-6'
                pageLinkClassName='font-normal rounded-[4px] px-[16px] py-[1.6px] text-[#000] bg-primary-red w-8 h-8 grid place-content-center'
                activeLinkClassName='font-black text-[#fff] bg-primary-red-dark'
                previousLinkClassName='uppercase rounded-[4px] px-[16px] py-[1.6px] font-black text-primary-red'
                nextLinkClassName='uppercase rounded-[4px] px-[16px] py-[1.6px] font-black text-primary-red'
            />
        </>
    );
}

export default PaginatedItems;