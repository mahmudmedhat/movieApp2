import { environment } from './../../environments/environment';
import { Movises } from './../../core/movises';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VotePercentPipe } from "../../Models/vote-percent-pipe";
import { WatchListC } from '../watch-list/watch-list';
import { IMovises } from '../../Models/Imovises';
import { WatchListService } from '../../core/watch-list';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, VotePercentPipe, RouterLink],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails {
  constructor(public _ActivatedRoute: ActivatedRoute, public _Movises: Movises, public WatchListServ: WatchListService) { }
  ImgSrc = environment.imageBaseUrl;
  item: any;
  recommended: any;
  loading: boolean = true;
  showRecommendations: boolean = false;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        console.log(p.get('id'));
        let idproduct: any = p.get('id');
        this._Movises.getMoviedetails(idproduct).subscribe({
          next: (res: any) => {
            this.item = res;

            this.loading = false;
          },
          error: (err: any) => {
            console.log(err);
            this.loading = false;
          }

        })
        this._Movises.getrecommended(idproduct).subscribe({
          next: (res: any) => { ; this.recommended = res.results },
          error: (err: any) => { console.log(err); }
        });
      }
    });
  }

  toggleWishlist(movie: IMovises) {
    if (this.WatchListServ.isInWishlist(movie.id)) {
      this.WatchListServ.removeFromWishlist(movie.id);
    } else {
      this.WatchListServ.addToWishlist(movie);
    }
  }


}
