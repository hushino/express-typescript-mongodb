import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});
interface IUser extends Document {
    username: string,
    email: string,
    password: string,
    role: string
}
userSchema.methods.encryptPassword = async (password: any) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password: any) {
    return bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema)