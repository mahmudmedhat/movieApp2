import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { People } from './components/people/people';
import { NotFound } from './components/not-found/not-found';
import { WatchList } from './components/watch-list/watch-list';
import { MovieDetails } from './components/movie-details/movie-details';

export const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:Home},
  {path:"home/:id",component:MovieDetails},
  {path:"people",component:People},
  {path:"Watch",component:WatchList},
  {path:"**",component:NotFound},
];
