import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PaginatorModule } from 'primeng/paginator';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCardComponent } from './post-card/post-card.component';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    EditPostComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PaginatorModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
  ],
})
export class PostsModule {}
