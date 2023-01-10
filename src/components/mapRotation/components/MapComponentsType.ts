import { Current, Next } from '../../../redux/reducer/initialStateType';

export interface MapComponentPropsType {
  data: Current | Next;
  className?: string;
}
