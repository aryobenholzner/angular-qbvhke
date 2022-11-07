import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CitiesService {
  getCities(): Observable<string[]> {
    return of([
      'Wien',
      'Berlin',
      'Budapest',
      'Prag',
      'Paris',
      'London',
      'Madrid',
    ]);
  }
}
