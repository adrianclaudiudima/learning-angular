import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {HarryPotterModel} from './harry-potter.model';

@Injectable()
export class HarryPotterService {

  private API_CHARACTERS_URL = 'http://hp-api.herokuapp.com/api/characters';
  private LOGIN_URL = 'http://localhost:8080/auth';

  private favoriteHarryPotterCharacters: Array<HarryPotterModel> = [];
  private favoriteHarryPotterCharactersSubject: Subject<Array<HarryPotterModel>> = new ReplaySubject(1);
  public favoriteHarryPotterCharactersObservable$ = this.favoriteHarryPotterCharactersSubject.asObservable();

  constructor(private httpClient: HttpClient) {

  }

  getAllCharacters(): Observable<Array<HarryPotterModel>> {
    return this.httpClient.get<Array<HarryPotterModel>>(this.API_CHARACTERS_URL);
  }

  addToFavorite(harryPotterCharacter: HarryPotterModel) {
    this.favoriteHarryPotterCharacters.push(harryPotterCharacter);
    this.favoriteHarryPotterCharactersSubject.next(this.favoriteHarryPotterCharacters);
  }

  getHarryPotterFavoriteCharacters() {
    return this.favoriteHarryPotterCharacters;
  }


  loginUser(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.LOGIN_URL, {username, password});

  }

}

