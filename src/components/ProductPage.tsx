
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Plus, Minus, Shield, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('商品介紹');

  const productImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

  const tabs = ['商品介紹', '成分與營養標示', '顧客評論'];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 p-0">
              <ChevronLeft className="w-4 h-4 mr-1" />
              上一頁
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square">
              <img 
                src={productImages[currentImage]} 
                alt="威德益生菌膠囊"
                className="w-full h-full object-cover"
              />
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-3">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src="/placeholder.svg" alt={`產品圖 ${index + 1}`} className="w-full h-full object-cover bg-gray-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">威德 益生菌膠囊</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm font-medium">威德</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">4.7</span>
                </div>
                <span className="text-sm text-gray-500">125 則評論</span>
                <Badge className="bg-red-100 text-red-700 text-xs px-2 py-1">限時特惠</Badge>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-gray-900">$999</span>
                <span className="text-lg text-gray-500 line-through">$1299</span>
              </div>
            </div>



            {/* Usage Instructions */}
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mt-1 flex-shrink-0"></div>
                <div className="space-y-2">
                  <p className="font-medium text-yellow-800 text-sm">使用建議</p>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                      <span>營養配方</span>
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                      <span>每日 2 粒</span>
                      <div className="w-6 h-4 bg-blue-600 text-white text-xs flex items-center justify-center rounded">S</div>
                      <span>連續30天</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-sm">數量：</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 text-gray-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm font-medium rounded-lg">
                加入購物車
              </Button>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-sm font-medium rounded-lg">
                立即購買
              </Button>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 text-sm ${isLiked ? 'text-red-500' : 'text-gray-600'}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  收藏
                </Button>
                <Button variant="ghost" className="flex-1 text-gray-600 text-sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  分享
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="bg-white">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="py-8 space-y-8">
              {activeTab === '商品介紹' && (
                <>
                  {/* Product Description */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">產品簡介</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      威德益生菌膠囊採用專利包埋技術，確保益生菌能夠安全通過胃酸環境，直達腸道發揮作用。每粒含有100億CFU活性益生菌，包含多種優質菌株，有助於維持腸道菌群平衡，促進消化健康。
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">功效說明</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 text-sm">腸道健康</h4>
                        </div>
                        <p className="text-gray-700 text-xs">維持腸道菌群平衡，改善消化功能</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 text-sm">免疫支持</h4>
                        </div>
                        <p className="text-gray-700 text-xs">增強身體自然的免疫力</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 text-sm">營養吸收</h4>
                        </div>
                        <p className="text-gray-700 text-xs">促進營養素的吸收利用</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 text-sm">整體健康</h4>
                        </div>
                        <p className="text-gray-700 text-xs">支持整體健康狀態</p>
                      </div>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">適合族群</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1 text-xs bg-gray-50">經常外食者</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-xs bg-gray-50">消化不良者</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-xs bg-gray-50">免疫力較弱者</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-xs bg-gray-50">壓力大的上班族</Badge>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2 text-sm">注意事項</h4>
                        <ul className="space-y-1 text-red-700 text-xs">
                          <li>• 請存放於陰涼乾燥處，避免陽光直射</li>
                          <li>• 孕婦、哺乳期婦女及特殊疾病患者請諮詢醫師後使用</li>
                          <li>• 本產品含有乳製品，對乳製品過敏者請謹慎使用</li>
                          <li>• 開封後請盡快食用完畢</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === '成分與營養標示' && (
                <>
                  {/* Ingredients */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">主要成分</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-medium text-sm">乳酸菌混合物</span>
                        <span className="text-sm text-gray-600">100億CFU</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-medium text-sm">嗜酸乳桿菌</span>
                        <span className="text-sm text-gray-600">30億CFU</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-medium text-sm">雙歧桿菌</span>
                        <span className="text-sm text-gray-600">25億CFU</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-medium text-sm">植物乳桿菌</span>
                        <span className="text-sm text-gray-600">20億CFU</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">其他輔助菌株</span>
                        <span className="text-sm text-gray-600">25億CFU</span>
                      </div>
                    </div>
                  </div>

                  {/* Nutrition Facts */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">營養標示 (每粒)</h3>
                    <div className="bg-white border border-gray-200 rounded-lg">
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg">
                        <h4 className="font-bold text-sm">營養成分表</h4>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-sm">熱量</span>
                          <span className="text-sm font-medium">2大卡</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-sm">蛋白質</span>
                          <span className="text-sm font-medium">0.1公克</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-sm">脂肪</span>
                          <span className="text-sm font-medium">0.05公克</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-sm">碳水化合物</span>
                          <span className="text-sm font-medium">0.3公克</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">鈉</span>
                          <span className="text-sm font-medium">1毫克</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Usage Instructions */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">食用方法</h3>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• 每日2粒，餐後食用</li>
                        <li>• 配合溫開水吞服</li>
                        <li>• 建議連續食用30天以上</li>
                        <li>• 請勿與熱水一同服用</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {activeTab === '顧客評論' && (
                <>
                  {/* Reviews Summary */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">顧客評論</h3>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-3xl font-bold text-gray-900">4.7</div>
                        <div>
                          <div className="flex mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">基於125則評論</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center space-x-2">
                            <span className="text-xs w-6">{stars}星</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-yellow-400 h-2 rounded-full" 
                                style={{width: stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '5%' : stars === 2 ? '3%' : '2%'}}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-600 w-8">
                              {stars === 5 ? '87' : stars === 4 ? '25' : stars === 3 ? '6' : stars === 2 ? '4' : '3'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">李</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-sm">李小姐</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">2024年6月15日</span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">
                            使用了一個月後，明顯感覺消化變好了，之前經常脹氣的問題也改善很多。包裝很方便攜帶，會繼續購買。
                          </p>
                          <div className="text-xs text-gray-500">已購買：威德益生菌膠囊 60粒裝</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium text-sm">王</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-sm">王先生</span>
                            <div className="flex">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="w-3 h-3 text-gray-300" />
                            </div>
                            <span className="text-xs text-gray-500">2024年6月10日</span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">
                            產品效果不錯，但是價格稍微偏高。服用後腸胃確實比較舒服，推薦給有腸胃問題的朋友。
                          </p>
                          <div className="text-xs text-gray-500">已購買：威德益生菌膠囊 30粒裝</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">陳</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-sm">陳太太</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">2024年6月5日</span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">
                            很棒的產品！我是上班族，經常外食，自從開始吃這個益生菌後，消化問題明顯改善。膠囊很好吞，沒有異味。
                          </p>
                          <div className="text-xs text-gray-500">已購買：威德益生菌膠囊 60粒裝</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
