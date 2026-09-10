// ===== 呢個檔案你自己編輯, 存檔後個網頁 60 秒內自動 reload =====
// 之後加新分頁(打包清單/天氣/匯率等), 淨係要喺呢個檔案加多個 const 就得

// ---- 航班行程 (月份 0-indexed, 8 = 9月) ----
const LEGS = [
  { code:'HX81', from:'YVR', to:'HKG', date:new Date(2026,8,12, 1,30), note:'14h30m' },
  { code:'HX',   from:'HKG', to:'FUK', date:new Date(2026,8,13,10,20), note:'約4h40m' },
  { code:'HX',   from:'FUK', to:'HKG', date:new Date(2026,8,22,16, 0), note:'約4h45m' },
  { code:'HX',   from:'HKG', to:'YVR', date:new Date(2026,8,28,22,55), note:'約11h20m' },
];

// ---- 酒店行程 ----
const HOTELS = {
  "trip_name": "九州自駕 2026",
  "last_updated": "2026-08-03 手動更新",
  "items": [
    {
      "checkin": "2026-09-13",
      "checkout": "2026-09-15",
      "city": "博多",
      "hotel_name": "Hotel Oriental Express Fukuoka Nakasu Kawabata",
      "address": "6-26 Tenyamachi, Hakata Ward, Fukuoka, 812-0025, Japan",
      "lat": 33.5963489,
      "lng": 130.4089457,
      "place_id": "ChIJY87E866RQTURJFzymHniFSs",
      "confirmation": "",
      "note": ""
    },
    {
      "checkin": "2026-09-15",
      "checkout": "2026-09-16",
      "city": "由布院",
      "hotel_name": "Yufudake Ichibo no Yado Kirara",
      "address": "547-1 Yufuincho Kawaminami, Yufu, Oita 879-5103, Japan",
      "lat": 33.2545557,
      "lng": 131.3627176,
      "place_id": "ChIJn7KgWNmtRjURMCAhwyV5zxU",
      "confirmation": "",
      "note": ""
    },
    {
      "checkin": "2026-09-16",
      "checkout": "2026-09-17",
      "city": "別府",
      "hotel_name": "Grandvrio Hotel Beppuwan Wakura",
      "address": "1780-1 Hiramichi, Hiji, Hayami District, Oita 879-1508, Japan",
      "lat": 33.3497933,
      "lng": 131.4981116,
      "place_id": "ChIJFUFE8QgdRDURaAlzEQA4KEU",
      "confirmation": "",
      "note": ""
    },
    {
      "checkin": "2026-09-17",
      "checkout": "2026-09-19",
      "city": "宮崎",
      "hotel_name": "Prince Smart Inn Miyazaki",
      "address": "2 Chome-4-17 Tachibanadorinishi, Miyazaki, 880-0001, Japan",
      "lat": 31.9111526,
      "lng": 131.4219038,
      "place_id": "ChIJA2HUYq63ODURFSMyuuG-G4Y",
      "confirmation": "",
      "note": ""
    },
    {
      "checkin": "2026-09-19",
      "checkout": "2026-09-20",
      "city": "小倉",
      "hotel_name": "Arukuinkurosaki PLUS",
      "address": "2 Chome-10-2 Kurosaki, Yahatanishi Ward, Kitakyushu, Fukuoka 806-0021, Japan",
      "lat": 33.8641527,
      "lng": 130.7663071,
      "place_id": "ChIJ_89N4-fIQzURZhvwaoKvTOg",
      "confirmation": "",
      "note": ""
    },
    {
      "checkin": "2026-09-20",
      "checkout": "2026-09-22",
      "city": "博多",
      "hotel_name": "CROSS life Hakata Yanagibashi",
      "address": "1 Chome-6-5 Haruyoshi, Chuo Ward, Fukuoka, 810-0003, Japan",
      "lat": 33.5829756,
      "lng": 130.4079518,
      "place_id": "ChIJ2-I6rpmRQTURPoT9pggNqoQ",
      "confirmation": "",
      "note": ""
    }
  ]
};
