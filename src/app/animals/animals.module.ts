import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalsPhotoGridComponent } from './animals-photo-grid/animals-photo-grid.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../components/message/message.module';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    AnimalsPhotoGridComponent,
    AnimalDetailComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    ReactiveFormsModule,
    MessageModule,
  ]
})
export class AnimalsModule { }
