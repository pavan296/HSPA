import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent=1;
  properties: Array<IProperty>;
  constructor(private route: ActivatedRoute,private housingService: HousingService) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent=2 // we are in rent url or else base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      {
        next: response=>this.properties=response,

        error: err=>console.log(err)

      }
    );
  }

}
