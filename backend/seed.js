/**
 * seed.js — Run once to import your db.json book data into MongoDB
 * Usage: node seed.js
 */

const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/Book");

// Data from your original db.json
const seedBooks = [
  { title: "Lord of The Rings", author: "J.R.R. Tolkien" },
  { title: "The Alchemist", author: "Paul Coelho" },
  { title: "Da Vinci Code", author: "Dan Brown" },
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing books first
    await Book.deleteMany({});
    console.log("🗑️  Cleared existing books");

    // Insert seed data
    const inserted = await Book.insertMany(seedBooks);
    console.log(`📚 Inserted ${inserted.length} books:`);
    inserted.forEach((b) => console.log(`   - ${b.title} by ${b.author}`));

    console.log("\n✅ Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
    process.exit(1);
  }
};

seedDB();
