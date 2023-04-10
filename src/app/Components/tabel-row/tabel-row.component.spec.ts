import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelRowComponent } from './tabel-row.component';

describe('TabelRowComponent', () => {
  let component: TabelRowComponent;
  let fixture: ComponentFixture<TabelRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
