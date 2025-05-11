import { quechers } from '@/lib/products/quechers';
import ProductDetailPage from '../[id]/category-detail';

export default function QuEChERSProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} categoryData={quechers} />;
}