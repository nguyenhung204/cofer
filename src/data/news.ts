import type { News } from '../types'
import summerCampaign from '../assets/cofer-hero.jpg'
import welcomeStudents from '../assets/cofer-welcome-1.jpg'
import communityHealth from '../assets/cofer-health-hero.jpg'
import clubFestival from '../assets/cofer-welcome-3.jpg'
import volunteerActivity from '../assets/cofer-volunteer-1.jpg'
export const news: News[] = [
  { id: 1, title: 'Tuổi trẻ COFER tổng kết Chiến dịch Tình nguyện Mùa hè xanh 2026', category: 'TIN ĐOÀN – HỘI', date: '18.09.2026', excerpt: 'Nhìn lại một mùa hè của xung kích, sáng tạo và những phần việc thiết thực vì cộng đồng.', image: summerCampaign },
  { id: 2, title: 'COFER chào đón Tân sinh viên Khóa 30: Bắt đầu hành trình mới', category: 'SỰ KIỆN SINH VIÊN', date: '05.09.2026', excerpt: 'Ngày hội kết nối tân sinh viên với các đơn vị Đoàn – Hội, CLB, Đội, Nhóm của trường.', image: welcomeStudents },
  { id: 3, title: 'Tuổi trẻ COFER chung tay hỗ trợ công tác khám sức khỏe cho người dân', category: 'VÌ CỘNG ĐỒNG', date: '14.08.2026', excerpt: 'Chiến sĩ áo xanh đồng hành, hướng dẫn và chăm lo cho người dân địa phương.', image: communityHealth },
  { id: 4, title: 'Không khí sôi động tại các gian hàng chào đón tân sinh viên COFER', category: 'CỘNG ĐỒNG COFER', date: '05.09.2026', excerpt: 'Nơi các CLB, Đội, Nhóm gặp gỡ những thành viên mới.', image: clubFestival },
  { id: 5, title: 'Sinh viên COFER lan tỏa tinh thần tình nguyện', category: 'HOẠT ĐỘNG ĐOÀN – HỘI', date: '12.08.2026', excerpt: 'Những hoạt động thiết thực mang màu áo xanh đến gần hơn với cộng đồng.', image: volunteerActivity },
]
