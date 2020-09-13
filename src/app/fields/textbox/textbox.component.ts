import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() field: any = {};
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
