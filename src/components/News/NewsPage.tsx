import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { NewsResponseType } from '../../redux/initialStates/Types/newsInitialStateType';
import { fetchNews, setPage } from '../../redux/reducer/newsSlice';
import { NewsBlock } from '../common/NewsBlock';
import './NewsPage.style.scss';
import { PaginationBar } from './components/PaginationBar';

export const NewsPage = () => {
  const { pagesArrayLength, page, newsData } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const itemsOnPage = 4;
  const itemOffset = page * itemsOnPage;
  const endOffset = itemOffset + itemsOnPage;
  const paginate = newsData?.slice(itemOffset, endOffset);

  useEffect(() => {
    if (!newsData) {
      dispatch(fetchNews());
    }
  }, [dispatch, newsData]);

  const handleChangePage = (increment: boolean) => {
    if (increment) {
      dispatch(setPage(page + 1));
    } else {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <div className='newsPageWrapper'>
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
          disabled={page === pagesArrayLength}
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
    </div>
  );
};
