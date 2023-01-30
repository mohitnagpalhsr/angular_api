import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainAddComponent } from './contain-add.component';

describe('ContainAddComponent', () => {
  let component: ContainAddComponent;
  let fixture: ComponentFixture<ContainAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
