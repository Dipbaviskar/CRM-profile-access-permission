import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { users, module_permission } from '../users.model';



@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.scss']
})
export class CreateprofileComponent implements OnInit {
  users = new users;
  getData: any[] = [];
  getDataOfprofile: any;
  profile: any;
  permission = new module_permission;
  permissionData = new module_permission;
  form: any = [];
  views: any[] = [];
  module_name: any[] = [];
  module_id: any[] = [];
  view3: any[] = [];
  create1: any[] = [];
  creates: any[] = [];
  edit1: any[] = [];
  edits: any[] = [];
  delete1: any[] = [];
  deletes: any[] = [];
  data: any;
  up:any;
  l:any;
  showTable=false;
  down=true;
  rowindex:any;
  rowid:any;
  constructor(private dataservice: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.permission.view = 0;
    this.permission.edit = 0;
    this.permission.delete = 0;
    this.permission.create = 0;
    this.form = new FormGroup({

      passenger: new FormArray([

        new FormGroup({
          views: new FormControl(''),
          creates: new FormControl(''),
          edits: new FormControl(''),
          deletes: new FormControl(''),
          module_id: new FormControl(''),
          modulename: new FormControl('')

        })


      ])
    });
    this.addPassenger();
    this.getModulePermissonData();
  }

  exform = new FormGroup({
    'p_name': new FormControl(''),
    'description': new FormControl('', [Validators.required]),
    'status': new FormControl(''),
  });
  get p_name(): FormGroup {
    return this.exform.get('p_name') as unknown as FormGroup
  }
  get description(): FormGroup {
    return this.exform.get('description') as unknown as FormGroup;
  }
  get status(): FormGroup {
    return this.exform.get('status') as unknown as FormGroup;
  }

  get passenger(): FormArray {

    return this.form.get('passenger') as FormArray;

  }

  addPassenger() {

    console.log('FormArray', FormArray);
    for (var i = 0; i <= this.module_name.length + 1; i++) {

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

  addUserdata() {
    // console.log(this.users);

    this.dataservice.addUsers(this.users).subscribe(res => {
      // console.log(res);
    })

    this.Submit();
    this.router.navigate(['/users']);
  }



  getModulePermissonData() {
    this.dataservice.getModuleperData().subscribe((res: any) => {
      // console.log("Om", res)
      this.getData = [res];
      for (var i = 0; i <= this.getData.length + 1; i++) {
        this.module_name[i] = this.getData[0][i].module_name;
        this.module_id[i] = this.getData[0][i].m_id;
      }

    })
  }

  Submit() {
    this.dataservice.lastrecord().subscribe(res => {
      this.profile = res;
      if (this.profile.p_id == null) {
        this.permission.p_id = 1;
      }
      else {
        this.permission.p_id = this.profile.p_id + 1
      }
      if (this.profile.p_id == null) {
        this.permission.p_id = 1;
      }
      else {
        this.permission.p_id = this.profile.p_id + 1;
      }
      // console.log('pass', this.passenger.value[0].views)

      for (var i = 0; i <= this.module_name.length - 1; i++) {
        this.view3[i] = this.passenger.value[i];
        this.views[i] = this.view3[i].views;
        if (this.views[i] == true) {


        }
        else {
          this.views[i] = false
        }
      }


      for (var i = 0; i <= this.module_name.length - 1; i++) {
        this.create1[i] = this.passenger.value[i];
        this.creates[i] = this.create1[i].creates;
        if (this.creates[i] == true) {


        }
        else {
          this.creates[i] = false
        }
      }
      // console.log('create', this.create1)

      for (var i = 0; i <= this.module_name.length - 1; i++) {
        this.edit1[i] = this.passenger.value[i];
        this.edits[i] = this.edit1[i].edits;
        if (this.edits[i] == true) {

        }
        else {
          this.edits[i] = false
        }
      }



      for (var i = 0; i <= this.module_name.length - 1; i++) {
        this.delete1[i] = this.passenger.value[i];
        this.deletes[i] = this.delete1[i].deletes;
        if (this.deletes[i] == true) {

        }
        else {
          this.deletes[i] = false
        }
      }


      for (var i = 0; i <= this.module_name.length - 1; i++) {
        //  console.log('modulen',this.module_name[i]);
        this.permission.module_name = this.module_name[i];
        // console.log(this.permission.module_name);
        this.permission.module_id = this.module_id[i];
        this.permission.view = this.views[i];
        this.permission.create = this.creates[i];
        this.permission.edit = this.edits[i];
        this.permission.delete = this.deletes[i];


        this.dataservice.addPermissionData(this.permission).subscribe(res => {

          console.log(res);

        })

      }
    })

  }
  //for modules
  checks = false;
  check = false;
  bulk(e: any) {
    // console.log(e.target.checked);
    if (e.target.checked == true) {
      this.checks = true;
      // console.log(e)
    }
    else {
      this.checks = false;
      // console.log(e)
    }
  }
  //for view
  view1(e: any) {
    // console.log(e.target.checked);
    // console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    // console.log(splitted);
    // console.log(this.permission);
    if (e.target.checked == true) {
      this.check = true;
      this.permission.view = 1;
      // console.log(e)
    }
    else {
      this.permission.view = 0;
      this.check = false;
      // console.log(e)
    }


  }
  //for create
  create(e: any) {
    // console.log(e.target.checked);
    // console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    // console.log(splitted);
    // console.log(this.permission);
    if (e.target.checked == true) {
      this.check = true;
      // console.log(e)
      this.permission.create = 1;
    }
    else {
      this.check = false;
      // console.log(e);
      this.permission.create = 0;

    }

  }


  checks2 = false;
  modules(e: any) {
    // console.log(e.target.checked);
    if (e.target.checked == true) {
      this.checks2 = true;
      // console.log(e)
    }
    else {
      this.checks2 = false;
      // console.log(e)
    }
  }
  //for edit
  edit(e: any) {
    // console.log(e.target.checked);
    // console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    // console.log(splitted);
    // console.log(this.permission);
    if (e.target.checked == true) {
      this.check = true;
      // console.log(e);
      this.permission.edit = 1;
    }
    else {
      this.check = false;
      // console.log(e);
      this.permission.edit = 0;
    }


  }

  checks3 = false;
  modulesedit(e: any) {
    // console.log(e.target.checked);
    if (e.target.checked == true) {
      this.checks3 = true;
      // console.log(e)
    }
    else {
      this.checks3 = false;
      // console.log(e)
    }
  }


  //for delete
  delete(e: any) {
    // console.log(e.target.checked);
    // console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    // console.log(splitted);
    // console.log(this.permission);

    if (e.target.checked == true) {
      this.check = true;
      // console.log(e)
      this.permission.delete = 1;
    }
    else {
      this.check = false;
      // console.log(e);
      this.permission.delete = 0;
    }

  }

  checks4 = false;
  modulesdelete(e: any) {
    // console.log(e.target.checked);
    if (e.target.checked == true) {
      this.checks4 = true;
      // console.log(e)
    }
    else {
      this.checks4 = false;
      // console.log(e)
    }
  }








}

