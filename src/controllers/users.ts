import express,{Request,Response} from 'express';
import {createUser,findAndUpdate,findUser,deleteUser} from "../services/users.service";

const userCreate = async (req:Request, resp:Response) => {
        
    //--- ADD---
    const user = await createUser(req.body);

    resp.json({
        message : "User Created Successfully!",
        myData : user
    });
}

const userUpdate = async (req:Request, resp:Response) => {
    //--- UPDATE---
    const user = await findAndUpdate({name:'Hardik Pansuriya'}, {dept:'HR123'}, {new : true})
    resp.json({
        message : "User Updated Successfully!",
        myData : user
    });
}

const userFind = async (req:Request, resp:Response) => {

    //--- FIND---
    const user = await findUser({ name:'Hardik'})

    resp.json({
        message : "User Search Result!",
        myData : user
    });
}


const userDelete = async (req:Request, resp:Response) => {

    //--- DELETE---
    const user = await deleteUser({ name:'Hardik'})

    resp.json({
        message : "User Deleted Successfully!",
        myData : user
    });
}

export {
    userCreate,
    userUpdate,
    userFind,
    userDelete
}