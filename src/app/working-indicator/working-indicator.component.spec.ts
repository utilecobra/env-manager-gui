import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingIndicatorComponent } from './working-indicator.component';

describe('WorkingIndicatorComponent', () => {
  let component: WorkingIndicatorComponent;
  let fixture: ComponentFixture<WorkingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
