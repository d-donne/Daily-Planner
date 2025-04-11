import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type AddNoteResult = { 'ok' : string } |
  { 'err' : string };
export interface DayData {
  'onThisDay' : [] | [OnThisDay],
  'notes' : Array<Note>,
}
export interface Note {
  'id' : bigint,
  'content' : string,
  'isCompleted' : boolean,
}
export interface OnThisDay {
  'title' : string,
  'wikiLink' : string,
  'year' : string,
}
export type Result = { 'ok' : string } |
  { 'err' : string };
export interface http_header { 'value' : string, 'name' : string }
export interface http_request_result {
  'status' : bigint,
  'body' : Uint8Array | number[],
  'headers' : Array<http_header>,
}
export interface _SERVICE {
  'addNote' : ActorMethod<[string, string], AddNoteResult>,
  'completeNote' : ActorMethod<[string, bigint], undefined>,
  'fetchAndStoreOnThisDay' : ActorMethod<[string], Result>,
  'getDayData' : ActorMethod<[string], [] | [DayData]>,
  'getMonthData' : ActorMethod<[bigint, bigint], Array<[string, DayData]>>,
  'transform' : ActorMethod<
    [{ 'context' : Uint8Array | number[], 'response' : http_request_result }],
    http_request_result
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
