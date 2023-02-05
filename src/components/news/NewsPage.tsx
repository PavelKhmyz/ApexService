import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { NewsResponseType } from '../../redux/initialStates/Types/newsInitialStateType';
import { getNews, setPage } from '../../redux/reducer/newsSlice';
import { NewsBlock } from '../common/NewsBlock';
import './newsPage.scss';
import { PaginationBar } from './components/PaginationBar';

export const NewsPage = () => {
  const lastPage = useAppSelector((state) => state.news.pagesArrayLength);
  const news = useAppSelector((state) => state.news.newsData);
  const page = useAppSelector((state) => state.news.page);
  const dispatch = useAppDispatch();
  const itemsOnPage = 4;
  const itemOffset = page * itemsOnPage;
  const endOffset = itemOffset + itemsOnPage;
  const paginate = news?.slice(itemOffset, endOffset);

  useEffect(() => {
    if (!news) {
      dispatch(getNews());
    }
  }, [dispatch, news]);

  const handleChangePage = (increment: boolean) => {
    if (increment) {
      dispatch(setPage(page + 1));
    } else {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <>
      <div className='paginationBarWrapper'>
        <button
          className='prevNextButton'
          disabled={page === 0}
          type='button'
          onClick={() => handleChangePage(false)}
        >
          prev
        </button>
        <PaginationBar />
        <button
          className='prevNextButton'
          disabled={page === lastPage}
          type='button'
          onClick={() => handleChangePage(true)}
        >
          next
        </button>
      </div>
      <div className='newsPage'>
        {paginate &&
          paginate.map((newsEl: NewsResponseType) => (
            <NewsBlock key={newsEl.title} newsEl={newsEl} />
          ))}
      </div>
    </>
  );
};
