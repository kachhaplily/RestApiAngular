import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelCloumnComponent } from './tabel-cloumn.component';

describe('TabelCloumnComponent', () => {
  let component: TabelCloumnComponent;
  let fixture: ComponentFixture<TabelCloumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelCloumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelCloumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
