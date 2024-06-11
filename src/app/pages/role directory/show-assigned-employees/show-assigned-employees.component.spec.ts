import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssignedEmployeesComponent } from './show-assigned-employees.component';

describe('ShowAssignedEmployeesComponent', () => {
  let component: ShowAssignedEmployeesComponent;
  let fixture: ComponentFixture<ShowAssignedEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAssignedEmployeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAssignedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
