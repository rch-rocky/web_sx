import { notFound } from 'next/navigation'
import { spe } from '@/lib/products/spe'
import { quechers } from '@/lib/products/quechers'
import { ionChromatography } from '@/lib/products/ion-chromatography'
import { consumables } from '@/lib/products/consumables'
import { mycotoxin } from '@/lib/products/mycotoxin'
import { specialized } from '@/lib/products/specialized'
import ProductDetail from './product-detail'

export default async function Page({ params }: { params: { id: string; productId: string } }) {
  const { id, productId } = await params
  const category = 
  id === 'spe' ? spe :
  id === 'quechers' ? quechers :
  id === 'ion-chromatography' ? ionChromatography :
  id === 'consumables' ? consumables :
  id === 'mycotoxin' ? mycotoxin :
  id === 'specialized' ? specialized :
  spe
  
  // Find product in all subcategories
  let product: any = null
  
  try {
    if (category.subcategories) {
      product = category.subcategories
        .flatMap(sc => sc.products || [])
        .find(p => p.id === productId)
    } else if (category.products) {
      product = category.products.find(p => p.id === productId)
    }
    
    if (!product) {
      console.error(`Product not found: ${productId}`)
      notFound()
    }
    
    return <ProductDetail product={product} />
  } catch (error) {
    console.error('Error loading product:', error)
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Error loading product</h1>
        <p className="text-gray-600 mb-6">Please try again later.</p>
        <Link href="/products" className="text-primary font-medium flex items-center">
          <ArrowLeft className="mr-1 h-4 w-4" /> Return to product list
        </Link>
      </div>
    )
  }
}