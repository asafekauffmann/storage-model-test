import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {


  //  setar as criptograficas 
  //  (set criptografa) 
  //  (get descriptografa)

  // Faxer criptografia amanha 15/09

  constructor(
    private _cookiesService: CookieService,
    private localSto: LocalStorageService,
    private sessionSto: SessionStorageService
    ) { }

  ngOnInit(): void {
  }

  // COOKIES METHODS TEST
  setCookies() {
    this._cookiesService.set('test', 'testing cookies');
  }

  getCookies() {
    alert(this._cookiesService.get('test'));
  }

  delCookies() {
    this._cookiesService.delete('test');
  }


  // LOCAL-STORAGE METHOD TEST
  setLocalStorage() {
    this.localSto.store('userName', 'Asafe K.');
  }

  getLocalStorage() {
    alert(this.localSto.retrieve('userName'));
  }

  delLocalStorage() {
    this.localSto.clear('userName');
  }


  // SESSION-STORAGE METHOD TEST
  setSessionStorage() {
    this.sessionSto.store('logged-in', 'user');
  }

  getSessionStorage() {
    alert(this.sessionSto.retrieve('logged-in'));
  }

  delSessionStorage() {
    this.sessionSto.clear('logged-in');
  }
}
