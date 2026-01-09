import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeImportMap } from './lazyComponentMap';
import {
  PolicySummarySkeleton,
  MapSkeleton,
  VoteSkeleton,
  ApprovalRatingSkeleton,
  CheerSectionSkeleton,
  VoteCountSkeleton,
  ShareSectionSkeleton,
} from './Skeleton';

const MotionDiv = motion.div;

// 컴포넌트별 Skeleton 매핑
const skeletonMap = {
  PolicySummary: <PolicySummarySkeleton />,
  Map: <MapSkeleton />,
  Vote: <VoteSkeleton />,
  ApprovalRating: <ApprovalRatingSkeleton />,
  CheerSection: <CheerSectionSkeleton />,
  VoteCount: <VoteCountSkeleton />,
  ShareSection: <ShareSectionSkeleton />,
};

const FadeInLazyWrapper = ({ id, componentKey, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const LazyComponent = fadeImportMap[componentKey];
  if (!LazyComponent) return null;

  // 컴포넌트별 Skeleton 가져오기 (없으면 null)
  const skeleton = skeletonMap[componentKey] || null;

  const getMinHeight = () => {
    const width = window.innerWidth;

    if (componentKey === 'ShareSection') return '30vh';
    if (componentKey === 'VoteCount') return '0px';

    if (width < 768) {
      switch (componentKey) {
        case 'PolicySummary':
          return '800px';
        case 'Map':
          return '1027px';
        case 'Vote':
          return '950px';
        case 'ApprovalRating':
          return '700px';
        case 'CheerSection':
          return '963px';
        default:
          return '40vh';
      }
    }

    switch (componentKey) {
      case 'PolicySummary':
        return '1312px';
      case 'Map':
        return '1042px';
      case 'Vote':
        return '1580px';
      case 'ApprovalRating':
        return '1000px';
      case 'CheerSection':
        return '1100px';
      default:
        return '40vh';
    }
  };

  return (
    <section ref={ref} id={id} className="scroll-margin" style={{ minHeight: getMinHeight() }}>
      {inView && (
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay }}
        >
          <Suspense fallback={skeleton}>
            <LazyComponent />
          </Suspense>
        </MotionDiv>
      )}
    </section>
  );
};

export default FadeInLazyWrapper;
