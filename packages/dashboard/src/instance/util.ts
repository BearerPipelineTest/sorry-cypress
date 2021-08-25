import { InstanceTest } from '@src/generated/graphql';
import { orderBy, sum } from 'lodash';

export const getTestDuration = (test: InstanceTest) => {
  return sum(test.attempts.map((a) => a.wallClockDuration));
};

export const getTestStartedAt = (test: InstanceTest) => {
  const attempts = orderBy(test.attempts, 'wallClockStartedAt');
  if (!attempts.length) {
    return null;
  }
  return attempts[0].wallClockStartedAt;
};
