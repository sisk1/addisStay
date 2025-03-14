import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*");

  if (error) throw new Error("Could not get settings" + error.message);

  return data;
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) throw new Error("Could not update the setting" + error.message);

  return data;
}
