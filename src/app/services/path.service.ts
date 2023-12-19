import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PathService implements OnInit{

  
  constructor(private router:Router) { }
  currentPageLink: string=this.router.url;

  ngOnInit(): void {

    console.log(this.currentPageLink+'heh')
  }
}
