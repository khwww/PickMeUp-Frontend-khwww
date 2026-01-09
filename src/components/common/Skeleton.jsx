const Skeleton = ({ className = '' }) => {
  return <div className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`} />;
};

// 섹션 공통 타이틀 스켈레톤
const SectionTitleSkeleton = () => {
  return (
    <div className="mb-8 flex flex-col items-center md:mb-11">
      <Skeleton className="mb-3 h-8 w-48 md:mb-[26px] md:h-14 md:w-72" />
      <Skeleton className="h-4 w-64 md:h-6 md:w-96" />
      <Skeleton className="mt-2 h-4 w-48 md:h-6 md:w-72" />
    </div>
  );
};

// 공약 요약 섹션 스켈레톤
export const PolicySummarySkeleton = () => {
  return (
    <div className="mb-32 flex flex-col items-center justify-center px-4 text-center md:px-0">
      <SectionTitleSkeleton />
      {/* 필터 버튼 */}
      <div className="mb-6 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-10 w-20 rounded-full" />
        ))}
      </div>
      {/* 후보 카드 */}
      <div className="w-full md:max-w-[730px]">
        {[1, 2].map((i) => (
          <div key={i} className="mb-6 rounded-lg border p-6 dark:border-gray-700">
            <div className="mb-4 flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
};

// 투표소 찾기 (Map) 섹션 스켈레톤
export const MapSkeleton = () => {
  return (
    <div className="mw-1280 flex flex-col items-center pb-32 md:pb-52">
      <SectionTitleSkeleton />
      {/* 검색 영역 */}
      <Skeleton className="mb-6 h-12 w-full max-w-md rounded-lg" />
      {/* 지도 영역 */}
      <Skeleton className="mb-6 h-64 w-full max-w-2xl rounded-lg md:h-96" />
      {/* 리스트 영역 */}
      <div className="w-full max-w-2xl">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="mb-3 h-16 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
};

// 모의 투표 섹션 스켈레톤
export const VoteSkeleton = () => {
  return (
    <div className="mw-1280 pb-24 md:pb-36">
      <SectionTitleSkeleton />
      {/* 지역 선택 */}
      <Skeleton className="mx-auto mb-6 h-12 w-full max-w-md rounded-lg" />
      {/* 후보 카드들 */}
      <div className="mx-auto mt-3 mb-6 flex w-full max-w-[700px] flex-col gap-3 md:mt-9 md:mb-9 md:gap-9">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-lg md:h-32" />
        ))}
      </div>
      {/* 투표 버튼 */}
      <Skeleton className="mx-auto h-12 w-32 rounded-lg" />
    </div>
  );
};

// 지지율 섹션 스켈레톤
export const ApprovalRatingSkeleton = () => {
  return (
    <div className="mw-1280 flex flex-col items-center pb-32 md:pb-52">
      <SectionTitleSkeleton />
      {/* 차트 영역 */}
      <div className="flex w-full max-w-2xl justify-center gap-4 md:gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <Skeleton className="mb-2 h-32 w-12 rounded md:h-48 md:w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

// 응원 메시지 섹션 스켈레톤
export const CheerSectionSkeleton = () => {
  return (
    <div className="mw-1280 !mb-[72px] flex flex-col items-center md:!mb-52">
      <SectionTitleSkeleton />
      {/* 입력 폼 */}
      <Skeleton className="mb-6 h-24 w-full max-w-md rounded-lg" />
      {/* 메시지 리스트 */}
      <div className="w-full max-w-2xl">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="mb-3 h-20 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
};

// VoteCount 스켈레톤
export const VoteCountSkeleton = () => {
  return (
    <div className="mw-1280 flex flex-col items-center py-12">
      <Skeleton className="mb-4 h-8 w-48" />
      <Skeleton className="h-16 w-32" />
    </div>
  );
};

// ShareSection 스켈레톤
export const ShareSectionSkeleton = () => {
  return (
    <div className="mw-1280 flex flex-col items-center py-12">
      <Skeleton className="mb-4 h-8 w-48" />
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-12 w-12 rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
