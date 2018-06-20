import { GameStore } from './gameStore';
import { ConsoleStore } from './consoleStore';
import { UserStore } from './userStore';

export default class DomainStore {
	constructor() {
		this.gameStore = new GameStore();
		this.consoleStore = new ConsoleStore();
		this.userStore = new UserStore();
	}
}
