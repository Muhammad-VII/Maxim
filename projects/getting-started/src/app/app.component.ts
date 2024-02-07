import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gettingStarted';
  constructor(private wowService: NgwWowService, public router: Router) {
    this.wowService.init();
  }
  onActivate(event: any) {
    window.scroll(0,0);
  }
}
