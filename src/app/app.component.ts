import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Anime', url: '/folder/anime', icon: 'search' },
    { title: 'Profile', url: '/profile', icon: 'person' },
  ];
  constructor() {}
}
