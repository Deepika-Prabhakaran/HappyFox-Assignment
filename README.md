# Happy Organize  – HappyFox Frontend Assignment

**Happy Organize** is a modern, interactive tool for visualizing and managing employee hierarchies.  
It provides a real-time, drag-and-drop interface to restructure reporting lines, filter by team, and simulate organizational changes — all with a clean, responsive UI and mock backend integration.

🎯 Built as a frontend assignment for **HappyFox**.

---

## 🔗 Hosted Link

**Live Demo**: [happy-organize.vercel.app](https://happy-organize.vercel.app/)  
(Recommended: Desktop View for full chart experience)

---

## 📸 Screenshots

### ✅ Home Page – Project Overview & Features

![Homepage Screenshot](screenshots/homepage.png)

### 🧩 Org Chart Interaction

![Org Chart Screenshot](screenshots/chart.png)

### 🔄 Drag & Drop Manager Reassignment

![Drag Drop Screenshot](screenshots/dragdrop.png)

---

## ⚙️ Features

- 📋 **Employee List** – Fetches and displays employee details (name, designation, team).
- 🔍 **Search & Filter** – Filter employees by team or name in real-time.
- 📊 **Org Chart View** – Hierarchy chart rendered from manager relationships.
- 🔄 **Drag & Drop Updates** – Reassign employees live using React DnD.
- 🚫 **Validation Logic** – Prevents circular hierarchies, CEO misplacement, and duplicate updates.
- 🧪 **Unit Tests** – Critical test cases implemented using React Testing Library and Jest.
- ⚡ **Zero Backend Setup** – MirageJS simulates a real backend.

---

## 🛠️ Tech Stack

| Area             | Technology Used                |
|------------------|--------------------------------|
| Frontend         | React.js                       |
| State/Events     | React Hooks                    |
| Drag & Drop      | React DnD                      |
| Mock Backend     | MirageJS                       |
| Chart Logic      | Custom Tree Renderer using managerId |
| Styling          | Vanilla CSS                    |
| Testing          | React Testing Library, Jest    |
| Deployment       | Vercel                         |

---

## 📁 Folder Structure

