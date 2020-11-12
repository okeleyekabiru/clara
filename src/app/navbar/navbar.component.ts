import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbNavConfig] 
})
export class NavbarComponent implements OnInit {
  links = [
    { title: 'Home', fragment: 'home' },
    { title: 'Dishes', fragment: 'dishes' },
    { title: 'Chef', fragment: 'chef' },
    { title: 'Contact', fragment: 'contact' }
  ];

  constructor(public route: ActivatedRoute, config: NgbNavConfig) { 
    config.destroyOnHide = false;
    config.roles = false;
    
  }
  ngOnInit(): void {

  }

}
