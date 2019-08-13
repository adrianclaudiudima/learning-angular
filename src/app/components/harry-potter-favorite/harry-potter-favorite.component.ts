import {Component} from '@angular/core';
import {HarryPotterService} from '../../services/harry-potter.service';
import {HarryPotterModel} from '../../services/harry-potter.model';
import {Observable} from 'rxjs';
import {delay, last, tap} from 'rxjs/operators';
import {NavigationExtras, Params, Router} from '@angular/router';


@Component({
  selector: 'app-harry-potter-favorite',
  templateUrl: 'harry-potter-favorite.component.html'
})
export class HarryPotterFavoriteComponent {

  listOfFavoriteCharacters: Array<HarryPotterModel> = [];

  listOfFavoriteCharacter$: Observable<Array<HarryPotterModel>>;

  constructor(private harryPotterService: HarryPotterService, private router: Router) {
    this.listOfFavoriteCharacters = harryPotterService.getHarryPotterFavoriteCharacters();
    this.listOfFavoriteCharacter$ = this.harryPotterService.favoriteHarryPotterCharactersObservable$
      .pipe(
        tap(listOfCharacters => {
          if (listOfCharacters.length === 4) {
            const lastCharacter = listOfCharacters[3];
            this.router.navigate(['/login'], {
              queryParams: {
                actor: lastCharacter.actor,
                name: lastCharacter.name,
                dateOfBirth: lastCharacter.dateOfBirth
              }
            });
          }
        })
      );
  }

}
