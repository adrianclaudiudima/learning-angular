import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserAdministrationComponent} from './components/user-administration/user-administration.component';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {FormsModule} from '@angular/forms';
import {HoverDirective} from './components/common/hover.directive';
import {HarryPotterService} from './services/harry-potter.service';
import {HttpClientModule} from '@angular/common/http';
import {HarryPotterCharacterListComponent} from './components/harry-potter-character-list/harry-potter-character-list.component';
import {HarryPotterFavoriteComponent} from './components/harry-potter-favorite/harry-potter-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAdministrationComponent,
    UserDetailsComponent,
    HoverDirective,
    HarryPotterCharacterListComponent,
    HarryPotterFavoriteComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    HarryPotterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
