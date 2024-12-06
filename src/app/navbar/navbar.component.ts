import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _MediaService:MediaService, private _ActivatedRoute:ActivatedRoute) {}

  menuStyle:string = '';


  ngOnInit(): void {}

  searchForMedia(event:any)
  {
    this._MediaService.userSearch.next(event.target.value);
  }
  openMenu()
  {
    this.menuStyle = '0'
  }
  closeMenu()
  {
    this.menuStyle = '-15rem'
  }
}
