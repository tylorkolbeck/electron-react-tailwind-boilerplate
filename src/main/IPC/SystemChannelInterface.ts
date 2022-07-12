import { IpcChannelInterface } from './IpcChannelInterface';
import { IpcRequest } from 'main/shared/IpcRequest';

export class SystemInfoChannel implements IpcChannelInterface {
  getName(): string {
    return 'system-info';
  }

  handle(event: Electron.IpcMainEvent, request: IpcRequest): void {
    if (!request.responseChannel) {
      request.responseChannel = `${this.getName()}_response`;
    }

    event.sender.send('system-info', 'THE SYSTEM INFO');
  }
}
