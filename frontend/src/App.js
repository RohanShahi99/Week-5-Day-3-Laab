import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/Lists";
import CreateList from "./components/CreateList";

// All API calls point to our Express/MongoDB backend
const API_URL = "/api/books";

function App() {
  const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState({ title: "", author: "" });

  // ── Load all books when the app first mounts ───────────────────────────────
  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setAllData(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  // ── Fetch a single book (for Update / Delete modals) ───────────────────────
  const getBook = async (evt, id) => {
    evt.preventDefault();
    try {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();
      // MongoDB uses _id; map it so modal inputs are pre-filled
      setSingleData({ title: data.title, author: data.author });
    } catch (err) {
      console.error("Error fetching book:", err);
    }
  };

  // ── Handle controlled input changes in modals ──────────────────────────────
  const handleChange = (e) => {
    setSingleData({ ...singleData, [e.target.name]: e.target.value });
  };

  // ── CREATE ─────────────────────────────────────────────────────────────────
  const createBook = async () => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(singleData),
      });
      setSingleData({ title: "", author: "" });
      fetchAllBooks();
    } catch (err) {
      console.error("Error creating book:", err);
    }
  };

  // ── UPDATE ─────────────────────────────────────────────────────────────────
  const updateBook = async (evt, id) => {
    evt.preventDefault();
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(singleData),
      });
      setSingleData({ title: "", author: "" });
      fetchAllBooks();
    } catch (err) {
      console.error("Error updating book:", err);
    }
  };

  // ── DELETE ─────────────────────────────────────────────────────────────────
  const deleteBook = async (evt, id) => {
    evt.preventDefault();
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setSingleData({ title: "", author: "" });
      fetchAllBooks();
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Book List</h2>

      {/* Create button — opens modal */}
      <CreateList
        singledata={singleData}
        handleChange={handleChange}
        createList={createBook}
      />

      {/* Book table — loads immediately on mount */}
      <div className="mt-4">
        <Lists
          alldata={allData}
          singledata={singleData}
          getList={getBook}
          updateList={updateBook}
          deleteList={deleteBook}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
