import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationGridComponent } from './configuration-grid.component';

describe('ConfigurationGridComponent', () => {
  let component: ConfigurationGridComponent;
  let fixture: ComponentFixture<ConfigurationGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
