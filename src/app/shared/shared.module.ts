import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorMessagePipe } from './pipes/error-message.pipe';



@NgModule({
  declarations: [
    ErrorMessagePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    ErrorMessagePipe,
  ]
})
export class SharedModule { }
