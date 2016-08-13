import {Injectable} from 'angular2/core';

export interface myData {
   twitterId:string;
}

@Injectable()
export class SharedService {

  private sharingData: myData={twitterId:"anyTwitterId"};
  private placesArr = ['Mumbai','Delhi','Bangalore','Kolkata'];
  private place:string;

  saveData(str){
    this.sharingData.twitterId=str; 
  }

  getData()
  {
    return this.sharingData.twitterId;
  }

  parseData(data)
  {
  	let obj = JSON.parse(data);

  	for(let i =0; i<obj.length;i++){
  		for(let j=0; j< this.placesArr.length;j++){
  		  if((obj[i].text).indexOf(this.placesArr[j]) > -1){
  			  this.place = this.placesArr[j];
  			  return this.place;
  		  }
  	  }
  	}
    return "Mumbai";
  }
} 
