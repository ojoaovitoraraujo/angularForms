import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { NewAnimalComponent } from './animal-new/new-animal.component';
import { AnimalListResolver } from './animals-list/animal-list.resolver';
import { AnimalsListComponent } from './animals-list/animals-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
    resolve: {
      animals: AnimalListResolver,
    }
  },
  {
    path: ':animalId',
    component: AnimalDetailComponent,
  },
  {
    path: 'new',
    component: NewAnimalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
