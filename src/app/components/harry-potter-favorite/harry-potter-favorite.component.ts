import {Component} from '@angular/core';
import {HarryPotterService} from '../../services/harry-potter.service';
import {HarryPotterModel} from '../../services/harry-potter.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-harry-potter-favorite',
  templateUrl: 'harry-potter-favorite.component.html'
})
export class HarryPotterFavoriteComponent {

  listOfFavoriteCharacters: Array<HarryPotterModel> = [];

  listOfFavoriteCharacter$: Observable<Array<HarryPotterModel>>;

  constructor(private harryPotterService: HarryPotterService) {
    this.listOfFavoriteCharacters = harryPotterService.getHarryPotterFavoriteCharacters();
    this.listOfFavoriteCharacter$ = this.harryPotterService.favoriteHarryPotterCharactersObservable$;
  }

}
