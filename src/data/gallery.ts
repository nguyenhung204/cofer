import type { GalleryItem } from '../types'
import summerCampaign from '../assets/cofer-hero.jpg'
import summerSpeaker from '../assets/cofer-volunteer-1.jpg'
import welcomeCheckin from '../assets/cofer-welcome-1.jpg'
import clubFair from '../assets/cofer-welcome-3.jpg'
import communityCare from '../assets/cofer-health-hero.jpg'
export const gallery: GalleryItem[] = [
  { id: 1, alt: 'Chiến sĩ Mùa hè xanh COFER 2026 nhận khen thưởng', image: summerCampaign, span: 'md:col-span-2 md:row-span-2' },
  { id: 2, alt: 'Lễ tổng kết chiến dịch Mùa hè xanh COFER 2026', image: summerSpeaker },
  { id: 3, alt: 'Sinh viên check-in tại Ngày hội chào đón K30', image: welcomeCheckin },
  { id: 4, alt: 'Gian hàng CLB – Đội – Nhóm chào đón tân sinh viên', image: clubFair, span: 'md:col-span-2' },
  { id: 5, alt: 'Sinh viên COFER hỗ trợ người dân khám sức khỏe', image: communityCare },
]
