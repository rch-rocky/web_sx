import { spe } from '@/lib/products/spe';
import ProductDetailPage from '../[id]/category-detail';

export default function SPEProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} categoryData={spe} />;
}