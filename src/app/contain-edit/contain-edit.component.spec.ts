import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainEditComponent } from './contain-edit.component';

describe('ContainEditComponent', () => {
  let component: ContainEditComponent;
  let fixture: ComponentFixture<ContainEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
