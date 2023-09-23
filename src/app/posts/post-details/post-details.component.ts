import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: any;
  comments: any[] = [];
  isLoading: boolean = false;
  postId: any;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.params['id'];
    this.getPost();
    this.getComments();
  }

  getPost() {
    this.isLoading = true;
    this.postService.getPost(this.postId).subscribe({
      next: (res) => {
        this.post = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getComments() {
    this.postService.getComments(this.postId).subscribe({
      next: (res) => {
        this.comments = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
