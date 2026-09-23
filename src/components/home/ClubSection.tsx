import { clubs } from '../../data/clubs'
import { SectionHeading } from '../ui/SectionHeading'
import { ClubCard } from './ClubCard'
export function ClubSection() { return <section className="section-space bg-slate-50" id="gioi-thieu"><div className="page-shell"><SectionHeading eyebrow="KHÁM PHÁ CỘNG ĐỒNG" title="CLB – ĐỘI – NHÓM" action="Xem tất cả CLB" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{clubs.map(club => <ClubCard club={club} key={club.id} />)}</div></div></section> }
