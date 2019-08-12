import {Component, OnDestroy, OnInit} from '@angular/core';
import {HarryPotterService} from '../../services/harry-potter.service';
import {Observable, Subscription} from 'rxjs';
import {HarryPotterModel} from '../../services/harry-potter.model';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-harry-potter-character-list',
  templateUrl: 'harry-potter-character-list.component.html',
  styleUrls: ['harry-potter-character-list.component.scss']
})
export class HarryPotterCharacterListComponent implements OnInit {

  listOfCharacters$: Observable<Array<HarryPotterModel>>;

  constructor(private harryPotterService: HarryPotterService) {

  }

  ngOnInit(): void {
    this.listOfCharacters$ = this.harryPotterService.getAllCharacters();
    this.listOfCharacters$ = this.harryPotterService.getAllCharacters()
      .pipe(
        tap(v => console.log(v))
      );
  }

  addCharacterToFavorite(character: HarryPotterModel) {
    this.harryPotterService.addToFavorite(character);
  }

}
