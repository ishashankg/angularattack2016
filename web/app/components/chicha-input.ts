import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {SharedService} from '../sharedService';
import {Router} from 'angular2/router';

@Component({

selector:'chicha-input',	
template: `<input  type="text" [ngModel]=bindModelData placeholder="{{placeHolderText}}" (ngModelChange)="updateData($event)" class="tweet-account-text" (keyup.enter)="send(bindModelData)">`,

})

export class ChichaInput{
	@Input() placeHolderText :string ;
	@Input() bindModelData: any;
	@Output() bindModelDataChange: any = new EventEmitter();

	private service: SharedService;
	private router: Router;

	constructor(service:SharedService,router:Router){
	  this.service=service;
	  this.router=router;
	}

	updateData(event) {
      this.bindModelData = event;
      this.bindModelDataChange.emit(event);
    }

	send(str){
		this.service.saveData(str);
		this.router.navigate(['/Recommend']);
	}    

}