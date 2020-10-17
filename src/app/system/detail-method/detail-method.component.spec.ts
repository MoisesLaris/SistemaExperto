import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMethodComponent } from './detail-method.component';

describe('DetailMethodComponent', () => {
  let component: DetailMethodComponent;
  let fixture: ComponentFixture<DetailMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
