import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewalluserComponent } from './adminviewalluser.component';

describe('AdminviewalluserComponent', () => {
  let component: AdminviewalluserComponent;
  let fixture: ComponentFixture<AdminviewalluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewalluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewalluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
