import { Injectable } from '@angular/core';
import {Task} from '../Task'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  toggleReminder(task: Task | undefined) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task | undefined): Observable<Task>{
    const url = `${this.apiUrl}/${task?.id}`;
    return this.http.delete<Task>(url);
  }
}
