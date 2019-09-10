import { Injectable } from '@angular/core';
import { Presentation } from './presentation';
import { Http, Response } from '@angular/http';

@Injectable()
export class PresentationService {
  private presentationsUrl = '/api/presentations';

  constructor(private http: Http) { }

  // get("/api/presentations")
  getPresentations(): Promise<Presentation[]> {
    return this.http.get(this.presentationsUrl)
      .toPromise()
      .then(response => response.json() as Presentation[])
      .catch(this.handleError);
  }

  // post("/api/presentations")
  createPresentation(newPresentation: Presentation): Promise<Presentation> {
    return this.http.post(this.presentationsUrl, newPresentation)
      .toPromise()
      .then(response => response.json() as Presentation)
      .catch(this.handleError);
  }

  // get("/api/presentations/:id") endpoint not used by Angular app

  // delete("/api/presentations/:id")
  deletePresentation(delPresentationId: String): Promise<String> {
    return this.http.delete(this.presentationsUrl + '/' + delPresentationId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  // put("/api/presentations/:id")
  updatePresentation(putPresentation: Presentation): Promise<Presentation> {
    var putUrl = this.presentationsUrl + '/' + putPresentation._id;
    return this.http.put(putUrl, putPresentation)
      .toPromise()
      .then(response => response.json() as Presentation)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }
}
