import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainListComponent } from './contain-list.component';

describe('ContainListComponent', () => {
  let component: ContainListComponent;
  let fixture: ComponentFixture<ContainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
