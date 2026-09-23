import { news } from '../../data/news'
import { SectionHeading } from '../ui/SectionHeading'
import { NewsCard } from './NewsCard'
export function FeaturedNews() { return <section className="section-space" id="tin-tuc"><div className="page-shell"><SectionHeading eyebrow="NHỊP SỐNG SINH VIÊN" title="TIN TỨC NỔI BẬT" href="#" /><div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-[1.14fr_.86fr]"><div className="grid gap-4"><NewsCard item={news[0]} featured /><NewsCard item={news[4]} /></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{news.slice(1, 4).map(item => <NewsCard key={item.id} item={item} />)}</div></div></div></section> }
