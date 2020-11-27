import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IUser} from '../shared/models/user';
import {createRequestOption} from '../shared/util/request-util';

type EntityResponseType = HttpResponse<any>;
type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({providedIn: 'root'})
export class UserService {
  public resourceUrl = environment.api_endpoint + '/api/admin/user';

  constructor(protected http: HttpClient) {
  }

  create(user): Observable<EntityResponseType> {
    return this.http.post<IUser>(this.resourceUrl, user, {observe: 'response'});
  }

  update(user: IUser): Observable<EntityResponseType> {
    return this.http.put<IUser>(this.resourceUrl, user, {observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUser>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUser[]>(this.resourceUrl + 's', {params: options, observe: 'response'});
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }


}
