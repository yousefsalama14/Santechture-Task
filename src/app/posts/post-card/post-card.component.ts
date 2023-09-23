import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() post: any;
  @Output() edit = new EventEmitter<any>();

  onEdit() {
    this.edit.emit(this.post);
  }
}
