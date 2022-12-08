import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TestComponent } from './test/test.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { Category } from './category';
import { CategoriesComponent } from './components/categories/categories.component';
import { TutorialOneComponent } from './components/tutorials/tutorial-one/tutorial-one.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'test', component: TestComponent},
  { path: 'stepOne', component: StepOneComponent},
  { path: 'stepTwo', component: StepTwoComponent},
  { path: 'stepThree', component: StepThreeComponent},
  { path: 'stepFour', component: StepFourComponent},
  { path: 'toDoList', component: ToDoListComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'tutorialOne', component: TutorialOneComponent},
  { path: 'tutorials', component: TutorialsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }