import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public menuItems = [
    {name: 'Home', route: 'home'},
    {name: 'About Us', route: 'about'},
    {name: 'Contact', route: 'contact'}
  ];

  public name;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(params);
      console.log(this.name);
    });
  }

  redirectTo(route) {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(params);
      console.log(this.name);
    });
  }

}
