import { eUserActionType } from './enum.model';

export interface IDialogResponseType {
  from: string;
  status: boolean;
  message: string;
}

export interface IDialogDTO<T> {
  passedData: Dialog<T>;
  action: eUserActionType;
  title: string;
}

type Dialog<T> = T;
