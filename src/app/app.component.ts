import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [],
  selector: 'my-app',
  template: `
  <h1>Hello Angular</h1>
  <h2>Cities Dropdown</h2>
  <h2>Pipes</h2>
  `,
})
export class AppComponent {
  fee = 0.0012345;

  currency = 'EUR';
  amount = 123.4567;
}
