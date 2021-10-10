/**
 * This file contains functions which interact with database, via mongoose, to perform User-related
 * CRUD operations.
 * 
 * @author Zach Wang
 */

import { User } from "../schema/User";



export async function createUser(user) {
    const dbUser = new User(user);
    await dbUser.save();
    return dbUser;
}

export async function retrieveAllStudents() {
    const user={type:"student"}
    return await User.find(user);
}

export async function retrieveUser(id) {
    return await User.findById(id);
}

export async function retrieveUserByEmail(email){
    const user={email:email}
    return await User.findOne(user);
}

export async function updateUser(user) {

    const result = await User.findByIdAndUpdate(user._id, user, { new: true, useFindAndModify: false });
    return result ? true : false;
}

export async function deleteUser(id) {
    await User.deleteOne({ _id: id });
}