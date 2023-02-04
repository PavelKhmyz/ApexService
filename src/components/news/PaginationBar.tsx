import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { setPage, setPagesArray } from '../../redux/reducer/newsSlice';

export const PaginationBar = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.newsData);

  const arr = [];
  if (news) {
    const pages = Math.ceil(news.length / 4);
    for (let i = 0; i < pages; i += 1) {
      arr.push(i);
    }
  }
  useEffect(() => {
    dispatch(setPagesArray(arr.length - 1));
  }, [arr.length, dispatch]);

  const handleChangePage = (pageValue: number) => {
    dispatch(setPage(pageValue));
  };
  return (
    <>
      {arr.map((el) => (
        <button
          className='paginationButton'
          key={el}
          type='button'
          onClick={() => handleChangePage(el)}
        >
          {el + 1}
        </button>
      ))}
    </>
  );
};
