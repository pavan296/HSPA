import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent;

// will come from master tables
propertyTypes: Array<string> = ['House','Apartment','Duplex'];
furnishTypes: Array<string>=['Fully','Semi','unfurnished'];

propertyView : IPropertyBase= {
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  FType: null,
  PType: null,
  BHK: null,
  BuiltArea: null,
  City: null,
  RTM: null
};

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('form submitted');
    console.log(this.addPropertyForm);
  }
  onBack(){
    this.route.navigate(['/']);
  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active=true;
  }

}
