import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignSystemWebLibComponent } from './design-system-web-lib.component';

describe('DesignSystemWebLibComponent', () => {
  let component: DesignSystemWebLibComponent;
  let fixture: ComponentFixture<DesignSystemWebLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemWebLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignSystemWebLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
