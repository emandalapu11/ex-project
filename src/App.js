import React from "react";
import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import Navbar from "./component/Navbar";
import MyProjects from "./component/Myprojects";
import Teamprojects from "./component/Teamprojects";
import ReadMore from "./component/ReadMore";
import Prodata from "./component/Prodata";
import Projects from "./component/Projects";
import Datasets from "./component/Datasets";
import SeeMoreLess from "./component/SeeMoreLess";
import ReadMoreLess from "./component/ReadMoreLess ";
import Info from "./component/Info";
function App() {
  return (
    <>
     <div className="container-fluid">
    <div className="row">
    <div className="col-sm-12"> 
      <div className="card">
            <div className="card-body">
            
    <h1 className="bg-primary text-white"><ion-icon name="reorder-four-outline"></ion-icon>Metaculars[Beta]
    <ion-icon name="square-outline"></ion-icon> <ion-icon name="square-outline"></ion-icon>
     <ion-icon name="square-outline"></ion-icon> <ion-icon name="square-outline"></ion-icon>
     <ion-icon name="square-outline"></ion-icon></h1>
     </div></div></div></div>
   <div className="row">
    <div className="col-sm-6">
      <div className="card">
     <div className="card-body">
        <h1>Welcome,John</h1>
        <h6>What are you looking to do today?</h6>
        <ion-icon name="search-outline">
         
        </ion-icon> Search for Files,Projects,Datasets,etc.
        <div>
        
        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" 
        data-bs-target="#myModal">Primary   +<ion-icon name="add-outline m-3"></ion-icon></button>
       <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" 
        data-bs-target="#myModal">Dataset   +<ion-icon name="add-outline m-3"></ion-icon></button>

        <div class="modal" id="myModal">
        <div class="modal-dialog">
        <div class="modal-content">
           <div class="modal-header">
         <h4 class="modal-title">Modal Heading</h4>
         <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
         </div>

   
        <div class="modal-body">
        Modal body..
       </div>
        <div class="modal-footer">
         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
         </div></div>
           </div>
             </div></div></div></div></div>
             
             <div className="col-sm-3">
          <div className="card">
          <div className="card-body">
           <Navbar/>
          <Routes>
            <Route path={'/myprojects'} element={<Navigate to={"/myprojects"}/>}/>
         <Route path={"/teamprojects"} element={<Teamprojects/>}/>
         <Route path={"/readmore"} element={<ReadMore/>}/>
          </Routes>
     
       </div></div></div>
       <div className="col-sm-3">
         <div className="card">
           <div className="card-body">
          <Navbar/>
          <Routes>
       <Route path={'/'} element={<Navigate to={<MyProjects/>}/>}/>
    <Route path={"/teamprojects"} element={<Teamprojects/>}/>

   </Routes>
     

           </div></div></div>
               </div>
                <div className="row">          
            <div className="col-sm-12">
          <div className="card">
           <div className="card-body">
                  <h1>Popular</h1>
                  <p>These datasets and projects are popular within your organisation</p>
                     <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
           <li class="nav-item" role="presentation">
         <a
        class="nav-link active"
        id="ex1-tab-1"
        data-bs-toggle="tab"
        href="#ex1-tabs-1"
        role="tab"
          aria-controls="ex1-tabs-1"
         aria-selected="true"
         >Projects</a >
         </li>
        <li class="nav-item" role="presentation">
          <a
         class="nav-link"
          id="ex1-tab-2"
         data-bs-toggle="tab"
         href="#ex1-tabs-2"
        role="tab"
         aria-controls="ex1-tabs-2"
         aria-selected="false" >Datasets</a>
          </li>     </ul>
           <div class="tab-content" id="ex1-content">
        <Prodata/>
              
              </div></div>
                  </div></div></div></div>
            
                   </>
                   )
                      }

export default App;
