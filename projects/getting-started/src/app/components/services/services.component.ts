import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare const $: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      740: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
    nav: true,
  };

  firstCollapseToggle(): void {
    $(`.collapse-one .collapseble`).slideToggle(300);
    $(`.collapse-two .collapseble`).slideUp(300);
    $(`.collapse-three .collapseble`).slideUp(300);
    $(`.collapse-four .collapseble`).slideUp(300);
  }

  secondCollapseToggle(): void {
    $(`.collapse-one .collapseble`).slideUp(300);
    $(`.collapse-three .collapseble`).slideUp(300);
    $(`.collapse-four .collapseble`).slideUp(300);
    $(`.collapse-two .collapseble`).slideToggle(300);
  }

  thirdCollapseToggle(): void {
    $(`.collapse-three .collapseble`).slideToggle(300);
    $(`.collapse-one .collapseble`).slideUp(300);
    $(`.collapse-two .collapseble`).slideUp(300);
    $(`.collapse-four .collapseble`).slideUp(300);
  }

  fourthCollapseToggle(): void {
    $(`.collapse-four .collapseble`).slideToggle(300);
    $(`.collapse-one .collapseble`).slideUp(300);
    $(`.collapse-two .collapseble`).slideUp(300);
    $(`.collapse-three .collapseble`).slideUp(300);
  }

  ngOnInit(): void {
    $(`.collapse-one .collapseble`).slideDown(300);
    $(`.collapse-two .collapseble`).slideUp(300);
    $(`.collapse-three .collapseble`).slideUp(300);
    $(`.collapse-four .collapseble`).slideUp(300);
  }
}
