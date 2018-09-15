import { Record } from 'immutable';

const ExplosionRecord = Record({
  explosionId: 0 as ExplosionId,
  shape: 's0' as ExplosionShape,
  cx: 0,
  cy: 0
});

const record = ExplosionRecord();
type ExplosionRecord = typeof record;

export default ExplosionRecord;
