// import express from "express";
// import mongoose from "mongoose";
// import authRoutes from "./routes/auth.js";  // auth.js ko import karo

// // MongoDB connection string
// const mongodbUri = "mongodb+srv://HaseebKhatri:haseebkhatri123@cluster0.qnqq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Function to connect to the MongoDB database
// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(mongodbUri, {
//       dbName: "HackathonDatabase",  // Set your database name here
//     });

//     console.log(`\n🌿 MongoDB connected successfully to ${connectionInstance.connection.name}! 🍃\n`);

//     mongoose.connection.on("error", console.error.bind(console, "Connection error:"));

//     process.on("SIGINT", () => {
//       mongoose.connection.close(() => {
//         console.log("Mongoose connection closed due to application termination.");
//         process.exit(0);
//       });
//     });
//   } catch (error) {
//     console.error("MONGODB connection FAILED: ", error);
//     process.exit(1); // Exits the process with an error code
//   }
// };

// // Initialize Express app
// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json());

// // Setup routes
// app.use("/auth", authRoutes); // auth.js ke routes ko "/auth" prefix ke sath use karo

// // Connect to MongoDB
// connectDB();

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";  // Import cors package
// import authRoutes from "./routes/auth.js";  // auth.js ko import karo

// // MongoDB connection string
// const mongodbUri = "mongodb+srv://HaseebKhatri:haseebkhatri123@cluster0.qnqq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Function to connect to the MongoDB database
// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(mongodbUri, {
//       dbName: "HackathonDatabase",  // Set your database name here
//     });

//     console.log(`\n🌿 MongoDB connected successfully to ${connectionInstance.connection.name}! 🍃\n`);

//     mongoose.connection.on("error", console.error.bind(console, "Connection error:"));

//     process.on("SIGINT", () => {
//       mongoose.connection.close(() => {
//         console.log("Mongoose connection closed due to application termination.");
//         process.exit(0);
//       });
//     });
//   } catch (error) {
//     console.error("MONGODB connection FAILED: ", error);
//     process.exit(1); // Exits the process with an error code
//   }
// };

// // Initialize Express app
// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: [
//     "http://localhost:5173", 
//     "https://frontend-frontend.surge.sh", 
//     "http://localhost:3001" // Added localhost:3001
//   ],
//     methods: ["GET", "POST", "PUT", "DELETE"],  // Allow required HTTP methods
//   credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Middleware to parse JSON requests
// app.use(express.json());

// // Setup routes
// app.use("/auth", authRoutes); // auth.js ke routes ko "/auth" prefix ke sath use karo

// // Connect to MongoDB
// connectDB();

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";  
// import authRoutes from "./routes/auth.js";  // auth.js ko import karo
// import addFundRoutes from "./routes/addfund.js";  // addfund.js ko import karo

// // MongoDB connection string
// const mongodbUri = "mongodb+srv://HaseebKhatri:haseebkhatri123@cluster0.qnqq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Function to connect to the MongoDB database
// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(mongodbUri, {
//       dbName: "HackathonDatabase",  // Set your database name here
//     });

//     console.log(`\n🌿 MongoDB connected successfully to ${connectionInstance.connection.name}! 🍃\n`);

//     mongoose.connection.on("error", (error) => {
//       console.error("MongoDB connection error:", error);
//     });

//     process.on("SIGINT", () => {
//       mongoose.connection.close(() => {
//         console.log("Mongoose connection closed due to application termination.");
//         process.exit(0);
//       });
//     });
//   } catch (error) {
//     console.error("MONGODB connection FAILED: ", error);
//     process.exit(1); // Exits the process with an error code
//   }
// };

// // Initialize Express app
// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: [
//     "http://localhost:5173", 
//     "https://frontend-frontend.surge.sh", 
//     "http://localhost:3001"  // Added localhost:3001
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],  // Allow required HTTP methods
//   credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Middleware to parse JSON requests
// app.use(express.json());

// // Setup routes
// app.use("/auth", authRoutes); // auth.js ke routes ko "/auth" prefix ke sath use karo
// app.use("/api/funds", addFundRoutes); // Addfund route ko "/api/funds" prefix ke sath use karo

// // Connect to MongoDB
// connectDB();

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




import express from "express";
import mongoose from "mongoose";
import cors from "cors";  
import authRoutes from "./routes/auth.js";  // auth.js ko import karo
import addFundRoutes from "./routes/addfund.js";  // addfund.js ko import karo

// MongoDB connection string
const mongodbUri = "mongodb+srv://HaseebKhatri:haseebkhatri123@cluster0.qnqq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(mongodbUri, {
      dbName: "HackathonDatabase",  // Set your database name here
    });

    console.log(`\n🌿 MongoDB connected successfully to ${connectionInstance.connection.name}! 🍃\n`);

    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("Mongoose connection closed due to application termination.");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("MONGODB connection FAILED: ", error);
    process.exit(1); // Exits the process with an error code
  }
};

// Initialize Express app
const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    "http://localhost:5173", 
    "https://front-end-haseeb.vercel.app", 
    "http://localhost:3001"  // Added localhost:3001
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allow required HTTP methods
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Setup routes
app.use("/auth", authRoutes); // auth.js ke routes ko "/auth" prefix ke sath use karo
app.use("/api/funds", addFundRoutes); // Addfund route ko "/api/funds" prefix ke sath use karo

// Connect to MongoDB
connectDB();

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
