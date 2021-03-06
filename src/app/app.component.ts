import { Component } from '@angular/core';
import { Router } from '@angular/router';

export const ROUTES = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuItems: any[];
  public isCollapsed = true;
  public isSideNavToggle = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  sideNavToggle() {
    this.isSideNavToggle = ! this.isSideNavToggle;
  }
}
