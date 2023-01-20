import { Current, Next } from '../../../redux/initialStates/Types/mapStateType';

export interface MapComponentPropsType {
  data: Current | Next;
  className?: string;
}
