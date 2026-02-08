import React from 'react';
import Detail from'./detail.jsx';
 const info = [
        { 
           id:1,
           logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyITgyNP2_U_ogNb9_TknsLJpivZ607gvow&s",
           save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
           companyName: "Google",
           postedDay: "2 days ago",
           role: "Graphic Designer",
          timing1: "Full Time",
           timing2: "Part Time",
          payPerHour: "$45/hr",
          address: "California, USA"
        },
        {
          id:2,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvX8imTDONumZpwWMY8-RtOBahFnKZ17oOA&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
         companyName: "Meta",
         postedDay: "1 day ago",
         role: "Frontend Developer",
         timing1: "Part Time",
         timing2: "Part Time",
         payPerHour: "$40/hr",
         address: "New York, USA"
        },
        {
         id:3,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8YMB8LXep-AjCFRHGd1CIuhTcfpRQihPRA&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
         companyName: "Amazon",
         postedDay: "3 days ago",
         role: "UI/UX Designer",
         timing1: "Full Time",
          timing2: "Part Time",
         payPerHour: "$50/hr",
         address: "Seattle, USA"
        },
        {
          id:4,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1g5HSdwLUh306k1IOM4vjBoUzHy5xxOP5rw&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
         companyName: "Netflix",
         postedDay: "5 days ago",
         role: "Video Editor",
         timing1: "Remote",
          timing2: "Part Time",
         payPerHour: "$35/hr",
         address: "Los Angeles, USA"
        },
        {
          id:5,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCHVnb3LnSC-aiHGNC5i4Z9BcvTumbCqtaA&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
         companyName: "Adobe",
         postedDay: "4 days ago",
         role: "Product Designer",
         timing1: "Full Time",
         timing2: "Part Time",
         payPerHour: "$55/hr",
         address: "San Jose, USA"
         },
        {
         id:6,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBFIRnqVmAyEVmIWWxL8flEk-D9nAj3UAWw&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
         companyName: "Microsoft",
         postedDay: "1 day ago",
         role: "Backend Developer",
         timing1: "Full Time",
         timing2: "Remote",
         payPerHour: "$60/hr",
         address: "Redmond, USA"
        },
        {  
         id:7,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzvZuz2fQpoXUDN48B2o3oxK8fye5h4d3sQ&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
         companyName: "Apple",
         postedDay: "2 days ago",
         role: "UI Designer",
         timing1: "Full Time",
         timing2: "Part Time",
         payPerHour: "$70/hr",
         address: "California, USA"
        },
        {
         id:8,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbQo1l1VKoZ6zINYR5iVz02QOQ5l-21e28w&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
         companyName: "IBM",
         postedDay: "3 days ago",
         role: "Data Analyst",
         timing1: "Remote",
         timing2: "Part Time",
         payPerHour: "$50/hr",
         address: "Texas, USA"
        },
        {
         id:9,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfW4fdjA72YDpOSS-6t_rJBxX_rltxLUETA&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
         companyName: "Twitter (X)",
         postedDay: "4 days ago",
         role: "Content Designer",
         timing1: "Full Time",
         timing2: "Remote",
         payPerHour: "$42/hr",
         address: "San Francisco, USA"
       },
       {    
         id:10,
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqYE7EuSoOHq_ol89huVkP7t2Wj7c3-Swgg&s",
         save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
         companyName: "LinkedIn",
         postedDay: "5 days ago",
         role: "Product Manager",
         timing1: "Full Time",
         timing2: "Part Time",
         payPerHour: "$65/hr",
         address: "New York, USA"
       },
             {
  id:11,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfW4fdjA72YDpOSS-6t_rJBxX_rltxLUETA&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Twitter",
  postedDay: "1 day ago",
  role: "Social Media Manager",
  timing1: "Full Time",
  timing2: "Remote",
  payPerHour: "$30/hr",
  address: "San Francisco, USA"
},
{
  id:12,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBFIRnqVmAyEVmIWWxL8flEk-D9nAj3UAWw&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
  companyName: "Microsoft",
  postedDay: "3 days ago",
  role: "Software Engineer",
  timing1: "Full Time",
  timing2: "Hybrid",
  payPerHour: "$70/hr",
  address: "Washington, USA"
},
{
  id:13,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzvZuz2fQpoXUDN48B2o3oxK8fye5h4d3sQ&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Apple",
  postedDay: "2 days ago",
  role: "UI Developer",
  timing1: "Full Time",
  timing2: "Onsite",
  payPerHour: "$80/hr",
  address: "California, USA"
},
{
  id:14,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzntMsjj3F-Qt8ikmvJMfIy6fMOYwxaU0AQ&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
  companyName: "Spotify",
  postedDay: "4 days ago",
  role: "Music Data Analyst",
  timing1: "Part Time",
  timing2: "Remote",
  payPerHour: "$45/hr",
  address: "Stockholm, Sweden"
},
{
  id:15,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAdsKgHTevpWRwpHO-987CLq_NvIbHp_Ptw&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Airbnb",
  postedDay: "6 days ago",
  role: "UX Researcher",
  timing1: "Full Time",
  timing2: "Hybrid",
  payPerHour: "$60/hr",
  address: "San Francisco, USA"
},
{
  id:16,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0DHUjwnJB8UjB4VQfC-BlYzwFS6vwtYI0Q&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
  companyName: "Uber",
  postedDay: "1 day ago",
  role: "App Designer",
  timing1: "Full Time",
  timing2: "Remote",
  payPerHour: "$50/hr",
  address: "London, UK"
},
{
  id:17,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4RsFOlAQd4hh8vVGx7RYByGadBjSbevrcw&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Salesforce",
  postedDay: "7 days ago",
  role: "Cloud Engineer",
  timing1: "Full Time",
  timing2: "Hybrid",
  payPerHour: "$75/hr",
  address: "Texas, USA"
},
{
  id:18,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sQUAnXHRIgH2EIWDrDzHnQRC4kCrH8_ouQ&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Intel",
  postedDay: "3 days ago",
  role: "Hardware Engineer",
  timing1: "Full Time",
  timing2: "Onsite",
  payPerHour: "$65/hr",
  address: "California, USA"
},
{
  id:19,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UddJp7kXKG5FYD-cgEIhnnnwrDQKaEWLew&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
  companyName: "Oracle",
  postedDay: "2 days ago",
  role: "Backend Developer",
  timing1: "Full Time",
  timing2: "Remote",
  payPerHour: "$68/hr",
  address: "Austin, USA"
},
{
  id:20,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzaN9dOGrwkHo11kGmP-XvzwHPh9OltC5pQ&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Zomato",
  postedDay: "1 day ago",
  role: "Product Designer",
  timing1: "Full Time",
  timing2: "Hybrid",
  payPerHour: "$35/hr",
  address: "Delhi, India"
},
{
  id:21,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBh8YB7KeDHjY9jPKg_9kfnMI7cbgeN4a3uLl4-Cb&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLlTArPzxBBE71RxOwHHHL-NBE_gt-afplw&s",
  companyName: "PayPal",
  postedDay: "4 days ago",
  role: "FinTech Analyst",
  timing1: "Full Time",
  timing2: "Remote",
  payPerHour: "$55/hr",
  address: "California, USA"
},
{
  id:22,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6KK0TRUbyqe90tc7sQvpRM_iPkg2BN6XkQ&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Shopify",
  postedDay: "5 days ago",
  role: "Frontend Engineer",
  timing1: "Full Time",
  timing2: "Remote",
  payPerHour: "$60/hr",
  address: "Ottawa, Canada"
},
{
  id:23,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYQrbB02_TPd44IYZZmLTzuk-3FLooz4Yhg&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Tesla",
  postedDay: "2 days ago",
  role: "Automation Engineer",
  timing1: "Full Time",
  timing2: "Onsite",
  payPerHour: "$72/hr",
  address: "Texas, USA"
},
{
  id:24,
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-uLpcZxeKtqGWVF-Z4t-qyl0I6tvMEGBfQ&s",
  save:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHNzqzVMV1mZpbK4aAiSazJ91cg5cZ4qQw&s",
  companyName: "Flipkart",
  postedDay: "1 day ago",
  role: "UI Designer",
  timing1: "Full Time",
  timing2: "Hybrid",
  payPerHour: "$38/hr",
  address: "Bangalore, India"
}

];


const App = () => {
  return (
    <div className='parent'>
      {info.map(function(elem){
       return <Detail  logo={elem.logo} save={elem.save} companyName={elem.companyName} postedDay={elem.postedDay} role={elem.role} timing1={elem.timing1} timing2={elem.timing2} payPerHour={elem.payPerHour} address={elem.address} />
      })
    }
    </div>
  );
}

export default App;

