import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter
  deleteIcon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task | undefined){
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task | undefined){
    this.onToggleReminder.emit(task)
  }

}
