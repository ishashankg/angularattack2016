import {Component} from 'angular2/core';
import {SharedService} from './sharedService';
import {Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http';
import { Place } from './place';
import { PlaceService } from './placeService';
import { CityItemComponent} from './components/city-item-component';

@Component({
  directives: [CityItemComponent],
  templateUrl: 'app/recommend.html'
})

export class Recommend {

  private router:Router;
  private service:SharedService;
  private twitterId: string;
  private http:Http;
  private url:string = 'http://jsonplaceholder.typicode.com/posts/1';
  private result:string;
  private twitterUrl:string='/twitter/user';
  private data:string;
  private places: Place[];
  private place:string;
  private placeService: PlaceService;

  constructor(router: Router, service: SharedService, placeService: PlaceService, http:Http)
  {
    this.router=router;
    this.service=service;
    this.http=http;
    this.placeService = placeService;
    this.twitterId=service.getData();

    let username = JSON.stringify({'username':this.twitterId});
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.post(this.twitterUrl,username,{
       headers:headers
    }).subscribe(data =>{
       this.result = data._body;
       this.place = service.parseData(this.result);

       if (this.place == "Mumbai") {
         this.places = this.placeService.forMumbai();
       }
       else if (this.place == "Delhi") {
         this.places = this.placeService.forDelhi();
       }
       else if (this.place == "Bangalore") {
         this.places = this.placeService.forBangalore();
       }
       else if (this.place == "Kolkata") {
         this.places = this.placeService.forKolkata();
       }
       else{
         this.places = this.placeService.forMumbai();
       }
      
    })
  }

  back()
  {
    this.router.navigate(['/Home']);
  }
  
}