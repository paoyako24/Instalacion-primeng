import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet,ToggleSwitchModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cheked: boolean =false;
}
