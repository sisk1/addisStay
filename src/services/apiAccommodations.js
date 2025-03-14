import supabase, { supabaseUrl } from "./supabase";

export async function getAccommodations() {
  const { data: accommodations, error } = await supabase
    .from("accommodations")
    .select("*");

  if (error) throw new Error("Could not get accommodations: " + error.message);
  return accommodations;
}

export async function createEditAccommodation(newCabin, id) {
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/accommodations/${imageName}`;

  let query = supabase.from("accommodations");

  // 1. CREATE CABIN
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // 2. EDIT CABIN
  if (id)
    query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);

  const { data, error } = await query.select().single();

  if (error)
    throw new Error("Could not create the accommodation: " + error.message);

  if (hasImagePath) return data;

  // UPLOAD THE IMAGE
  const { error: storageError } = await supabase.storage
    .from("accommodations")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("accommodations").delete().eq("id", data.id);
    throw new Error(
      "Could not upload the image and the accommodation is not created!" +
        error.message,
    );
  }

  return data;
}

export async function deleteAccommodation(id, imageName) {
  const { error } = await supabase.from("accommodations").delete().eq("id", id);

  if (error)
    throw new Error("Could not delete the accommodation" + error.message);

  // DELETE THE IMAGE FROM THE BUCKET
  const { error: storageError } = await supabase.storage
    .from("accommodations")
    .remove([imageName]);

  if (storageError)
    throw new Error("Could not delete the image" + error.message);
}
