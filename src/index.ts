import express, { Request, Response } from "express";
import cors from "cors";
import { publicRouter } from "./app/router/api";
import multer from "multer";
import path from "path";
import supabase from "./app/database";

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());

app.use(publicRouter);

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "no file uploaded" });
    }

    const filename = `${Date.now()}-${file.originalname}`;

    const { data, error } = await supabase.storage
      .from("product")
      .upload(filename, file.buffer, {
        upsert: true,
        contentType: file.mimetype,
      });

    if (error) {
      throw res.json({ error: error });
    }

    const path = supabase.storage.from("product").getPublicUrl(filename);

    res.json({url: path.data.publicUrl})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error uploading file' });
  }
});

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
