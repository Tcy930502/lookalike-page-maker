
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Plus, Minus, Shield, Truck, RotateCcw, Home, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const productImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

  const features = [
    {
      icon: Shield,
      title: '腸道健康',
      description: '維持腸道菌群平衡，改善消化功能'
    },
    {
      icon: Sparkles,
      title: '免疫支持',
      description: '增強身體自然的抵抗力'
    },
    {
      icon: RotateCcw,
      title: '營養吸收',
      description: '促進營養素的吸收利用'
    },
    {
      icon: Home,
      title: '整體健康',
      description: '支持整體健康狀態'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <ChevronLeft className="w-4 h-4 mr-1" />
                上一頁
              </Button>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">首頁</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">產品</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">會員</a>
              </nav>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6">
                免費評估
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-square relative">
                <img 
                  src={productImages[currentImage]} 
                  alt="威德益生菌膠囊"
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-3">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src="/placeholder.svg" alt={`產品圖 ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">威德益生菌膠囊</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">威德</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.7</span>
                </div>
                <span className="text-sm text-gray-500">125 則評論</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800">限量3盒</Badge>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-800">AI 適配度：與你的健康評估特徵符合 92%</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">腸胃舒暢</Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">身強免疫力</Badge>
              <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">腸道健康</Badge>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-900">$999</span>
                <span className="text-lg text-gray-500 line-through">$1299</span>
                <Badge className="bg-red-500 text-white">限時特價</Badge>
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mt-0.5 flex-shrink-0"></div>
                <div className="space-y-1">
                  <p className="font-medium text-yellow-800">使用建議</p>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      <span>營養配方</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      <span>每日 2 粒</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      <span>連續30天</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-medium">現貨供應</span>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">數量：</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 rounded-l-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 rounded-r-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                加入購物車
              </Button>
              <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-3 text-lg">
                立即購買
              </Button>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 ${isLiked ? 'text-red-500' : 'text-gray-600'}`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  收藏
                </Button>
                <Button variant="ghost" className="flex-1 text-gray-600">
                  <Share2 className="w-5 h-5 mr-2" />
                  分享
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex space-x-8 px-8">
                <button className="py-4 border-b-2 border-blue-500 text-blue-600 font-medium">
                  商品介紹
                </button>
                <button className="py-4 text-gray-600 hover:text-gray-900">
                  成分與營養標示
                </button>
                <button className="py-4 text-gray-600 hover:text-gray-900">
                  顧客評論
                </button>
                <button className="py-4 text-gray-600 hover:text-gray-900">
                  常見問答
                </button>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Product Description */}
              <div>
                <h3 className="text-2xl font-bold mb-4">產品簡介</h3>
                <p className="text-gray-700 leading-relaxed">
                  威德益生菌膠囊採用專利包埋技術，確保益生菌能夠安全通過胃酸環境，直達腸道發揮作用。每粒含有100億CFU活性益生菌，包含多種優質菌株，有助於維持腸道菌群平衡，促進消化健康。
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">功效說明</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 rounded-lg p-3">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-700 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h3 className="text-2xl font-bold mb-6">適合族群</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="px-4 py-2 text-base">經常外食者</Badge>
                  <Badge variant="outline" className="px-4 py-2 text-base">消化不良者</Badge>
                  <Badge variant="outline" className="px-4 py-2 text-base">免疫力較弱者</Badge>
                  <Badge variant="outline" className="px-4 py-2 text-base">壓力大的上班族</Badge>
                </div>
              </div>

              {/* Warning */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">注意事項</h4>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li>• 請存放於陰涼乾燥處，避免陽光直射</li>
                      <li>• 孕婦、哺乳期婦女及特殊疾病患者請諮詢醫師後使用</li>
                      <li>• 本產品含有乳製品、對乳製品過敏者請謹慎使用</li>
                      <li>• 開封後請盡快食用完畢</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg">
          <ShoppingCart className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
