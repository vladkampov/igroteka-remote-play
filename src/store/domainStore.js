import { GameStore } from './gameStore';

export default class DomainStore {
	constructor() {
		this.gameStore = new GameStore();
	}
}
