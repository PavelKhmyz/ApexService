import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { getPlayerProfile } from '../../../../redux/reducer/userSlice';
import { PlayerStats } from '../../../home/components/PlayerStats/PlayerStats';

export const ContentElement = () => {
  const dispatch = useAppDispatch();
  const requestData = useAppSelector((state) => state.user.selectUser);
  const response = useAppSelector((state) => state.user.serverResponse);

  useEffect(() => {
    if (requestData) {
      const parse = { name: requestData.name, platform: requestData.platform };
      dispatch(getPlayerProfile(parse));
    }
  }, [dispatch, requestData]);

  return <div>{response && <PlayerStats data={response} />}</div>;
};
