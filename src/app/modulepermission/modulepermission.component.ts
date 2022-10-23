import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { module_permission } from '../users.model';


@Component({
  selector: 'app-modulepermission',
  templateUrl: './modulepermission.component.html',
  styleUrls: ['./modulepermission.component.scss']
})

export class ModulepermissionComponent implements OnInit {
  
  constructor(private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router) { }
  getData: any;
  ID: any;
  getDataOfprofile: any;
  showTable=false;
  down=true;
  l:any;
  rowindex:any;
  permissionData=new module_permission;
  up:any;
 
  imgclick="./assets/Enable.png"
  imgNotClick="./assets/Disable.png"
 
  
  
  ngOnInit(): void {
    this.ID = this.route.snapshot.params['id'];
    // console.log('id', this.ID);
   
    this.getProfilebyid();
    this.getModulePermissonData1();
   
    // console.log("b",this.getData1);

  }

  toggleOn(l:number){
    for(let row of this.getData){
      console.log(l);
      this.rowindex=l
    if(row.module_id==l){
      this.showTable=true;
      this.down=false;
      this.up=true;
      console.log('On');
    }
  }
  }
  toggleOff(l:number){
    this.rowindex=0;
    for(let row of this.getData){
    if(row.module_id!=l+1){
      this.showTable=false;
      this.down=true;
      this.up=false;
    console.log('Off');
    }
  }
  }
 
  getProfilebyid() {
    this.dataservice.getDatabyid(this.ID).subscribe((res: any) => {
      // console.log(res);
      this.getDataOfprofile = res;
    })
  }

  getModulePermissonData1(){
    this.dataservice.getModulePerP_id(this.ID).subscribe((res: any) => {
      
      this.getData = res;
//       for (let key in this.getData){
//         // console.log("Hello",this.getData[key].module_id);
     
//   // this.getData1=[this.getData[key].module_id];
  
  
// }
    })
   
  }
 
}
