import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { module_permission, users } from '../users.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  

  constructor( private dataservice:DataService,
    private route:ActivatedRoute,
    private router:Router) { }
    getData:any;
  ID:any;
  getDataOfprofile:any;
  users =new users;
  permission=new module_permission;
  permdata= new module_permission;
  FormArray:any[]=[];
  mper_id:any[]=[];
  on=true;
  off=false;
  permdata1:any[]=[];
  permissionData:any;
  profileData:any;
  form:any=[];
  views:any[]=[];
  view1:any[]=[];
  create1:any[]=[];
  creates:any[]=[];
  edits:any[]=[];
  edit1:any[]=[];
  deletes:any[]=[];
  delete1:any[]=[];
  newpermissionData:any[]=[];
  module_name: any[]=[];
  module_id:any[]=[];
  up:any;
  l:any;
  showTable=false;
  down=true;
  rowindex:any;
  rowid:any;
  
  ngOnInit(): void {
    this.ID=this.route.snapshot.params['id'];
    // console.log('id',this.ID);
    this.getProfilebyid();
    this.getPermissionDataByID();
    this.permission.p_id=this.ID;
    this.permission.view=0;
    this.permission.edit=0;
    this.permission.delete=0;
    this.permission.create=0;


    this.form = new FormGroup({
      passenger: new FormArray([
        new FormGroup({
          views: new FormControl(''),
          creates: new FormControl(''),
          edits: new FormControl(''),
          deletes: new FormControl(''),
          module_id: new FormControl(''),
          module_name: new FormControl('')
        })
      ])
    });

  }

  

  get passenger(): FormArray {
   
    return this.form.get('passenger') as FormArray;

  }

  addPassenger() {

    console.log('FormArray', FormArray);
    for (var i = 0; i < this.getData.length-1; i++) {

      this.passenger.push(
        new FormGroup({

          views: new FormControl(''),
          creates: new FormControl(''),
          edits: new FormControl(''),
          deletes: new FormControl(''),
          module_id: new FormControl(''),
          module_name: new FormControl('')

        })

      );
    }
  }

  // function to get value of fields
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
  toggleOn(l:number){
    for(let id of this.module_id){
      // console.log('Hi',l);
      this.rowindex=l
      // console.log('Hi',this.rowindex);
      this.rowid=id;
      
    if(id==l){
      console.log('r',id);
      console.log('id-',this.rowid);
      this.showTable=true;
      this.down=false;
      this.up=true;
      console.log('On');
    }
  }
  }
  toggleOff(l:number){
    this.rowindex=0;
    for(let id of this.module_id){
    if(id!=l){
      this.showTable=false;
      this.down=true;
      this.up=false;
    console.log('Off');
    }
  }
  }

  //  for profile data
  getProfilebyid() {
    this.dataservice.getDatabyid(this.ID).subscribe((res: any) => {
      // console.log(res);
      this.getDataOfprofile = res;
      this.profileData=this.getDataOfprofile.p_id
      console.log(this.getDataOfprofile , 'Hello')
    })
  }
  savaData(){
    this.dataservice.editData(this.ID,this.getDataOfprofile).subscribe(res=>{
      // console.log(res);
      
  })
  this.editPermissionDataByID();
  this.router.navigate(['/users']);
}

// for permission data
getPermissionDataByID(){
  this.dataservice.getModulePerP_id(this.ID).subscribe((res: any) => {
          this.getData = res;
   this.permissionData=this.getData[0];
   console.log(this.getData , 'getData1');

    for(var i=0;i<this.getData.length;i++){
      this.module_name[i]=this.getData[i].module_name;
      this.module_id[i]=this.getData[i].module_id;
      this.views[i]=this.getData[i].view;
      this.creates[i]=this.getData[i].create;
      this.edits[i]=this.getData[i].edit;
      this.deletes[i]=this.getData[i].delete;
      this.mper_id[i]=this.getData[i].mper_id;
    }
    
    this.addPassenger();
    console.log(this.getData , 'getData2');
  })
  console.log(this.getData , 'getData');
}


// this.view1[i]=this.passenger.value[i];
// this.permdata.view = this.view1[i].views;
editPermissionDataByID(){
  console.log(this.passenger.value, 'pss')
 
  for(var i=0;i<=this.module_name.length-1;i++){
    this.view1[i]=this.passenger.value[i];
    this.views[i]=this.view1[i].views;
    if(this.views[i] ==null){
    
      this.views[i] == false
    }
    else{
      this.views[i]=true
    }
  }

  for(var i=0;i<=this.module_name.length-1;i++){
    this.create1[i]=this.passenger.value[i];
    this.creates[i]=this.create1[i].creates;
    if(this.creates[i] == true){
    
      
    }
    else{
      this.creates[i]=false
    }
  }
  for(var i=0;i<=this.module_name.length-1;i++){
    this.edit1[i]=this.passenger.value[i];
    this.edits[i]=this.edit1[i].edits;
    if(this.edits[i] == true){
    
      
    }
    else{
      this.edits[i]=false
    }
  }
  for(var i=0;i<=this.module_name.length-1;i++){
    this.delete1[i]=this.passenger.value[i];
    this.deletes[i]=this.delete1[i].deletes;
    if(this.deletes[i] == true){
    
      
    }
    else{
      this.deletes[i]=false
    }
  }
  console.log('pass111' ,this.views)
  console.log('pass' , this.passenger.value)
  for (var i=0;i<=this.getData.length+1;i++){
  this.permdata.mper_id= this.mper_id[i];
  this.permdata.p_id=this.profileData;
  this.permdata.module_name=this.module_name[i];
  this.permdata.module_id=this.module_id[i];
  
  this.permdata.view=this.views[i];
  this.permdata.edit=this.edits[i];
  this.permdata.create=this.creates[i];
  this.permdata.delete=this.deletes[i];

  this.dataservice.editPermissionData(this.permdata.mper_id, this.permdata).subscribe(res=>{
    this.permissionData = res;
    console.log(this.permissionData , 'Hi1')
})}
}
modulenameData:any;
getModulePermissonData() {
  this.dataservice.getModuleperData().subscribe((res: any) => {
    // console.log(res);
    this.modulenameData = res;
  })
}





// for modules
checks=false;
check=false;
bulk(e : any){
  console.log(e.target.checked);
  if(e.target.checked==true){
    this.checks=true;
    console.log(e)
  }
  else{
    this.checks=false;
    console.log(e)
  }
}
//for view
view(e : any){
  console.log(e.target.checked);
  console.log(e.target.value);
var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);
  if(e.target.checked==true){
    this.check=true;
    this.permissionData.view=1;
    console.log(e)
  }
  else{
    this.permissionData.view=0;
    this.check=false;
    console.log(e)
  }
}
//for create
create(e : any){
  console.log(e.target.checked);
  console.log(e.target.value);
  var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);
  if(e.target.checked==true){
    this.check=true;
    console.log(e)
    this.permissionData.create=1;
  }
  else{
    this.check=false;
    console.log(e);
    this.permissionData.create=0;

  }
}


checks2=false;
modules(e : any){
  console.log(e.target.checked);
  if(e.target.checked==true){
    this.checks2=true;
    console.log(e)
  }
  else{
    this.checks2=false;
    console.log(e)
  }
}
//for edit
edit(e : any){
  console.log(e.target.checked);
  console.log(e.target.value);
  var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);
  if(e.target.checked==true){
    this.check=true;
    console.log(e);
    this.permissionData.edit=1;
  }
  else{
    this.check=false;
    console.log(e);
    this.permissionData.edit=0;
  }
}

checks3=false;
modulesedit(e : any){
  console.log(e.target.checked);
  if(e.target.checked==true){
    this.checks3=true;
    console.log(e)
  }
  else{
    this.checks3=false;
    console.log(e)
  }
}


//for delete
delete(e : any){
  console.log(e.target.checked);
  console.log(e.target.value);
  var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);

  if(e.target.checked==true){
    this.check=true;
    console.log(e)
    this.permissionData.delete=1;
  }
  else{
    this.check=false;
    console.log(e);
    this.permissionData.delete=0;
  }
}

checks4=false;
modulesdelete(e : any){
  console.log(e.target.checked);
  if(e.target.checked==true){
    this.checks4=true;
    console.log(e)
  }
  else{
    this.checks4=false;
    console.log(e)
  }
}


}
