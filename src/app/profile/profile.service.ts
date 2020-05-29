import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 6',
      'progress': '85%'
    },
   
    {
      'id': '6',
      'skill': 'DATA STRUCTURE',
      'progress': '80%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2013 - 2017',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'institution': 'JIS College of Engineering'
    },
    {
      'id': '2',
      'from_to_year': '2010 - 2012',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GGPS'
    },
    {
      'id': '3',
      'from_to_year': '2009 - 2010',
      'education': 'High School',
      'stream': 'Science and Mathematics',
      'institution': 'Wetge public school'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'MAY 2018 ',
      'organization': 'Zensar Technology',
      'designation': 'Software Developer',
      'details': `Created fully functional projects for <strong>WittyFeed<\/strong>,
      A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).
      <\/strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.
      Another project was Influencer admin Dashboard which has features like app approval,
      app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.
      Lastly the admin dashboard for managing publishers for OneFeed.`
    },
    {
      'id': '2',
      'from_to_month_year': 'Nov 2017 - April 2018',
      'organization': 'Jspiders',
      'designation': ' intern',
      'details': 'Worked on java/j2ee and jsp web development.'
    }
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
