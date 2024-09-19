// import { Injectable } from '@angular/core';

// import {
//   MatDialog,
//   MatDialogConfig,
//   MatDialogRef
// } from '@angular/material/dialog';
// import { IDialogResponseType } from '../models/dialog.model';
// import { ComponentType } from '@angular/cdk/portal';

// @Injectable()
// export class DialogResponseService {
//   constructor(private dialog: MatDialog) {}

//   /**
//    * @param componentInstance - instance of the component need to open.
//    * @param data - dialog initial data.
//    * @param config: MatDialogConfig type configurations
//    */
//   open(componentInstance: ComponentType<any>, config: MatDialogConfig) {
//     return this.dialog.open(componentInstance, { ...config });
//   }

//   /**
//    *
//    * @param dialogRef reference of the dialog opened
//    * @param data data if need to pass back on close or response
//    */
//   closeDialog(dialogRef: MatDialogRef<any>, data: IDialogResponseType): void {
//     dialogRef.close(data);
//   }
// }
