import express from "express";
import cors from "cors";
const app=express(); app.use(cors()); app.use(express.json());
const reports=[];
app.get("/api/health",(req,res)=>res.json({ok:true,service:"HeritageConnect API"}));
app.get("/api/sites",(req,res)=>res.json({message:"Connect your shared sites data here."}));
app.post("/api/reports",(req,res)=>{reports.push({...req.body,createdAt:new Date().toISOString()});res.status(201).json({success:true});});
app.get("/api/reports",(req,res)=>res.json(reports));
app.listen(5000,()=>console.log("HeritageConnect backend running on http://localhost:5000"));