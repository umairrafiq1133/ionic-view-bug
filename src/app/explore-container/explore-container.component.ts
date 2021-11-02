import { Component, OnInit, Input } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private smsPlugin: SMS) {}

  ngOnInit() {}

  openSmsApp() {
    const options = {
      android: {
        intent: 'INTENT',
      },
    };
    const phoneNumbers = ['+11111111111'];
    const message = 'This is a test message';

    this.smsPlugin.send(phoneNumbers, message, options);
  }
}
