import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  udateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');

    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`).pipe(
      map(resp => true),
      catchError((err) => of(false))
    );
  }
}
/*   DELETE
  pipe(...): Es un método que permite encadenar operadores a un Observable. Aquí se utilizan dos operadores: catchError y map.

    catchError(err => of(false)):
        catchError: Este operador intercepta cualquier error que ocurra durante la solicitud HTTP.
        Si ocurre un error, la función pasa false como resultado utilizando of(false). of es un operador que crea un Observable que emite el valor dado (false en este caso).

    map(resp => true):
        map: Este operador transforma la respuesta emitida por el Observable.
        En este caso, cualquier respuesta que se reciba de la solicitud HTTP se transforma en true. Esto indica que la eliminación fue exitosa (al menos, desde el punto de vista de la aplicación, ya que el servidor respondió sin errores graves).

Resumen:
El método deleteHeroById elimina un héroe a través de una solicitud HTTP DELETE y devuelve un Observable que emite true si la eliminación fue exitosa y false si ocurrió algún error. Si el héroe no tiene un id, lanza un error inmediatamente sin intentar la solicitud HTTP.
 */
