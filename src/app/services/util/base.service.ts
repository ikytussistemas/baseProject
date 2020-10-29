import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Filters, ResponseApi } from 'src/app/shared/model/util';

export abstract class BaseService<T extends { id: string }> {

  protected http: HttpClient;
  protected UrlApi = environment.UrlApi;
  protected urlResouce = `${this.UrlApi}/${this.url}`;

  constructor(protected injector: Injector, protected url: string) {
    this.http = this.injector.get(HttpClient);
  }

  createOrUpdate(obj: T) {
    if (obj.id != null && obj.id !== '') {
      return this.http.put(`${this.urlResouce}/${obj.id}`, obj);
    } else {
      obj.id = null;
      return this.http.post(`${this.urlResouce}`, obj);
    }
  }

  findAll(filter: Filters) {
    let params = new HttpParams();

    Object.keys(filter).forEach((key) => {
      if (filter[key] !== '') {
        params = params.set(key, filter[key]);
      }
    });

    return this.http.get(`${this.urlResouce}`, { params });
  }

  findAllPage(page: number, count: number, filter: Filters) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', count.toString());

    Object.keys(filter).forEach((key) => {
      if (filter[key] !== '') {
        params = params.set(key, filter[key]);
      }
    });

    return this.http.get<ResponseApi>(`${this.urlResouce}/page`, { params });
  }

  findById(id: string) {
    return this.http.get(`${this.urlResouce}/${id}`, {reportProgress: true});
  }

  find() {
    return this.http.get(`${this.urlResouce}`);
  }

  delete(id: string) {
    return this.http.delete(`${this.urlResouce}/${id}`);
  }
}
