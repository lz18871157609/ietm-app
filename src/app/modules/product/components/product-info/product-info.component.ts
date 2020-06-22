import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}
  getProductInfoBy(fun) {
    this.router.navigate(['/main/product/product-info/' + fun]);
  }
}
