import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import { setPage, setPagesArray } from '../NewsPage.slice';

export const PaginationBar = () => {
  const dispatch = useAppDispatch();
  const { newsData } = useAppSelector((state) => state.news);

  const arr = [];
  if (newsData) {
    const pages = Math.ceil(newsData.length / 4);
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
