import {
  ServerProps,
  ServerResponseStateType,
} from '../../../redux/initialStates/Types/serverInitialStateType';

export interface ServerElementProps {
  data: ServerProps;
}
export interface ServerComponentProps {
  serverData: ServerResponseStateType;
}
