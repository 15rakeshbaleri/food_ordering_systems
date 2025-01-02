const upload_preset = "eatonclick";
const cloud_name = "dkxndlbpq";

// Assuming the function is in 'cloudinary.js'
export const uploadImagetoCloudnary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", upload_preset);
  data.append("cloud_name", cloud_name);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const imageData = await response.json();
  return imageData.secure_url;
};
