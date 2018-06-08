import { observable, action, computed } from 'mobx';
import {
	getApplications,
	getApplication,
	createApplication,
	getApplicationPipelines,
	getApplicationPipeline,
	getApplicationLogo
} from '../api/core/applications';
import { DomainInstanceStore, DomainInstance } from './domainInstanceStore';


export class GameStore extends DomainInstanceStore {
	constructor() {
		super(Application, getGames, getGameDetails);
	}

	getGames() {
		this.getInstances();
	}

	getGameDetails(id) {
		this.getInstance(id);
	}
}

export class Application extends DomainInstance {
	/*
	identityId   = null;
	name         = '';
	stage        = '';
	createdAt    = null;
	modifiedAt   = null;
	clientSecret = '';
	scopes       = null;
	redirectUris = [];
	logo         = null;
	*/

}
