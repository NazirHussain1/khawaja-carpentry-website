#!/usr/bin/env node

import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://Nazir:%40Nazir521315@cluster0.9plm9ji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const MONGODB_DB = "khawaja_carpentry";

async function cleanProductsCollection() {
  console.log('🔗 Connecting to MongoDB...');
  
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas');
    
    const db = client.db(MONGODB_DB);
    const collection = db.collection('products');
    
    // Count existing products
    const count = await collection.countDocuments();
    console.log(`📊 Found ${count} products in collection`);
    
    if (count > 0) {
      // Delete all products
      const result = await collection.deleteMany({});
      console.log(`🗑️  Deleted ${result.deletedCount} products`);
      console.log('✅ Collection cleaned successfully!');
    } else {
      console.log('✅ Collection is already empty');
    }
    
    console.log('\n🎉 MongoDB is ready for fresh deployment!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

cleanProductsCollection();
