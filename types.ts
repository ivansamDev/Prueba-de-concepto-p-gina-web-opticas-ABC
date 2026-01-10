
export enum Category {
  OFTALMICAS = 'Oftálmicas',
  SOL = 'Sol',
  LENTES_CONTACTO = 'Lentes de Contacto',
  SERVICIOS = 'Servicios'
}

export enum FaceShape {
  ROUND = 'Redondo',
  OVAL = 'Ovalado',
  SQUARE = 'Cuadrado',
  HEART = 'Corazón'
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: Category;
  image: string;
  badge?: string;
  recommendedFor?: FaceShape[];
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}
