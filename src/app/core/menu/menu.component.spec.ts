import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MenuComponent } from './menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it ('should render two menu items', () => {
      const menuItems = fixture.debugElement.queryAll(By.css('a'));
      expect(menuItems.length).toBe(2);
  });

  it ('should render a different hackerlink title', () => {
    // Arrange
    component = fixture.componentInstance;
    component.hackerLink = 'Spies';
    // Act
    fixture.detectChanges(); // trigger a change detection cycle

    // Assert
    const hackerLink  = fixture.debugElement.queryAll(By.css('a'))[0]; // capture the first 'a' tag instance
    expect(hackerLink.nativeElement.text).toBe('Spies'); // inspect the text on the actual html element
  });

});
