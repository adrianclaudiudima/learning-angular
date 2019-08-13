import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserAdministrationComponent} from './components/user-administration/user-administration.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HoverDirective} from './components/common/hover.directive';
import {HarryPotterService} from './services/harry-potter.service';
import {HttpClientModule} from '@angular/common/http';
import {HarryPotterCharacterListComponent} from './components/harry-potter-character-list/harry-potter-character-list.component';
import {HarryPotterFavoriteComponent} from './components/harry-potter-favorite/harry-potter-favorite.component';
import {LoginTemplateComponent} from './components/forms/template/login-template.component';
import {LoginReactiveComponent} from './components/forms/reactive/login-reactive.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserAdministrationComponent,
    UserDetailsComponent,
    HoverDirective,
    HarryPotterCharacterListComponent,
    HarryPotterFavoriteComponent,
    LoginTemplateComponent,
    LoginReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    HarryPotterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
