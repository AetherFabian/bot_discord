module.exports = {
    secure,
}

async function secure(schema, id , id2, object){
    let data = await schema.findOne({id: id2})
    if (!data){
        console.log("CREATING DATABASE...");
        data = await schema(object)
        data.save();
    }
    return data;
}