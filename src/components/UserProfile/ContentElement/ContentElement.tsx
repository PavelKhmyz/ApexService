import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import { getPlayerProfile, selectUser } from '../UserProfile.slice';
import { ErrorComponent } from '../../common/ErrorComponent';
import { PlayerStats } from '../../common/PlayerStats/PlayerStats';
import { UserEditableData } from '../../../axios/requests';

export const ContentElement = () => {
  const dispatch = useAppDispatch();
  const {
    playerData,
    selectUser: selectedUser,
    serverResponse,
    error,
    loader,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (playerData && !selectedUser) {
      const [isChecked] = playerData.filter((el: UserEditableData) => el.checked === true);
      dispatch(selectUser(isChecked.id));
    }
  }, [playerData, dispatch, selectedUser]);

  useEffect(() => {
    if (selectedUser) {
      const requestedPlayer = { name: selectedUser.name, platform: selectedUser.platform };
      dispatch(getPlayerProfile(requestedPlayer));
    }
  }, [dispatch, selectedUser]);

  return (
    <>
      {serverResponse && <PlayerStats data={serverResponse} />}
      {error && <ErrorComponent message={error} />}
      <PropagateLoader color='white' loading={loader} />
    </>
  );
};
