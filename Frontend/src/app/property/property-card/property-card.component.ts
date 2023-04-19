import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  //template: `<h1>I am a Card</h1>`,
  templateUrl: 'propery-card.component.html',
  //styles: ['h1{font-weight: normal;}']
  styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent{
  property: any={

    "Id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  }

}
