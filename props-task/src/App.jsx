import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './App.css'

const App = () => {

  const features = [
    { title: "Fast Performance", description: "Optimized for speed and efficiency." },
    { title: "Responsive Design", description: "Looks great on any device." },
    { title: "Easy to Use", description: "Simple and intuitive interface." },
    { title: "Easy to Use", description: "Simple and intuitive interface." },
    { title: "Easy to Use", description: "Simple and intuitive interface." },
  ];
  
  return (
    <div>
       
       <Header 
       title="welcome to my webpage" 
       subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, deleniti."/>

       <div className="container">
       {/* <Cards title="Fast Performance" description="Optimized for speed and efficiency."/> */}
       

       {
        features.map((feature,index)=>{
          return(
            <div key={index}>
                { <Cards title={feature.title} description={feature.description}/>}
            </div>
          )
        })
       }

       </div>

       <Footer/>
    </div>
  )
}

export default App