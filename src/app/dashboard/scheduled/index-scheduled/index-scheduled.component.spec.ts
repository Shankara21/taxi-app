import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexScheduledComponent } from './index-scheduled.component';

describe('IndexScheduledComponent', () => {
  let component: IndexScheduledComponent;
  let fixture: ComponentFixture<IndexScheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexScheduledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
