import { mycotoxin } from '@/lib/products/mycotoxin';
import ProductDetailPage from '../[id]/category-detail';

export default function MycotoxinProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} categoryData={mycotoxin} />;
}