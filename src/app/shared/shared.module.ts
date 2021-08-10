import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../components/message/message.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageModule,
    ReactiveFormsModule,
  ],
  exports: [
    MessageModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
