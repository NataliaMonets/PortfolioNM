import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgectsComponent } from './progects.component';

describe('ProgectsComponent', () => {
  let component: ProgectsComponent;
  let fixture: ComponentFixture<ProgectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
