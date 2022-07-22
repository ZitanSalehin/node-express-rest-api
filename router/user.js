 import express from 'express';
 import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

 const router= express.Router();

let users = []

// getting data
 router.get('/', (req,res)=>{
   console.log(users)
    res.send(users);
 })

//  posting data
 router.post('/', (req,res)=>{
   
   const user = req.body;
   
   users.push({...user, id:uuidv4()});

   res.send(`user of name ${user.firstname} is created`)
 })

//  getting user with id
 router.get('/:id', (req,res)=>{
   const {id}=req.params;
   
   const foundUser= users.find((user)=>user.id===id)
   res.send(foundUser);
 })

//  for deleting user
 router.delete('/:id', (req,res)=>{
   const {id}=req.params;
   
   users = users.filter((user)=>user.id !==id);

   res.send(`user id ${id} is deleted`);
 })

// for updating user
 router.patch('/:id', (req,res)=>{
   const {id} = req.params;
   const { firstname, lastname, age} = req.body;

   const Updateduser= users.find((user)=> user.id===id)

   if(firstname){
      Updateduser.firstname= firstname;
   } 

   if(lastname){
      Updateduser.lastname= lastname;
   } 

   if(age){
      Updateduser.age=age;
   } 

   res.send(`user id of ${id} has been updated succesfully`)

 })



 export default router;