import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteViewComponent } from './site-view.component';

describe('SiteViewComponent', () => {
  let component: SiteViewComponent;
  let fixture: ComponentFixture<SiteViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteViewComponent]
    });
    fixture = TestBed.createComponent(SiteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
