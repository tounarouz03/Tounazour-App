import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PathService } from './services/path.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private path:PathService) {}

  currentPageLink: string='';

  ngOnInit(): void {
    
    this.currentPageLink=this.path.currentPageLink;
    console.log(this.currentPageLink)
  }
}
