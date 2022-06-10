import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDatailComponent } from './item-datail.component';

describe('ItemDatailComponent', () => {
  let component: ItemDatailComponent;
  let fixture: ComponentFixture<ItemDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
