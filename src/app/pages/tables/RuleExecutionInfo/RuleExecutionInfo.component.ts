import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogRef } from '@nebular/theme';
import {RuleExecutionErrorInfoService} from '../../../@core/mock/Rule-Error-service';
import {RuleExecutionErrorInfo, RuleErrorInfo} from '../../../@core/data/Rule-Error';




/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'ruleExecutionInfo-table',
  styleUrls: ['RuleExecutionInfo.component.scss'],
  templateUrl: 'RuleExecutionInfo.component.html',
})
export class RuleExecutionInfoComponent implements OnInit {

  @Input() PatientVisitId: string;
  RuleInfo: RuleExecutionErrorInfo[];
  RuleErrorInformation: any = []; 
  constructor(protected ref: NbDialogRef<RuleExecutionInfoComponent>, 
                            private service: RuleExecutionErrorInfoService) {}
  settings = {
    actions:false,
    pager: {
      display: true,
      perPage: 5
    },
     columns: {
      ruleExecutionErrorId: {
        title: 'Rule Execution Id',
        type: 'number',
      },
      ruleId: {
        title: 'Rule Id',
        type: 'number',
      },
      ruleType: {
        title: 'Rule Type',
        type: 'number',
      },
      ruleErrorDescription: {
        title: 'Error Description',
        type: 'string',
      },
      ruleExecutionId: {
        title: 'Execution Id',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  loading = false;
  ngOnInit() { 
    this.loading = true;
    this.getRuleError()   
  } 
  dismiss() {
    this.ref.close();
  }
  public getRuleError() {  
    let data = [];  
    debugger;
    this.service.getRuleErrorbyVisitID(Number(this.PatientVisitId)).subscribe((data: any) => {  
      this.RuleInfo = data.map((elem: RuleExecutionErrorInfo[]) => elem); 
      debugger;
      for (var value in this.RuleInfo){
          this.RuleErrorInformation.push(this.RuleInfo[value].ruleExecutionErrors)
      }
      this.source.load(this.RuleErrorInformation.flat(1)); 
      debugger;
      this.loading =false;
    })  
  } 
  
}
  
