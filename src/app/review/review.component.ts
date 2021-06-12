import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MOVIES} from "../Mock-Movies"
import { Movie } from '../Movie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  title = 'Fanfilm';
  movie:Movie|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movieId'));
    this.movie = MOVIES.find(movie => movie.id === movieIdFromRoute);
  }

}
