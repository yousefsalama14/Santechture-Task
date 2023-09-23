import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private readonly commentsUrl =
    'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getPosts(start: number, limit: number): Observable<any[]> {
    const params = { _start: start.toString(), _limit: limit.toString() };
    return this.http.get<any[]>(this.apiUrl, { params });
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getComments(postId: number): Observable<any[]> {
    const params = { postId: postId.toString() };
    return this.http.get<any[]>(this.commentsUrl, { params });
  }

  updatePost(post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${post.id}`, post);
  }
}
