import { CalendarDays } from 'lucide-react'
import { events } from '../../data/events'
import { SectionHeading } from '../ui/SectionHeading'
import { EventCard } from './EventCard'
export function UpcomingEvents() { return <section className="bg-[#06265a] py-12 sm:py-16" id="hoat-dong"><div className="page-shell grid max-w-5xl gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14"><div><SectionHeading eyebrow="ĐỪNG BỎ LỠ" title="HOẠT ĐỘNG SẮP DIỄN RA" invert action="Lịch hoạt động" /><p className="max-w-sm text-sm leading-relaxed text-blue-100">Thêm trải nghiệm, thêm bạn bè, thêm những dấu ấn đáng nhớ của tuổi trẻ COFER.</p><div className="mt-8 hidden h-28 w-28 place-items-center rounded-full border border-white/15 text-blue-200 lg:grid"><CalendarDays size={42} strokeWidth={1.4} /></div></div><div className="grid gap-3">{events.map(event => <EventCard key={event.id} event={event} />)}</div></div></section> }
