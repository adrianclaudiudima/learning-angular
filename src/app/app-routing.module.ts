import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginReactiveComponent} from './components/forms/reactive/login-reactive.component';
import {HarryPotterCharacterListComponent} from './components/harry-potter-character-list/harry-potter-character-list.component';
import {HarryPotterFavoriteComponent} from './components/harry-potter-favorite/harry-potter-favorite.component';
import {LoginTemplateComponent} from './components/forms/template/login-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginReactiveComponent
  }, {
    path: 'login-template/:id',
    component: LoginTemplateComponent
  },
  {
    path: 'harry-potter-list',
    component: HarryPotterCharacterListComponent,
    children: [{
      path: '',
      component: HarryPotterFavoriteComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
