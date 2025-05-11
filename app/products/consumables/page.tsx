import { consumables } from '@/lib/products/consumables';
import ProductDetailPage from '../[id]/category-detail';

export default function ConsumablesProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} categoryData={consumables} />;
}