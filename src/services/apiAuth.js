import supabase, { supabaseUrl } from "./supabase";

export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/temp-user.jpg?t=2024-10-18T05%3A22%3A42.546Z`,
      },
    },
  });

  if (error) throw new Error("Could not create your account: " + error.message);

  return data; // email confirmation will be sent automatically if email confirmation is enabled
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error)
    throw new Error("An error occurred while logging in: " + error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error("Could not get user data: " + error.message);

  return data?.user;
}

export async function updateUserData({ fullName, avatar, password }) {
  // Update fullName or Password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error1 } = await supabase.auth.updateUser(updateData);

  if (error1) throw new Error("Could not update user data: " + error1.message);
  if (!avatar) return data;

  // Upload the avatar
  if (avatar) {
    const fileName = `avatar-${data.user.id}-${Math.random()}`;
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(fileName, avatar);

    if (storageError)
      throw new Error("Could not upload the avatar: " + storageError.message);

    // Update the avatar
    const { data: updateUser, error2 } = await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

    if (error2)
      throw new Error("Could not update the avatar data: " + error2.message);
    return updateUser;
  }
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("Could not logout: " + error.message);
}
