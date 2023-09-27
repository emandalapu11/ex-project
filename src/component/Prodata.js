import React,{useState} from "react"
import SeeMoreLess from "./SeeMoreLess";
import Projects from "./Projects";
import Datasets from "./Datasets";

function Prodata() {
  const [isdata, setIsdata] = useState(false);
  const Project=()=>{
    setIsdata((prevState)=>{
        return true;
    })
    };
    const Data=()=>{
        setIsdata((prevState)=>{
            return true;
        })
        };

  const displayProjects= () => {
   return (
    <React.Fragment>
    <div
       class="tab-pane fade show active"
            id="ex1-tabs-1"
                 role="tabpanel"
                aria-labelledby="ex1-tab-1">
                  <Projects/></div></React.Fragment>)}
          const displayDatasets= () => {
            return (          
          <React.Fragment>
    
            <div class="tab-pane fade show active" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
            <Datasets/>
            </div>
                         </React.Fragment>
        
      )}
      return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            {
                            isdata? displayProjects(): displayDatasets()
                            }
                
                               </div>
                               </div>
                                </div>
            </div>
        </div>
        </>
    )
}
export default Prodata;