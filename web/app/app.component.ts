import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SharedService} from './sharedService';
import { PlaceService } from './placeService';
import {Home} from './home';
import {Recommend} from './recommend';

import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers:[SharedService, PlaceService],
    templateUrl: 'app/app.component.html'
})

@RouteConfig([
  {path: '/Home', as: 'Home', useAsDefault: true, component: Home},
  {path: '/Recommend', as: 'Recommend', useAsDefault: false, component: Recommend}
 ])

export class AppComponent implements OnInit{

   router:Router;

  constructor(router:Router)
  {
    this.router=router;
  }
  
  ngOnInit() {
    this.router.navigate(['/Home']);
  }
  
}