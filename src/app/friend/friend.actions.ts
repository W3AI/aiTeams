import { Action } from '@ngrx/store';

import { Relation } from './relation.model';
import { Invite } from './invite.model';
import { Problem } from './problem.model';
import { Operation } from './operation.model';

export const SET_AVAILABLE_RELATIONS = '[Friend] Set Available Relations';
export const SET_AVAILABLE_INVITES = '[Friend] Set Available Invites';
export const ADD_RELATION = '[Friend] Add Relation';
export const INVITE_RELATION = '[Friend] Invite Relation';

// TODO - Read Friends Public Projects/Problems & Services/Operations

export class SetAvailableRelations implements Action {
    readonly type = SET_AVAILABLE_RELATIONS;

    constructor(public payload: Relation[]) {}
}

export class SetAvailableInvites implements Action {
    readonly type = SET_AVAILABLE_INVITES;

    constructor(public payload: string) {}
}

export class AddRelation implements Action {
    readonly type = ADD_RELATION;

    constructor(public payload: string) {}
}

// Invite Relation to connect via email
export class InviteRelation implements Action {
    readonly type = INVITE_RELATION;

    constructor(public payload: string) {}
}

export type FriendActions = 
    | SetAvailableRelations
    | AddRelation
    | InviteRelation
    | SetAvailableInvites;
