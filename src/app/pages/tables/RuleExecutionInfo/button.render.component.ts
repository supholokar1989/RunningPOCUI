
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import {RuleExecutionInfoComponent} from './RuleExecutionInfo.component';


@Component({
  template: `
  <span style="color:blue" (click)="clicked(renderValue)">View Rule</span>
  `,
})
export class NewComponent implements ViewCell, OnInit {
    renderValue: string;
    @Input() value: string | number;
    @Input() rowData: any;
  
    constructor(private dialogService: NbDialogService) {}
  
   ngOnInit() {
      this.renderValue = this.value.toString();
   }
  
   clicked(name){
    this.dialogService.open(RuleExecutionInfoComponent, {
      context: {
        PatientVisitId: name,
      },
    });
     console.log(name);
   }


}