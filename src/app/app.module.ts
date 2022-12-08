import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepThreeDetailsComponent } from './components/step-three-details/step-three-details.component';
import { StepFourDetailsComponent } from './components/step-four-details/step-four-details.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { BuildServerComponent } from './components/build-server/build-server.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BuildButtonsComponent } from './components/build-buttons/build-buttons.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { TutorialOneComponent } from './components/tutorials/tutorial-one/tutorial-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TestComponent,
    HeroSearchComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepThreeDetailsComponent,
    StepFourDetailsComponent,
    StepFourComponent,
    BuildServerComponent,
    ToDoListComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    BuildButtonsComponent,
    TutorialsComponent,
    TutorialOneComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
