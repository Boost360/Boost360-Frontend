import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {type:String,required:true},
    password: { type: String, required: true },
    type: {type:String, required:true, default:"student"},
    firstName:{type:String, required:true},
    secondName:{type:String,required:true},
    ethnicity: String,
    dob:Date,
    address:String,
    mobile:String,
    medicalCondition:String,
    club:String,
    yearsPlaying:Number,
    school:String,
    schoolYear:Number,
    contact1Name:String,
    contact1Relationship:String,
    contact1Mobile:String,
    contact1Email:String,
    contact2Name:String,
    contact2Relationship:String,
    contact2Mobile:String,
    contact2Email:String,
}, {
    timestamps: {}
});

const User = mongoose.model('User', UserSchema);

export { User };
