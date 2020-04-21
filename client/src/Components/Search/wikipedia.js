import React, { useState, useEffect } from 'react';


//
const wtf = require('wtf_wikipedia');
//

function Wikipedia() {

  const [wikiUrls, setWikiUrls] = useState();
  const [wikiUrl, setWikiUrl] = useState();
  const [songs, setSongs] = useState();


  useEffect(()=>{
    console.log("USEEFFECT");
    fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {return setWikiUrls(response[3])})
    .catch(function(error){console.log(error);});
  }, [])
  


  let url = "https://en.wikipedia.org/w/api.php"; 

  let params = {
      action: "opensearch",
      search: "Watchmen",
      limit: "50",
      namespace: "0",
      format: "json"
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  const conditions = ["soundtrack", "music", "OST", "Music" ]
 

  if(wikiUrls && !(wikiUrl)) {
    console.log("SETWIKIURL")
    for (let url of wikiUrls) {
      if (conditions.some(el => url.includes(el))) return setWikiUrl(url);
    }
  };
  
  if(wikiUrl){
    console.log("WTF")
    wtf.fetch(wikiUrl).then(doc => {
      return doc.json()
    }).then(doc=> {
      console.log("SECTION", doc.sections)
      for (let section of doc.sections) {
        if (section.title=="Track listing") return section;
      }
    }).then(data => data.templates[0]
      ).then(data=>{
        console.log("DATA", data)
        let res = [];
        for (let key in data){
          if(key.includes("title")) res.push(data[key])
        };
        console.log("RES", res)
        setSongs(res);
        
      });
    setWikiUrl();
    setWikiUrls();
    console.log(`end of  wtf with songs = ${songs}; wikiurl = ${wikiUrl} and wikiurlS = ${wikiUrls}`)
  }
 
return (
  <div className="wiki">
    <p>ciao</p>
  </div>
  );

}

export default Wikipedia;

