import { eAlertType } from './enum.model';

export interface ISnackbarDTO {
  title: string;
  message: string;
  type: eAlertType;
}

export interface ISnackbarData {
  title: string;
  message: string;
  action: string;
  class: string;
}
