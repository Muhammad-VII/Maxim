import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.scss']
})
export class CsrComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    autoplay:true,
    margin: 30,
    autoplayTimeout:100,
    navText: ['<img src="assets/shared/icons/left-arr.png" alt="" srcset="">', '<img src="assets/shared/icons/right-arr.png" alt="" srcset="">'],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      }
    },
    nav: true
  }
  ngOnInit(): void {
  }

}
