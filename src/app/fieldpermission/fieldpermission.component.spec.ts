import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldpermissionComponent } from './fieldpermission.component';

describe('FieldpermissionComponent', () => {
  let component: FieldpermissionComponent;
  let fixture: ComponentFixture<FieldpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldpermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
