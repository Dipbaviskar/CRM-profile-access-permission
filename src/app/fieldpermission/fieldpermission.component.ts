import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldpermission',
  templateUrl: './fieldpermission.component.html',
  styleUrls: ['./fieldpermission.component.scss']
})
export class FieldpermissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clr=1;
  updateSetting(event:any) {
    this.clr = event.value;
    {
    if (this.clr==1){
      event.value="invisible"
    }
    else if(this.clr==2){
      event.value="read only"
    }
    else{
      event.value="write"
    }
  }
  console.log(event.value);
  }

}
