webpackJsonp([0x8eb291567e75],{108:function(e,t){},75:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=n(l),i=a(76),r=n(i),o=a(80),u=n(o),c=a(78),d=n(c),m=function(){return s.default.createElement("section",{id:"resume"},s.default.createElement(u.default,null),s.default.createElement(r.default,null),s.default.createElement(d.default,null))};t.default=m,e.exports=t.default},76:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=n(l),i=a(77),r=n(i),o=function(){return s.default.createElement("div",{className:"row education"},s.default.createElement("div",{className:"two columns header-col"},s.default.createElement("h1",null,s.default.createElement("span",null,"Education"))),s.default.createElement("div",{className:"ten columns main-col"},r.default.map(function(e){return s.default.createElement("div",{className:"row item",key:e.name},s.default.createElement("div",{className:"twelve columns"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"eight columns"},s.default.createElement("h4",null,e.name)),s.default.createElement("div",{className:"four columns text-right"},s.default.createElement("h5",null," ",e.location," "))),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"seven columns"},e.degree),s.default.createElement("div",{className:"five columns text-right"},e.date)),s.default.createElement("ul",{className:"bulleted"},e.items.map(function(e,t){return s.default.createElement("li",{key:t},e)}))))})))};t.default=o,e.exports=t.default},77:function(e,t){"use strict";t.__esModule=!0;var a=[{name:"Utah State University",location:"Logan, UT",degree:"Bachelor of Science, Computer Engineering",date:"Expected May 2020",items:["Minor: Mathematics","Research Focus: 5G Heterogeneous Networking"]},{name:"National Outdoor Leadership School",location:"India & Mexico",degree:"Ranikhet, Uttarakhand, India and Baja California Sur, Mexico",date:"January 2013 - May 2013",items:["Trained leadership techniques in outdoor platform with Risk Management emphasis","Led small teams, daily, through difficult terrain and seas while building a toolbox of safe, effective leadership skills"]}];t.default=a,e.exports=t.default},218:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=n(l),i=a(219),r=n(i),o=function(){return s.default.createElement("div",{id:"resume-header"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"twelve columns text-center"},s.default.createElement("div",{className:"title"},r.default.name),r.default.title," ",s.default.createElement("br",null),r.default.location," ",s.default.createElement("br",null),s.default.createElement("a",{href:"https://"+r.default.website}," ",r.default.website," "))))};t.default=o,e.exports=t.default},219:function(e,t){"use strict";t.__esModule=!0;var a={name:"Jay Swanson",title:"Student, Quality Assurance Engineer, SAR Member, Sales Associate",location:"Logan, UT",website:"swanjson.github.io"};t.default=a,e.exports=t.default},78:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=n(l),i=a(79),r=function(){return s.default.createElement("div",{className:"row skill"},s.default.createElement("div",{className:"two columns header-col"},s.default.createElement("h1",null,s.default.createElement("span",null,"Skills"))),s.default.createElement("div",{className:"ten columns main-col"},i.intro,s.default.createElement("div",{className:"bars"},s.default.createElement("ul",{className:"skills"},i.skills.sort(function(e,t){return t.value-e.value}).map(function(e){return s.default.createElement("li",{key:e.id},s.default.createElement("span",{className:"bar-expand",style:{width:e.value+"%"}}),s.default.createElement("em",null,e.name))})))),s.default.createElement("div",{className:"two columns header-col"},s.default.createElement("h1",null,s.default.createElement("span",null,"Languages"))),s.default.createElement("div",{className:"ten columns main-col"},s.default.createElement("div",null,i.intro2),s.default.createElement("br",null),s.default.createElement("div",{className:"bars"},s.default.createElement("ul",{className:"languages"},i.languages.sort(function(e,t){return t.value-e.value}).map(function(e){return s.default.createElement("li",{key:e.id},s.default.createElement("span",{className:"bar-expand",style:{width:e.value+"%"}}),s.default.createElement("em",null,e.name))})))))};t.default=r,e.exports=t.default},79:function(e,t){"use strict";t.__esModule=!0;t.skills=[{id:1,name:"AWS",value:30},{id:2,name:"Computer Vision",value:80},{id:3,name:"Webscraping",value:80},{id:4,name:"Neural Networks",value:80},{id:5,name:"AWS",value:75},,{id:6,name:"Javascript",value:75},{id:7,name:"d3.js",value:50}],t.languages=[{id:1,name:"LaTeX",value:95},{id:2,name:"C++",value:90},{id:3,name:"Python",value:80},{id:4,name:"JavaScript",value:80},{id:5,name:"node.js",value:20},,{id:6,name:"Javascript",value:75},{id:7,name:"d3.js",value:50}],t.intro="Aspiring Full-Stack Engineer. Done a lot of webscraping blah blah...",t.intro2="Another intro"},80:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=n(l),i=a(81),r=n(i),o=function(){return s.default.createElement("div",{className:"row work"},s.default.createElement("div",{className:"two columns header-col"},s.default.createElement("h1",null,s.default.createElement("span",null,"Work"))),s.default.createElement("div",{className:"ten columns main-col"},r.default.map(function(e){return s.default.createElement("div",{className:"row item",key:e.dates},s.default.createElement("div",{className:"twelve columns"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"eight columns"},s.default.createElement("h4",null,e.company)),s.default.createElement("div",{className:"four columns text-right"},s.default.createElement("h5",null," ",e.location," "))),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"seven columns"},e.title),s.default.createElement("div",{className:"five columns text-right"},e.dates)),s.default.createElement("ul",{className:"bulleted"},e.items.map(function(e,t){return s.default.createElement("li",{key:t},e)}))))})))};t.default=o,e.exports=t.default},81:function(e,t){"use strict";t.__esModule=!0;var a=[{company:"ICON Health and Fitness",location:"Logan, UT",dates:"September 2018 - Present",title:"QA Software Engineer",items:["Conduct end-product validation testing by creating and executing test cases using workflow and testing software","Developed scripts to automate pulling software logs from devices, saving money in preventable hours of labor","Enhanced software testing efficiency by developing G Suite tools and VBA macros to prioritize projects"]},{company:"Cache County Sheriff's Office",location:"Cache County, UT",dates:"May 2019 - Present",title:"Search and Rescue Unit Member",items:["Train to proficiency in man-tracking and open area search, boat and drone operations, wilderness first aid, K-9’s, GPS and map skills, technical, winter, avalanche, ice, and swift water rescues","Provide professional search and rescue services to the citizens and visitors of Cache County"]},{company:"CampSaver",location:"Nibley, UT",dates:"September 2019 - Present",title:"Sales Associate",items:["Assist hundreds of customers per day in finding or selecting items, and providing recommendations based on previous, personal, outdoor experience"]},{company:"Logan River Academy",location:"Logan, UT",dates:"June 2018 - September 2018",title:"Youth Dorm Counselor",items:["Manage, counsel and mentor a dorm of up to 12 teenagers with behavioral disorders, often leading outdoor activities"]},{company:"Lincoln Elementary School",location:"Hyrum, UT",dates:"November 2017 - May 2018",title:"Robotics and Programming Instructor",items:["Manage a classroom of students while educating on programming and robotics using Sphero and VexIQ robots","Construct customized lesson plans to teach and instill learning autonomy"]},{company:"Utah State University",location:"Logan, UT",dates:"October 2016 - October 2017",title:"Undergraduate Research Assistant",items:["Research Focus: Next Generation Wireless Heterogeneous Networks (5G)"]},{company:"Avalon Hills Foundation for Eating Disorders",location:"Petersboro, UT",dates:"May 2015 - April 2017",title:"Mathematics and Physics Tutor",items:["Tailor strategies and lesson plans to provide educational support and improve student study skills"]},{company:"Stokes Nature Center",location:"Logan, UT",dates:"May 2016 - August 2016",title:"Summer Camp Counselor",items:["Planned and executed eight week-long nature camps","Led groups of children safely through the wilderness for adventure and backpacking camps"]},{company:"General Electric Healthcare Life Sciences",location:"Logan, UT",dates:"June 2015 - January 2016",title:"Media Biomanufacturing Production Technician",items:["Maintained cleanroom procedures to produce media for cell growth while maintaining hydraulic pressure, conductivity, pH, osmolarity, etc."]},{company:"Utah State University",location:"Logan, UT",dates:"August 2014 - May 2015",title:"Intensive English Language Institute (IELI) Teacher's Assistant",items:["Instructed a classroom of international students in the English Language","Worked in tandem with supervising instructor to lead diverse, conversational groups to improve language skills"]},{company:"Xylem",location:"Morton Grove, IL",dates:"May 2014 - August 2014",title:"Research and Development Engineering Intern",items:["Collaborated with Senior Engineers to conceptualize, design and build a centrifugal water pump component.","Optimized company resources with created, patented part (Patent: US 20160290408)."]},{company:"Naperville Auto Care & Emissions",location:"Naperville, IL",dates:"September 2011 - December 2012",title:"Mechanic/Automotive Technician",items:["Diagnosed, repaired, and maintained automobiles, motorcycles, and trucks"]}];t.default=a,e.exports=t.default},225:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=n(l);a(108);var i=a(218),r=n(i),o=a(75),u=n(o),c=function(){return s.default.createElement("div",null,s.default.createElement(r.default,null),s.default.createElement(u.default,null))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-resume-js-f1c579f0120e6bc59c4d.js.map