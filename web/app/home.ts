import {Component} from 'angular2/core';
import {SharedService} from './sharedService';
import {Router} from 'angular2/router';
import {ChichaInput} from './components/chicha-input';

@Component({
  selector: 'home',
  directives : [ChichaInput],
  templateUrl: 'app/home.html'
})

export class Home { 

  private service:SharedService;
  private router:Router;
  accountName= "";
  constructor(service:SharedService,router:Router){
    this.service=service;
    this.router=router;
  }
  
  send(str){
    this.service.saveData(str); 
    this.router.navigate(['/Recommend']);
  }
}