
# 🌟 KeenKeeper - Friendship Management App

## 📌 Project Description
KeenKeeper is a modern friendship management web application that helps users track, maintain, and nurture meaningful relationships. Users can monitor interactions, set goals, and view analytics of their communication history.

---

## 🚀 Live Demo
🔗 Live Link: https://assinment-07-keen-keper.netlify.app/

---

## 💻 GitHub Repository
🔗 Repo Link: https://github.com/toufikhossain11/assignment-07

---

## 🛠️ Technologies Used

- ⚛️ React.js
- 🎨 Tailwind CSS + DaisyUI
- 🧭 React (Manual Routing / Without Router)
- 📊 Recharts (for analytics chart)
- 🔔 React Toastify (for notifications)
- 📁 JSON (for friend data)

---

## ✨ Key Features

### 👥 Friend Management
- View all friends in a responsive grid layout
- Each friend card shows:
  - Profile picture
  - Name
  - Days since last contact
  - Tags
  - Status (with dynamic color)

---

### 📄 Friend Details Page
- Two-column layout
- Left side:
  - Profile info (image, name, bio, email, tags)
  - Action buttons (Snooze, Archive, Delete)
- Right side:
  - Stats cards (Days, Goal, Next Due Date)
  - Relationship goal section
  - Quick check-in buttons (Call, Text, Video)

---

### ⚡ Timeline System
- Automatically logs interactions when:
  - 📞 Call
  - 💬 Text
  - 🎥 Video
- Shows:
  - Date
  - Icon
  - Interaction title
- Includes filter option (Call / Text / Video)

---

### 📊 Friendship Analytics
- Pie chart visualization of interactions
- Shows count of:
  - Call
  - Text
  - Video

---

### 🎯 UI Features
- Fully responsive design (Mobile, Tablet, Desktop)
- Clean modern UI based on Figma
- Active navbar highlight
- Icons included in navigation

---

### 🔔 Extra Features
- Toast notification on interaction click
- Loading spinner while fetching data
- Custom 404 page for invalid routes
- No error on page reload after deployment

---

## 📁 Data Structure (Example)

```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}