import logo from './logo.svg';
import './App.css';

export default function App() {
  let cart =[{
    title:"FREE",
    price:"0",
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  }
  
  ,{
    title:"PLUS",
    price:"9",
    user:"5 User",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  }
  
  ,{
    title:"PRO",
    price:"49",
    user:"Unlimited User",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomainPrefix:"Unlimited",
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:true
  }]
  return (
    <div className="App">
       <section className="pricing py-5">
         <div className="container">
          <div className="row">
             {cart.map(({title,price,user,userEnabler,storage,storageEnabler,publicProjects,publicProjectsEnabler,communityAccess,communityAccessEnabler,privateProjects,privateProjectsEnabler,phoneSupport,phoneSupportEnabler,subdomainPrefix,subdomain,subdomainEnabler,reportsEnabler,reports},index)=>
               <Card key={index} title={title} price={price} user={user} userEnabler={userEnabler} storage={storage} 
               storageEnabler={storageEnabler}  publicProjects={publicProjects} publicProjectsEnabler={publicProjectsEnabler}
               communityAccess={communityAccess} communityAccessEnabler={communityAccessEnabler}
               privateProjects={privateProjects} privateProjectsEnabler={privateProjectsEnabler}
               phoneSupport={phoneSupport}  phoneSupportEnabler={phoneSupportEnabler}
               subdomainPrefix={subdomainPrefix}  subdomain={subdomain}   subdomainEnabler={subdomainEnabler}
               reportsEnabler={reportsEnabler}  reports={reports} 
             /> )}
           </div>
         </div>
        </section>
      </div>

      
  );
}




function Card({title,price,user,userEnabler,storage,storageEnabler,publicProjects,publicProjectsEnabler,communityAccess,communityAccessEnabler,privateProjects,privateProjectsEnabler,phoneSupport,phoneSupportEnabler,subdomainPrefix,subdomain,subdomainEnabler,reportsEnabler,reports},index)
   {
     return  <div key={index} className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
               <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                  <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
                  <hr/>
                  <ul className="fa-ul">
                    <li className={userEnabler?"":"text-muted"}><span className="fa-li"><i className={userEnabler?"fas fa-check":"fas fa-times"}></i></span>{title==="FREE"?<>{user}</>:<b>{user}</b>}</li>
                    <li className={storageEnabler?"":"text-muted"}><span className="fa-li"><i className={storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{storage}</li>
                    <li className={publicProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{publicProjects}</li>
                    <li className={communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{communityAccess}</li>
                    <li className={privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{privateProjects}</li>
                    <li className={phoneSupportEnabler?"":"text-muted"}><span className="fa-li"><i className={phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{phoneSupport}</li>
                    <li className={subdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span><b>{subdomainPrefix} </b>{subdomain}</li>
                    <li className={reportsEnabler?"":"text-muted"}><span className="fa-li"><i className={reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{reports}</li>
                  </ul>
                  <div className="d-grid">
                    <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="btn btn-primary text-uppercase">Button</a>
                  </div>
              </div>
             </div>
        </div>
   
  
}
