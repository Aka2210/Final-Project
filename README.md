# Final-Project — 小鎮風雲 (Web Puzzle Game)

大一《程式設計 / 網頁設計》期末專題，使用 **純原生 HTML / CSS / JavaScript + PHP + MySQL** 製作的瀏覽器解謎遊戲。  
專案 **不使用任何前端框架（如 Vue、React）**，目的是扎實練習基礎網頁三語言與簡單後端整合。

---

## 🔍 專案簡介

- 類型：密室逃脫 / 解謎 / 恐怖氛圍的故事型網頁遊戲  
- 視角：第一人稱偵探視角  
- 特點：
  - 多畫面、多關卡的互動式解謎流程
  - 透過 DOM 操作與事件監聽實作互動（點擊物件、選項、對話分支）
  - 具備登入 / 註冊與基本後端邏輯（PHP + SQL）

---

## 🧱 技術架構（Tech Stack）

**Frontend**

- HTML5：頁面結構、遊戲場景切換
- CSS3：版面配置、按鈕與文字風格、簡單動態效果
- JavaScript (Vanilla)：
  - 控制遊戲流程（關卡狀態、計時、條件判斷）
  - DOM 操作（顯示 / 隱藏提示、更新文字內容、控制按鈕互動）
  - 基本輸入驗證與錯誤提示

**Backend**

- PHP：
  - 登入 / 註冊流程（`index.php`, `login.php`, `loginJudge.php` 等）
  - 與資料庫溝通，驗證帳密
- SQL / MySQL：
  - 使用 `sql/` 資料夾內的 SQL script 建立相關資料表
  - 儲存使用者帳號等資訊（依課程需求設計）

---

## 📁 專案結構概要

```bash
Final-Project/
├── asset/          # 圖片、音效等遊戲素材
├── gameContent/    # 關卡相關的靜態資源或片段內容
├── signup/         # 註冊頁面相關檔案
├── sql/            # 資料庫 schema / 建表 SQL
├── src/            # JavaScript 遊戲邏輯與輔助程式碼
├── style/          # CSS 樣式
├── index.php       # 首頁 / 入口，可能含登入或導向
├── login.php       # 登入頁面
├── loginJudge.php  # 登入驗證處理
└── README.md

## 🎮 遊戲與互動設計（技術視角）

- 多關卡解謎流程由前端 JavaScript 控制「狀態機」：
  - 不同關卡對應不同畫面區塊
  - 透過點擊物件 / 選項觸發事件，更新當前狀態
- 利用事件監聽（`addEventListener`）與 DOM 操作：
  - 顯示 / 隱藏提示文字或圖片
  - 動態改變按鈕功能與可見性
- 部分關卡有時間限制或條件判斷：
  - 例如：解出密碼、回答問題才能進入下一階段
- 使用 PHP + SQL：
  - 實作基本帳號系統，體驗最基本的「全端」開發流程
  - 練習前後端資料傳遞（表單 → PHP → 資料庫）

---

## 🚀 專案執行方式（本機開發環境）

### 1. Clone 專案

```bash
git clone https://github.com/Aka2210/Final-Project.git
cd Final-Project
```

### 2. 設定 Web Server

建議使用其中一種：

- XAMPP  
- WAMP  
- MAMP  

將此專案放到對應的 web root，例如（以 XAMPP 為例）：

```text
htdocs/Final-Project
```

### 3. 建立資料庫

- 開啟 phpMyAdmin 或其他 MySQL 管理工具。
- 建立一個新的資料庫（例如 `final_project`）。
- 匯入 `sql/` 資料夾中的 `.sql` 檔，建立使用者相關資料表。
- 視需要修改 PHP 檔案中的資料庫設定（`host`、`user`、`password`、`dbname`）。

---

### 4. 執行專案

在瀏覽器開啟：

- `http://localhost/Final-Project/index.php`

即可進入登入 / 遊戲入口頁面。

---

### 🧠 在這個專案中學到的東西

#### 1. 打好原生 Web 基礎

在不能使用 Vue / React 等框架的前提下，熟悉：

- HTML 結構化標記
- CSS 版面配置與樣式
- 原生 JavaScript 事件與流程控制

#### 2. 理解前後端合作的最基本模式

- 前端：處理互動、畫面顯示、關卡邏輯  
- 後端：帳號系統、資料驗證、資料庫存取

#### 3. 初步體會狀態管理的重要性

解謎遊戲本質上是「狀態機」：

- 玩家選擇 → 更新狀態 → 切換畫面 / 劇情

如果狀態沒有規劃好，程式會變得非常難維護。

#### 4. 從「可以玩」到「可以展示」的作品思維

不只是讓遊戲跑起來，而是讓：

- 專案結構清楚
- README 說明完整

---

### 📝 備註

- 專案性質：大一課程期末專案，不使用前端框架，強調 **基礎 Web 三語言（HTML / CSS / JS）+ PHP + MySQL** 的掌握。
