import {Component, Input} from 'angular2/core';


@Component({
	selector: "city-item",
	template: `<div class='detailCard'><a href='{{place.url}}' target='_blank'>	<img src='{{place.image}}' height='230px' width='100%'>	<div>{{place.name}}, {{place.type}}</div></a></div>`,
})

export class CityItemComponent{ 
@Input() place;
}
