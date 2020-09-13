
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-form-builder';
  form: FormGroup;
  unsubscribe: any;
  noOfRows: number = 1;  
  rownoArray: any = new Array(this.noOfRows);

  fields: any[] = [
    {      
      type: 'checkbox',      
      name: 'Variable',      
      label: 'Variable',      
      required: true,    
    },    
    {      
      type: 'text',      
      name: 'Order',      
      label: 'Order',      
      value: 'Order',      
      required: true,    
    },    
    {      
      type: 'text',      
      name: 'Order1',      
      label: 'Order1',      
      value: 'Order1',      
      required: true,    
    },    
    {      
      type: 'button',      
      name: 'Save',      
      label: 'Save',      
      value: 'Save',      
      required: true,    
    }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
  }

  getFields() {
    return this.fields;
  }

  updateConfig() {
    this.fields = JSON.parse(this.form.get('fields').value);
  }

  addRow() {    
    this.noOfRows += 1;    
    this.rownoArray = new Array(this.noOfRows);  
  }
  deleteRow() {    
    if (this.noOfRows !== 0) {      
      this.noOfRows -= 1;    
    }    
    this.rownoArray = new Array(this.noOfRows);  
  }

}
