import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsqueryComponent } from './ansquery.component';

describe('AnsqueryComponent', () => {
  let component: AnsqueryComponent;
  let fixture: ComponentFixture<AnsqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
