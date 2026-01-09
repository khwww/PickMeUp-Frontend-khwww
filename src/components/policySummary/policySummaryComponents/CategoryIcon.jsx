import BarChartIcon from '@/assets/icons/bar-chart.svg?react';
import BookIcon from '@/assets/icons/book.svg?react';
import MapPinIcon from '@/assets/icons/map-pin.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
import UserPlusIcon from '@/assets/icons/user-plus.svg?react';
import BriefcaseIcon from '@/assets/icons/briefcase.svg?react';

const iconMap = {
  '주요 공약': { icon: StarIcon, color: 'text-yellow-500' },
  '정치・개헌': { icon: BookIcon, color: 'text-purple-500' },
  '경제・AI': { icon: BarChartIcon, color: 'text-green-500' },
  지역균형발전: { icon: MapPinIcon, color: 'text-blue-500' },
  '청년・주거・일자리': { icon: UserPlusIcon, color: 'text-orange-500' },
  '노동・복지': { icon: BriefcaseIcon, color: 'text-red-500' },
};

const CategoryIcon = ({ category }) => {
  const IconComponent = iconMap[category]?.icon;
  const colorClass = iconMap[category]?.color || 'text-gray-400';

  return IconComponent ? (
    <span className={`text-2xl ${colorClass}`}>
      <IconComponent />
    </span>
  ) : null;
};

export default CategoryIcon;
