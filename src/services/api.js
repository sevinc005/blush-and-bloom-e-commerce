const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';

// Kəşin etibarlılıq müddəti (30 dəqiqə = 30 * 60 * 1000 milisaniyə)
const CACHE_DURATION = 30 * 60 * 1000;

export const fetchProductsByBrand = async (brandName) => {
  const cacheKey = `products_${brandName || 'all'}`;
  const cachedData = localStorage.getItem(cacheKey);
  const cacheTimeKey = `${cacheKey}_time`;
  const cachedTime = localStorage.getItem(cacheTimeKey);

  const now = new Date().getTime();

  // Əgər kəşdə məlumat varsa VƏ 30 dəqiqə keçməyibsə, kəşdən qaytar
  if (cachedData && cachedTime && (now - parseInt(cachedTime, 10) < CACHE_DURATION)) {
    return JSON.parse(cachedData);
  }

  try {
    const url = (brandName && brandName !== 'all')
      ? `${BASE_URL}?brand=${brandName}`
      : BASE_URL;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('API-dən cavab alınarkən xəta baş verdi');
    }

    const data = await response.json();
    
    // Alınan datanı və yüklənmə vaxtını LocalStorage-ə yazırıq
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(cacheTimeKey, now.toString());

    return data;
  } catch (error) {
    // Əgər API donarsa və ya internet kəsilərsə, heç olmasa köhnə kəş varsa onu qaytarır
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    return [];
  }
};
export const fetchProductsByCategory = async (category) => {
  try {
    if (!category || category === 'all') {
      return await fetchProductsByBrand('all');
    }
    const response = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Kateqoriya məhsulları gətirilərkən xəta baş verdi:", error);
    return [];
  }
};