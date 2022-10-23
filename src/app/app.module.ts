import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {RouterModule,Routes} from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ModulepermissionComponent } from './modulepermission/modulepermission.component';
import { FieldpermissionComponent } from './fieldpermission/fieldpermission.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateprofileComponent } from './createprofile/createprofile.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';

const routes:Routes=[{ path: 'navbar', component: NavbarComponent },
{ path: 'users', component: UsersComponent },
{ path: 'modulepermission/:id', component: ModulepermissionComponent },
{ path: 'addprofile', component: CreateprofileComponent },
{path: 'Mpermission/:id', component: ModulepermissionComponent},
{path: 'users/:id', component: EditprofileComponent},
{path: 'fieldper', component: FieldpermissionComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    SideNavComponent,
    ModulepermissionComponent,
    FieldpermissionComponent,
    CreateprofileComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSliderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
