import mongoose, { model } from "mongoose";

const FunSchema = ({
    id:{type: 'string', required: true},
    category: {type: 'string', required: true},
    fact: {type: 'string', required: true}

});


const Fun = mongoose.model('Fun', FunSchema, 'fun');

export default Fun;