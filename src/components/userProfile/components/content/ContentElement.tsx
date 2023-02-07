import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { UserEditableData } from '../../../../redux/initialStates/Types/initialStateType';
import { getPlayerProfile, setUser } from '../../../../redux/reducer/userSlice';
import { ErrorComponent } from '../../../home/components/ErrorComponent';
import { PlayerStats } from '../../../home/components/PlayerStats/PlayerStats';

export const ContentElement = () => {
  const dispatch = useAppDispatch();
  const {
    playerData,
    selectUser,
    serverResponse,
    error,
    badRequest,
    loader,
    theme,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (playerData && !selectUser) {
      const [isChecked] = playerData.filter(
        (el: UserEditableData) => el.checked === true
      );
      dispatch(setUser(isChecked.id));
    }
  }, [playerData, dispatch, selectUser]);

  useEffect(() => {
    if (selectUser) {
      const parse = { name: selectUser.name, platform: selectUser.platform };
      dispatch(getPlayerProfile(parse));
    }
  }, [dispatch, selectUser]);

  return (
    <>
      {serverResponse && <PlayerStats data={serverResponse} />}
      {error && <ErrorComponent data={error} />}
      {badRequest && <ErrorComponent data={badRequest} />}
      <PropagateLoader color={theme.fontColor} loading={loader} />
    </>
  );
};
