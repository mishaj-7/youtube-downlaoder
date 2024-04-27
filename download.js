const fs = require("fs");
const ytdl = require("ytdl-core");

// Replace 'VIDEO_URL' with the URL of the YouTube video you want to download
const videoUrl = "https://youtu.be/Kkht2mwSL_I?si=eBX9H5nji6vr5L8q"; // link here

// Create a stream to download the video
const stream = ytdl(videoUrl);

// Specify the file path where you want to save the video
const filePath = "./video.mp4";

// Pipe the video stream to a file
stream.pipe(fs.createWriteStream(filePath));

// Listen for events
stream.on("progress", (chunkLength, downloaded, total) => {
    
  const percent = downloaded / total;
  console.log(`Downloaded ${percent * 100}%`);
});

stream.on("end", () => {
  console.log("Download completed!");
});

stream.on("error", (error) => {
  console.error("Error:", error);
});
