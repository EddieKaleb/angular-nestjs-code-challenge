import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './features/home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'velozient-test';
}
