import { Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import {RuleExecutionErrorInfo} from '../../../@core/data/Rule-Error';
import {RuleExecutionErrorInfoService} from '../../../@core/mock/Rule-Error-service';


@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent implements OnInit {
  RuleInfo = [];  
  countryCode: any;  
  currencySymbol:any;  
  RuleErrorInformation: any = [];  
  hideme = [];  
  Index: any;  
  countryId: any;  
  country: any;  
  priceToDisplay=[];  

   constructor(private service: RuleExecutionErrorInfoService) {  
  } 

  ngOnInit() {  
    this.countryId=0;  
    this.getRuleError();  
  }  

  public getRuleError() {  
    let data = [];  
    this.service.getRuleError().subscribe((data: any) => {  
      this.RuleInfo =data;  
      debugger;
    })  
  }  

  public showProductCountryInfo(index) {  
    debugger 
      this.RuleErrorInformation[index] = this.RuleInfo;  
 

    this.hideme[index] = !this.hideme[index];  
    this.Index = index;  
  }  
}
