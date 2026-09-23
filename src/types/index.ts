export interface News { id: number; title: string; category: string; date: string; excerpt: string; image: string }
export interface Event { id: number; day: string; month: string; title: string; place: string; time: string; kind: string }
export interface Club { id: number; name: string; shortName: string; description: string; image: string; color: string }
export interface GalleryItem { id: number; alt: string; image: string; span?: string }
