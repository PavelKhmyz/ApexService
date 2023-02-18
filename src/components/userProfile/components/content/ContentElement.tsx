import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { UserEditableData } from '../../../../redux/initialStates/Types/initialStateType';
import { getPlayerProfile, selectUser } from '../../../../redux/reducer/userSlice';
import { ErrorComponent } from '../../../common/ErrorComponent';
import { PlayerStats } from '../../../common/PlayerStats/PlayerStats';

export const ContentElement = () => {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.user.playerData);
  const requestData = useAppSelector((state) => state.user.selectUser);
  const response = useAppSelector((state) => state.user.serverResponse);
  const error = useAppSelector((state) => state.user.error);
  const loading = useAppSelector((state) => state.user.loader);

  useEffect(() => {
    if (accounts && !requestData) {
      const [isChecked] = accounts.filter((el: UserEditableData) => el.checked === true);
      dispatch(selectUser(isChecked.id));
    }
  }, [accounts, dispatch, requestData]);

  useEffect(() => {
    if (requestData) {
      const parse = { name: requestData.name, platform: requestData.platform };
      dispatch(getPlayerProfile(parse));
    }
  }, [dispatch, requestData]);

  return (
    <>
      {response && <PlayerStats data={response} />}
      {error && <ErrorComponent message={error} />}
      <PropagateLoader color='white' loading={loading} />
    </>
  );
};
