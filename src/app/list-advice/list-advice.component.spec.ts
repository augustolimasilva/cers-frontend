import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdviceComponent } from './list-advice.component';

describe('ListAdviceComponent', () => {
  let component: ListAdviceComponent;
  let fixture: ComponentFixture<ListAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
