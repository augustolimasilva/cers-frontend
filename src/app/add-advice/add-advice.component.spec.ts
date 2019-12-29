import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdviceComponent } from './add-advice.component';

describe('AddAdviceComponent', () => {
  let component: AddAdviceComponent;
  let fixture: ComponentFixture<AddAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
