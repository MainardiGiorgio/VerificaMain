import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetturaComponent } from './vettura.component';

describe('VetturaComponent', () => {
  let component: VetturaComponent;
  let fixture: ComponentFixture<VetturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
