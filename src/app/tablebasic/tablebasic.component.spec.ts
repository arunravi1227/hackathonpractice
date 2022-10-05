import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablebasicComponent } from './tablebasic.component';

describe('TablebasicComponent', () => {
  let component: TablebasicComponent;
  let fixture: ComponentFixture<TablebasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablebasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
