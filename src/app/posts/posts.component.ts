import { EditPostComponent } from './edit-post/edit-post.component';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  postId: any;
  page: number = 1;
  isLoading: boolean = false;
  skip: number = 0;
  take: number = 5;
  constructor(
    private postService: PostService,
    public dialogService: DialogService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadPosts(this.skip, this.take);
    this.cd.detectChanges();
  }

  loadPosts(skip?: any, take?: any): void {
    this.isLoading = true;
    this.postService.getPosts(skip, take).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.posts = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClickPaginate(e: any) {
    this.skip = e?.first;
    this.take = e?.rows;
    this.loadPosts(this.skip, this.take);
  }

  onEdit(item: any) {
    let ref = this.dialogService.open(EditPostComponent, {
      data: item,
      header: 'Edit Post',
      width: '40%',
    });
    ref.onClose.subscribe((item: any) => {
      this.posts.forEach((el) => {
        if (el.id == item.id) {
          el.title = item.title;
          el.body = item.body;
        }
      });
    });
  }
}
