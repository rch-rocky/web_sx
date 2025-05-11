import { ionChromatography } from '@/lib/products/ion-chromatography';
import ProductDetailPage from '../[id]/category-detail';

export default function IonChromatographyProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} categoryData={ionChromatography} />;
}