# Willwi 官網 — Deploy-ready

## 一鍵部署到 Netlify（30 秒）

### 方法 A：Drag & Drop（最簡單）

1. 打開 https://app.netlify.com/drop
2. 登入（GitHub / Email / GitLab）
3. 把整個 **`deploy/`** 資料夾 drag-drop 進瀏覽器
4. 拿到一個 `xxx.netlify.app` URL
5. 完成

### 方法 B：Netlify CLI

```bash
cd deploy
npm install -g netlify-cli
netlify deploy --prod
```

---

## 結構

```
deploy/
├── index.html              ← 主檔（37 KB, 含粒子 JS）
├── netlify.toml            ← Netlify 配置
├── _redirects              ← 路由
├── README.md               ← 本檔
└── assets/
    └── images/             ← 34 張圖（jpg/jpeg/png）
```

---

## 客製網域（如果要）

1. Netlify Dashboard → Domain settings → Add custom domain
2. 輸入 `yourdomain.com`
3. Netlify 給你 DNS 設定
4. 在你的 DNS provider（Cloudflare / GoDaddy）設定 CNAME 指向 Netlify
5. 自動 HTTPS（Let's Encrypt）

---

## 內容

- Hero (willwi-hero-desktop-brand)
- About (Willwi 2026official-portrait)
- Works · 14 Releases（粒子背景）
- Enter（兩個子站入口：情緒捷運線 + 作品 Archive）
- Custom Music（一首歌的真實成本結構）
- Live（現場）
- Studio（錄音室）
- Editorial · 編輯推薦（9 張 Spotify 社群卡）
- Credentials（4 張證書）
- Contact（Spotify / Apple Music / YouTube / Instagram / LINE）
- 全站粒子動畫（432 顆粒子 + 滑鼠互動）

---

## 注意事項

- mockup v4 / 2026-08-25 製作
- 8 個 Works 封面是「待替換」placeholder（my-image 1~8, Spotify 社群卡暫代）
- 上線前建議把 8 個 placeholder 換成真實專輯封面
- Custom Music section 公開了報價（NT$18,000 / 38,000 / 55,000 / 90,000+），上線前請確認
