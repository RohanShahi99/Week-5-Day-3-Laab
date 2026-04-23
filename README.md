# Book List App — MongoDB Version

Converted from JSON Server to a full **Express + MongoDB + React** stack.

## Project Structure

```
booklist-mongodb/
├── backend/
│   ├── models/
│   │   └── Book.js        ← Mongoose schema
│   ├── server.js          ← Express API (CRUD routes)
│   ├── seed.js            ← One-time import of db.json data
│   ├── .env               ← MongoDB connection string (NOT committed to git)
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Lists.js       ← Book table
    │   │   ├── CreateList.js  ← Add Book modal
    │   │   ├── UpdateList.js  ← Edit Book modal
    │   │   └── DeleteList.js  ← Delete Book modal
    │   ├── App.js             ← Main component + all fetch calls
    │   └── index.js
    └── package.json
```

---

## Setup Instructions

### 1. MongoDB Atlas (or Local)

**Option A — Atlas (recommended):**
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and create a free cluster
2. Click **Connect** → **Drivers** and copy your connection string
3. Replace the `MONGO_URI` in `backend/.env`

**Option B — Local MongoDB:**
```
MONGO_URI=mongodb://localhost:27017/booklist
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

**Seed the database** (imports your original db.json books):
```bash
node seed.js
```

**Start the server:**
```bash
npm run dev     # with nodemon (auto-restart)
# or
npm start       # without nodemon
```

Server runs on **http://localhost:5000**

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

App runs on **http://localhost:3000**  
The `"proxy": "http://localhost:5000"` in `package.json` forwards all `/api` calls to the backend.

---

## API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | /api/books       | Get all books      |
| GET    | /api/books/:id   | Get one book       |
| POST   | /api/books       | Create a book      |
| PUT    | /api/books/:id   | Update a book      |
| DELETE | /api/books/:id   | Delete a book      |

---

## Key Differences from JSON Server Version

| Feature        | Old (JSON Server)        | New (MongoDB)                  |
|----------------|--------------------------|--------------------------------|
| Database       | `db.json` flat file      | MongoDB collection             |
| ID field       | `id` (number)            | `_id` (ObjectId string)        |
| Backend        | `json-server` package    | Custom Express server          |
| API port       | 5000 (json-server)       | 5000 (Express)                 |
| Data persists  | File on disk             | MongoDB (local or Atlas cloud) |
| Nav bar        | Present                  | Removed (loads list on mount)  |

---

## .gitignore (add to both folders)

```
node_modules/
.env
```
"# Week-5-Day-3-Laab" 
"# WEB-403-Wk-5-Lab" 
"# WEB-403-Wk-5-Lab" 
"# WEB-403-Wk-5-Lab" 
