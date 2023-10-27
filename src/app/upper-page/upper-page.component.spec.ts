import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpperPageComponent} from './upper-page.component';

describe('UpperPageComponent', () => {
  let component: UpperPageComponent;
  let fixture: ComponentFixture<UpperPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperPageComponent]
    });
    fixture = TestBed.createComponent(UpperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
