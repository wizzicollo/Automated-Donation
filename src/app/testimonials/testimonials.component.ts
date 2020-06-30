import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  providers: [ApiService]
})
export class TestimonialsComponent implements OnInit {

  stories = [{ title: 'test' }];
  selectedStory;
  

  constructor(private api: ApiService) {
    this.getStories();
    this.selectedStory = { id: -1,charity:'', title: '', description: '', location: '' };
  }
  getStories = () => {
    this.api.getAllStories().subscribe(
      data => {
        this.stories = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  storyClicked = (story) => {
    this.api.getOneStory(story.id).subscribe(
      data => {
        this.selectedStory = data;

      },
      error => {
        console.log(error)
      }
    );
  }
  updateStory = () => {
    this.api.updateStory(this.selectedStory).subscribe(
       data => {
        this.getStories();
      },
      error => {
        console.log(error);
      }
    );
  }
  createStory = () => {
    this.api.createStory(this.selectedStory).subscribe(
       data => {
        this.stories.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteStory = () => {
    this.api.deleteStory(this.selectedStory.id).subscribe(
      data => {
        this.getStories();
      },
      error => {
        console.log(error);
      }
    );
  }


  ngOnInit(): void {
  }

}

