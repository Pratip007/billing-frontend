// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// import { Injectable } from '@angular/core';
// import { SnackBarMassageComponent } from '../views/utility/snack-bar/snack-bar-massage.component';
// import { ISnackbarDTO, ISnackbarData } from '../models/snackbar.model';

// @Injectable()
// export class SnackBarService {
//   constructor(private snackBar: MatSnackBar) {}

//   /**
//    * @param duration - duration in seconds.
//    */
//   open(data: ISnackbarData, config: MatSnackBarConfig) {
//     return this.snackBar.openFromComponent(SnackBarMassageComponent, {
//       data: data,
//       ...config
//     });
//   }

//   public openSnackBar(data: ISnackbarDTO) {
//     this.open(
//       {
//         title: data.title,
//         message: data.message,
//         action: 'Close',
//         class: data.type.toString()
//       },
//       {
//         duration: 5000,
//         horizontalPosition: 'end',
//         verticalPosition: 'top',
//         politeness: 'off'
//       }
//     );
//     // .afterDismissed()
//     // .subscribe(
//     //   (matSnackBarDismiss: MatSnackBarDismiss) => {},
//     //   (error) => {
//     //     console.error(error);
//     //   }
//     // );
//   }
// }
