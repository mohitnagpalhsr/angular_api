import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainDeleteComponent } from './contain-delete.component';

describe('ContainDeleteComponent', () => {
  let component: ContainDeleteComponent;
  let fixture: ComponentFixture<ContainDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
