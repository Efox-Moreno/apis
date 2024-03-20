import { Component } from '@angular/core';
import { BattleNetService } from '../../services/wow.service';

@Component({
  selector: 'app-wow',
  templateUrl: './wow.component.html',
  styleUrls: ['./wow.component.css']
})
export class WowComponent {
  playerName: string = '';
  playerInfo: any;

  constructor(private battleNetService: BattleNetService) {}

  searchPlayer() {
    this.battleNetService.getPlayerInfo(this.playerName)
      .subscribe((data: any) => {
        this.playerInfo = data;
      });
  }
}
