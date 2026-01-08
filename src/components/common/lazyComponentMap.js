import { lazy } from 'react';

export const fadeImportMap = {
  PolicySummary: lazy(() => import(/* webpackPrefetch: true */ '../policySummary')),
  Map: lazy(() => import(/* webpackPrefetch: true */ '../map')),
  Vote: lazy(() => import(/* webpackPrefetch: true */ '../vote')),
  ApprovalRating: lazy(() => import(/* webpackPrefetch: true */ '../approvalRating')),
  CheerSection: lazy(() => import(/* webpackPrefetch: true */ '../cheering')),
  VoteCount: lazy(() => import(/* webpackPrefetch: true */ '../voteCount')),
  ShareSection: lazy(() => import(/* webpackPrefetch: true */ '../share')),
};
