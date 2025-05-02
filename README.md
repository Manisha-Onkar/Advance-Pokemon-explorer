# Advanced Pokémon Explorer

An advanced, feature-rich Pokémon explorer built with React, TypeScript, and the PokeAPI. This project is the second assignment in a two-part series and expands on the previous version by adding advanced data display, interactivity, and persistent state.

## 🔎 Overview

This app allows users to:

- Browse Pokémon with pagination
- Search and filter by multiple types
- Sort by ID and name
- View detailed Pokémon data including stats, abilities, moves, and evolution chains
- Mark favorites and persist them using localStorage
- Compare Pokémon side-by-side
- Load a random Pokémon with one click


### ✅ Enhanced List View

- Pagination (10, 20, 50 items per page)
- Sorting by ID and Name (A-Z, Z-A)
- Multi-select type filtering
- Responsive grid display

### 🧬 Detailed Pokémon View

- Complete stats: HP, Attack, Defense, etc.
- Abilities and move list
- Evolution chain
- Clean route-based navigation using React Router

### ⭐ Favorites System

- Add/remove Pokémon from favorites
- Persistent favorites via `localStorage`
- Separate “Favorites” view

### ⚔️ Comparison Tool

- Select two Pokémon to compare stats side-by-side
- Clear and intuitive comparison UI

### 🎲 Random Pokémon

- Instantly load a random Pokémon from the dataset

### ⚠️ Error Boundaries

- Wrapped app in error boundaries to prevent full app crashes

## 🧠 Technical Stack

- **React** with **TypeScript**
- **React Router** for navigation
- **Context API** for state management
- **Custom Hooks** for logic reuse
- **TailwindCSS** for styling
- **PokeAPI** for data
- **useMemo/useCallback** for performance optimization


## ⚠️ Challenges Faced

- **PokeAPI Complexity**: Handling deeply nested structures like evolution chains required recursive functions and careful async control.
- **TypeScript Strictness**: Dealing with inconsistent or optional API fields meant writing robust type definitions and fallbacks.
- **Performance Tuning**: Avoiding unnecessary re-renders in large lists by leveraging `useMemo`, `useCallback`, and `React.memo`.
- **Favorites Persistence**: Syncing UI state with `localStorage` while using Context API without causing race conditions.
- **Comparison Logic**: Creating a seamless UI for comparing stats and handling edge cases like incomplete data.
- **Merge Conflicts**: Faced initial push issues due to remote `README.md`; resolved by merging and resolving conflicts manually.

## 🛠️ Getting Started

```bash
# Clone the repo
git clone https://github.com/Manisha-Onkar/Advance-Pokemon-explorer.git

# Navigate into the project
cd Advance-Pokemon-explorer

# Install dependencies
npm install

# Start development server
npm run dev


