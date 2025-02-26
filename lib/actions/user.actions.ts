"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model"
import { connectToDB } from "../mongoose"

interface Prams{
  userId:string;
  username:string;
  name:string;
  bio:string;
  image:string;
  path:string
}
export async function updateUser({userId, username, name, bio, image, path}: Prams): Promise<void> {
  connectToDB()
  try {
    await User.findOneAndUpdate(
      {id:userId},
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true
      },
      {upsert:true}
    );
    if(path === "/profile/edit") {
      revalidatePath("/profile")
    }
  } catch (error) {
    throw new Error(`Error updating user: ${error}`);    
  }
};