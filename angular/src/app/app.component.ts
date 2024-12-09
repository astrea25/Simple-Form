import { Component } from '@angular/core';
import { FormAppComponent } from './form-app/form-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
