/* ======================================================== *
 * > Imports
 * ======================================================== */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';


/* ======================================================== *
 * > Connection service
 * ======================================================== */
@Injectable()
export class ConnectionProvider {
  public appHost = 'http://localhost:3000';

  private http;
  constructor(private _http: Http) {
    this.http = _http;
  }

  /**
  * Get request.
  *
  * @return void
  */
  getReqeuest(url, callback) {
    this.http.get(this.appHost + url)
      .map(res => res.json())
      .subscribe(
      data => callback(data),
      error => callback(error)
      );
  }

  /**
  * Post request.
  *
  * @param string url
  * @param string data
  *
  * @return void
  */
  postReqeuest(url, data, callback) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.appHost + url, data, {
      headers: headers
    }).map(res => res.json())
      .subscribe(
      data => callback(data),
      error => callback(error)
      );
  }

  /**
  * Put request.
  *
  * @param string url
  * @param string data
  *
  * @return void
  */
  putReqeuest(url, data, callback) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.put(this.appHost + url, data, {
      headers: headers
    }).map(res => res.json())
      .subscribe(
      data => callback(data),
      error => callback(error)
      );
  }

  /**
 * Delete request.
 *
 * @param string url
 * @param string data
 *
 * @return void
 */
  deleteReqeuest(url, callback) {
    this.http.delete(this.appHost + url).map(res => res.json())
      .subscribe(
      data => callback(data),
      error => callback(error)
      );
  }
}
