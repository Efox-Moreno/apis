// battle-net.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BattleNetService {
  private apiKey = 'TU_CLAVE_DE_API'; // Reemplaza con tu propia clave de API

  constructor(private http: HttpClient) { }

  getPlayerInfo(playerName: string) {
    return this.http.get(`https://us.api.blizzard.com/profile/wow/character/realm/${playerName}?namespace=profile-us&locale=en_US&access_token=${this.apiKey}`);
  }
}
