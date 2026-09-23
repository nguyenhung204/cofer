import type { Club } from '../types'
import welcomeClub from '../assets/cofer-welcome-3.jpg'
import youthTeam from '../assets/cofer-welcome-2.jpg'
import summerStage from '../assets/cofer-volunteer-1.jpg'
import healthVolunteer from '../assets/cofer-health-1.jpg'
export const clubs: Club[] = [
  { id: 1, name: 'Câu lạc bộ Truyền thông', shortName: 'COFER MEDIA', description: 'Kể những câu chuyện đẹp của sinh viên COFER.', image: youthTeam, color: 'bg-[#e9f1ff] text-[#1c5cb8]' },
  { id: 2, name: 'Câu lạc bộ Tiếng Anh', shortName: 'COFER EC', description: 'Không gian thực hành và kết nối bằng tiếng Anh.', image: welcomeClub, color: 'bg-[#fff0ed] text-[#ce4d31]' },
  { id: 3, name: 'Đội Công tác Xã hội', shortName: 'COFER CTXH', description: 'Chia sẻ, hành động và lan tỏa điều tử tế.', image: healthVolunteer, color: 'bg-[#eaf8f3] text-[#187656]' },
  { id: 4, name: 'Câu lạc bộ Văn nghệ', shortName: 'COFER ARTS', description: 'Nơi đam mê sân khấu, âm nhạc được cất lời.', image: summerStage, color: 'bg-[#f4efff] text-[#6844b5]' },
]
