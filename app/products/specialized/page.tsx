import { specialized } from '@/lib/products/specialized';
import ProductDetailPage from '../[id]/category-detail';

export default function SpecializedProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} categoryData={specialized} />;
}