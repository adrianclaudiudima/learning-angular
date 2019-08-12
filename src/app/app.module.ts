import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserAdministrationComponent} from './components/user-administration/user-administration.component';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserAdministrationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
