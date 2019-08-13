import {Component, OnInit} from '@angular/core';
import {HarryPotterService} from '../../services/harry-potter.service';
import {Observable} from 'rxjs';
import {HarryPotterModel} from '../../services/harry-potter.model';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-harry-potter-character-list',
  templateUrl: 'harry-potter-character-list.component.html',
  styleUrls: ['harry-potter-character-list.component.scss']
})
export class HarryPotterCharacterListComponent implements OnInit {

  displayData = false;

  listOfCharacters$: Observable<Array<HarryPotterModel>>;

  constructor(private harryPotterService: HarryPotterService) {

  }

  ngOnInit(): void {
    this.listOfCharacters$ = this.harryPotterService.getAllCharacters()
      .pipe(
        tap(v => {
          console.log(v);
          this.displayData = true;
        })
      );
  }

  addCharacterToFavorite(character: HarryPotterModel) {
    this.harryPotterService.addToFavorite(character);
  }

}
