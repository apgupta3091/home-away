import { createClient } from "@supabase/supabase-js";

const BUCKET = "home-away-ag";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage.from(BUCKET).upload(newName, image, {
    cacheControl: "3600",
  });

  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(BUCKET).getPublicUrl(newName).data.publicUrl;
};
