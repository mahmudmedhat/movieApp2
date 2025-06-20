import { environment } from './../../environments/environment';
import { Movises } from './../../core/movises';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { VotePercentPipe } from "../../Models/vote-percent-pipe";
import { WatchList } from '../watch-list/watch-list';
import { IMovises } from '../../Models/Imovises';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, VotePercentPipe,RouterLink],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails {
  constructor(public _ActivatedRoute:ActivatedRoute,public _Movises:Movises , public WatchList :WatchList){}
ImgSrc=environment.imageBaseUrl;
item: any;
recommended:any;
ngOnInit ():void{
this._ActivatedRoute.paramMap.subscribe({next:(p)=>{console.log(p.get('id'));
let idproduct:any=p.get('id');
this._Movises.getMoviedetails(idproduct).subscribe({next:(res:any)=>{console.log(res);this.item=res},
                                                    error:(err:any)=>{console.log(err);}
                                       
                                                  })  
this._Movises.getrecommended(idproduct).subscribe({next:(res:any)=>{console.log(res);this.recommended=res.results},
                                                  error:(err:any)=>{console.log(err);}
                                                  });
                                                } 
                                               });
                                             }
                                             
  toggleWishlist(movie: IMovises) {
   if (this.WatchList.watchListService.isInWishlist(movie.id)) {
    this.WatchList.watchListService.removeFromWishlist(movie.id);
      } else {
         this.WatchList.watchListService.addToWishlist(movie);
      }
    }
                                                
                                             
}
