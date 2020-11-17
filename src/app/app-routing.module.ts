import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { HomeComponent } from './components/home/home.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { UserInputComponent } from './components/user-input/user-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'userInput', component: UserInputComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pipe', component: PipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
