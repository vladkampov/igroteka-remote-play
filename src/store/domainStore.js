import { GameStore } from './gameStore';
import { ConsoleStore } from './consoleStore';

export default class DomainStore {
	constructor() {
		this.gameStore = new GameStore();
		this.consoleStore = new ConsoleStore();
	}
}
