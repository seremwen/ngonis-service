import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonisServiceComponent } from './ngonis-service.component';

describe('NgonisServiceComponent', () => {
  let component: NgonisServiceComponent;
  let fixture: ComponentFixture<NgonisServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgonisServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgonisServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
