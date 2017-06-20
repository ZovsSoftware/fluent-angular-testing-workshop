import { async, ComponentFixture, TestBed, fakeAsync, tick, flush  } from '@angular/core/testing';
import { HackerListComponent } from './hacker-list.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router} from '@angular/router';
import { By} from '@angular/platform-browser';
import {ApiService} from '../core/services/api.service';
import {mockHackers} from '../core/helpers.spec';

describe('HackerListComponent', () => {
  let component: HackerListComponent;
  let fixture: ComponentFixture<HackerListComponent>;

  // reference to api and router
  let api: ApiService;
  let router: Router;

  // create a mock api service (empty getHackers method)
  const mockApiService = {
    getHackers: () => {  }
  };

  // create a mock router (empty navigate method)
  const mockRouter = {
    navigate: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerListComponent ],
      providers: [
        {provide: ApiService, useValue: mockApiService},
        {provide: Router, useValue: mockRouter}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerListComponent);
    component = fixture.componentInstance;
    // delete the following line as to not trigger ngOnInit()
    // fixture.detectChanges();

    // get the ApiService and Router instance from the component's
    // injector (fixture.debugElement.injector)
    api = fixture.debugElement.injector.get(ApiService);
    router = fixture.debugElement.injector.get(Router);
  });

  describe('initial display', () => {
    it('makes a call to api.getHackers', () => {
      // Arrange: spy on api.getHackers to return Promise.resolve({})
      const getHackersSpy = spyOn(api, 'getHackers').and.returnValue(Promise.resolve({}));

      // Act: trigger ngOnInit through fixture.detectChanges()
      fixture.detectChanges();

      // Assert: assert that api.getHackers gets called
      expect(getHackersSpy).toHaveBeenCalledTimes(1);

    });

    it('sets initial data (using async)', async(() => {
      // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})
      const getHackersSpy = spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));

      // Act: trigger ngOnInit through fixture.detectChanges()
      fixture.detectChanges();

      // Assert: use the fixture's whenStable() method to assert that component.hackers is equal to mockHackers
      fixture.whenStable().then(() => {
        expect(component.hackers).toEqual(mockHackers);
      });

    }));

    it('sets initial data (using fakeAsync)', fakeAsync(() => {
      // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})
      const getHackersSpy = spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));

      // Act: trigger ngOnInit through fixture.detectChanges()
      fixture.detectChanges();

      // call the flush function
      flush();

      // Assert: component.hackers is equal to mockHackers
      expect(component.hackers.length).toBe(mockHackers.length);
    }));

  });

  xit('renders correct number of tbody rows', fakeAsync(() => {
    // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})
    const getHackersSpy = spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));

    // Act:
    // rigger ngOnInit through fixture.detectChanges()
    fixture.detectChanges();
    // call the flush function
    flush();
    // trigger a change detection cycle: fixture.detectChanges()
    fixture.detectChanges();

    // Assert
    // use fixture.debugElement and By to query for elements of selector tr[app-hacker]
    const hackerRows = fixture.debugElement.queryAll(By.css('tr[app-hacker]'));
    // assert that the length of that collection === length of mockHackers collection
    expect(hackerRows.length).toBe(mockHackers.length);
  }));

  describe('click on hacker', () => {
    it('should navigate to the hacker/:id path', fakeAsync(() => {
      // Arrange:
      // spy on api.getHackers to return Promise.resolve({mockHackers})
      // spy on router.navigate and call a fake empty function

      // Act:
      // rigger ngOnInit through fixture.detectChanges()
      // call the flush function
      // trigger a change detection cycle: fixture.detectChanges()

      // Assert
      // use fixture.debugElement and By to query for elements of selector tr[app-hacker]
      // get a specific element pertaining to a hacker
      // simulate a click on that row
      // assert that router.navigate was called with the correct path: hackers/:id
    }));
  });
});
