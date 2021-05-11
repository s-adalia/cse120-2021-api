console.log("It's working so far.")

var myBook = {
  "owner" : "Samantha Isabella Adalia",
  "project" : "Favorite Books",
  "fullName" :  "",
  "title" : "",
  "author" : "",
  "publisher" : "",
  "publishingDate" : "",
  "language" : "",
  "customLanguage" : "",
  "coverType" : "",
  "customCover" : "",
  "noOfPgs" : "",
  "genre" : "",
  "reason" : ""
}

function handleFullNameChange() {
  myBook.fullName = document.getElementById ("fname").value;
}

function handleTitleChange() {
  myBook.title = document.getElementById ("title").value;
}

function handleAuthorChange() {
  myBook.author = document.getElementById ("author").value;
}

function handlePublisherChange() {
  myBook.publisher = document.getElementById ("publisher").value;
}

function handlePublishDateChange() {
  myBook.publishingDate = document.getElementById ("publishingdate").value;
}

function handleLangChange(e) {
  myBook.language = e.target.value;
  if (myBook.language != "other") {
    myBook.customLanguage = ""; document.getElementById("customlanguage").style.display = "none";
  } else {document.getElementById("customlanguage").style.display = "block";
  myBook.customLanguage = document.getElementById("customlanguage").value
  }
}


function handleCustomLangChange() {
  if (myBook.language == "other") {
    myBook.customLanguage = document.getElementById("customlanguage").value;
  }

}

function handleCoverChange(e) {
  myBook.coverType = e.target.value;
  if (myBook.coverType != "other2") {
    myBook.customCover = ""; document.getElementById ("customcover").style.display = "none";
  } else {document.getElementById("customcover").style.display = "block";
  myBook.customCover = document.getElementById("customcover").value
  }
}

function handleCustomCoverChange () {
  if (myBook.coverType == "other2") {
    myBook.customCover = document.getElementById ("customcover").value;
  }
}

function handleNoOfPages() {
  myBook.noOfPgs = document.getElementById ("num-of-pgs").value;
}

function handleGenreChange () {
  myBook.genre = document.getElementById ("genre").value;
}

function handleReasonChange () {
  myBook.reason = document.getElementById ("reason").value;
}

function submitTheBookData(e) {
  e.preventDefault();
  console.log("The current value is", myBook)
  $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-samantha.herokuapp.com/data",
    data: myBook,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });
}

/*____________________________________________MUSIC PART (thanks Yervand for your formatting ideas)____________________________________________ */


var requiredFields = [
  "name", "gender", "age"
]

var myHobby = {
  "owner" : "Samantha Isabella Adalia",
  "project" : "Survey: Music Hobby",
  "fullName" : "",
  "gender" : "",
  "age" : "",
  "country" : "",
  "occupation" : "",
  "major" : "",
  "instrumentslist" : "",
  "customInstrument": "",
  "ownInstruments" : "",
  "firstInstrument" : "",
  "yearsInstrument" : "",
  "musicClasses" : "",
  "howToVideos" : "",
  "practice" : "",
  "performance" : "",
  "songwriting" : "",
  "family" : "",
  "top3Artists" : "",
  "genre" : "",
  "earworm" : "",
  "listenHours" : "",
  "provider" : "",
  "albums" : "",
  "memorableConcert" : "",
  "dreamConcert" : "",
  "dreamArtist" : "",
}

function handlefullNameChange() {
  myHobby.fullName = document.getElementById ("name").value;
}

function handleGenderChange(e) {
  myHobby.gender = e.target.value;
}
//onchange

function handleAgeChange(e) {
  myHobby.age = e.target.value;
}
//onchange

function handleCountryChange(e) {
  myHobby.country = e.target.value;
}
//dropdown

function handleOccupationChange() {
  myHobby.occupation = document.getElementById ("occupation").value;
}

function handleMajorChange(e) {
  myHobby.major = e.target.value;
}
//dropdown

function handleInstrumentsChange(e) {
  var value = e.target.value;
  if (e.target.checked == true) {
    myHobby.instrumentslist = myHobby.instrumentslist + "," + value;
  }
  /*if (myHobby.instrumentslist != "other") {
    myHobby.customInstrument = ""; document.getElementById("customInstrument").style.display = "none";
  } else {document.getElementById("customInstrument").style.display = "block";
  myHobby.customInstrument = document.getElementById("customInstrument").value
  }*/
}

function handleCustomInstrumentChange() {
  /*if (myHobby.instrumentslist == "other") {*/
    myHobby.customInstrument = document.getElementById("customInstrument").value;
/*}*/

}

/*
} 


function handleCustomLangChange() {
  if (myBook.language == "other") {
    myBook.customLanguage = document.getElementById("customlanguage").value;
  }

} */

//checkboxes!

function handleOwnInstrumentsChange() {
  myHobby.ownInstruments = document.getElementById ("qty-instruments").value;
}

function handleFirstInstrumentChange() {
  myHobby.firstInstrument = document.getElementById ("first-instrument").value;
}

function handleYearsPlayingChange() {
  myHobby.yearsInstrument = document.getElementById ("how-long").value;
}

function handleMusicClassesChange(e) {
  myHobby.musicClasses = e.target.value;
}
//onchange

function handleHowToVidsChange(e) {
  myHobby.howToVideos = e.target.value;
}
//onchange

function handlePracticeChange(e) {
  myHobby.practice = e.target.value;
}
//onchange

function handlePerformanceChange(e) {
  myHobby.performance = e.target.value;
}

//onchange

function handleSongwritingChange(e) {
  myHobby.songwriting = e.target.value;
}

//onchange

function handleFamilyChange(e) {
  myHobby.family = e.target.value;
}
//onchange
/*
var handleTop3ArtistsChange_object = new Object();
function handleTop3ArtistsChange(e) {
  if (e.value != "") {
    handleTop3ArtistsChange_object[e.getAttribute("id")] = e.value;
  }
}
*/

function handleTop3ArtistsChange(e) {
  var value = e.target.value;
  if (e.target.value != "") {
    myHobby.top3Artists = myHobby.top3Artists + "," + value;
  }
}
/*

function handleTop3ArtistsChange() {
  myHobby.top3Artists = document.getElementsByClassName ("top3").value; console.log(e.target.value, e.target.id)
}

function handleTop3ArtistsChange(e) {
  if (e.target.checked){
     myHobby.top3Artists.push (e.target.value);
  } else {
    myHobby.top3Artists.splice (myHobby.top3Artists.indexOf(e.target.value),1);
  }
}
*/
//multiple input boxes

function handleGenreChange(e) {
  myHobby.genre = e.target.value;
}
//dropdown

function handleEarwormChange() {
  myHobby.earworm = document.getElementById ("earworm").value;
}

function handleListenHoursChange(e) {
  myHobby.listenHours = e.target.value;
}
//dropdown

function handleProviderChange(e) {
  var value = e.target.value;
  if (e.target.checked == true) {
    myHobby.provider = myHobby.provider + "," + value;
  }
}
//checkbox

function handleAlbumsChange(e) {
  myHobby.albums = e.target.value;
}

function handleMemorableConcertChange () {
  myHobby.memorableConcert = document.getElementById ("concert-memo").value;
}

function handleDreamConcertChange () {
  myHobby.dreamConcert = document.getElementById ("dream-concert").value;
}

function handleDreamArtistChange () {
  myHobby.dreamArtist = document.getElementById ("dream-artist").value;
}

function submitTheHobbyData(e) {
  e.preventDefault();
  console.log("The current value is", myHobby)
  $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-samantha.herokuapp.com/data",
    data: myHobby,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });
}

/*____________________________________________SERVER & ADMIN PART____________________________________________*/

var loadedData = [];

function loadEditBookItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem('editItem'));
  console.log(editItem);
  document.getElementById("_id").value = editItem["_id"];
  
  document.getElementById("fname").value = editItem["fullName"];   
  document.getElementById("title").value = editItem["title"];
  document.getElementById("author").value = editItem["author"];   
  document.getElementById("publisher").value = editItem["publisher"];   
  document.getElementById("publishingdate").value = editItem["publishingDate"]; 
  
  document.getElementById("language").value = editItem["language"]; 
  
  document.getElementById("customlanguage").value = editItem["customLanguage"]; 
  document.getElementById("cover").value = editItem["coverType"]; 
  document.getElementById("customcover").value = editItem["customCover"]; 

  document.getElementById("num-of-pgs").value = editItem["noOfPgs"];
  document.getElementById("genre").value = editItem["genre"]; 
  document.getElementById("reason").value = editItem["reason"]; 
    
    
}

function loadEditHobbyItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem('editItem'));
  console.log(editItem);
  document.getElementById("_id").value = editItem["_id"];
  
  document.getElementById("name").value = editItem["fullName"];   
  document.getElementById("gender").value = editItem["gender"];
  document.getElementById("age").value = editItem["age"];   
  document.getElementById("country").value = editItem["country"];   
  document.getElementById("occupation").value = editItem["occupation"]; 
  
  document.getElementById("major").value = editItem["major"]; 
  
  document.getElementById("instrumentslist").value = editItem["instrumentslist"]; 
  document.getElementById("customInstrument").value = editItem["customInstrument"]; 
  document.getElementById("qty-instruments").value = editItem["ownInstruments"]; 

  document.getElementById("first-Instrument").value = editItem["firstInstrument"];
  document.getElementById("how-long").value = editItem["yearsInstrument"]; 
  document.getElementById("music-classes").value = editItem["musicClasses"]; 
  document.getElementById("howtovids").value = editItem["howToVideos"];
  document.getElementById("practice").value = editItem["practice"];
  document.getElementById("performance").value = editItem["performance"];
  document.getElementById("songwriting").value = editItem["songwriting"];
  document.getElementById("family").value = editItem["family"];
  document.getElementById("top3artists").value = editItem["top3Artists"];
  document.getElementById("genre").value = editItem["genre"];
  document.getElementById("earworm").value = editItem["earworm"];
  document.getElementById("listenhours").value = editItem["listenHours"];

  document.getElementById("provider").value = editItem["provider"];
  document.getElementById("albums").value = editItem["albums"];
  document.getElementById("concert-memo").value = editItem["memorableConcert"];
  document.getElementById("dream-concert").value = editItem["dreamConcert"];
  document.getElementById("dream-artist").value = editItem["dreamArtist"];
    
    
}

function editData(id) {
  var tmp = id.split("edit_");
  var item_id = tmp[1];

  loadedData.forEach(item => {
      if ( item._id == item_id) {
          console.log(item); 
          localStorage = window.localStorage;
          localStorage.setItem('editItem', JSON.stringify(item));
          if (item["project"] == "Favorite Books"|| (item["projectName"] == "Favorite Books")) {
          document.location  = "edit_books.html"; 
          } else {
          document.location  = "edit_music.html"; 
          }
      }
  })
}



function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == false) {
        return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-samantha.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}





function saveData() {
	var tmp = {
		"test": "Data"
	}

    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-samantha.herokuapp.com/data",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
        	console.log("success");
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function updateData(e) {
  e.preventDefault();
  var updatedBook = {};
  updatedBook.id = document.getElementById("_id").value;
  updatedBook.fullName = document.getElementById("fname").value;
  updatedBook.title = document.getElementById("title").value;
  updatedBook.author = document.getElementById("author").value;  
  updatedBook.publisher = document.getElementById("publisher").value;
  updatedBook.publishingDate = document.getElementById("publishingdate").value;
  //look
  updatedBook.language = document.getElementById("language").value;
  updatedBook.customLanguage = document.getElementById("customlanguage").value;
  updatedBook.coverType = document.getElementById("cover").value;
  updatedBook.customCover = document.getElementById("customcover").value;
  updatedBook.noOfPgs = document.getElementById("num-of-pgs").value;
  updatedBook.genre = document.getElementById("genre").value;
  updatedBook.reason = document.getElementById("reason").value;
      $.ajax({
      type: 'POST',
      url: "https://cse-120-2021-api-samantha.herokuapp.com/data/update",
      data: updatedBook,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
}

function updateDataHobby(e) {
  e.preventDefault();
  var updatedHobby = {};


  updatedHobby.id = document.getElementById("_id").value;
  updatedHobby.fullName = document.getElementById("name").value;
  updatedHobby.gender = document.getElementById("gender").value;
  updatedHobby.age = document.getElementById("age").value;  
  updatedHobby.country = document.getElementById("country").value;
  updatedHobby.occupation = document.getElementById("occupation").value;
  //look
  updatedHobby.major = document.getElementById("major").value;
  updatedHobby.instrumentslist = document.getElementById("instrumentslist").value;
  updatedHobby.customInstrument = document.getElementById("customInstrument").value;
  updatedHobby.ownInstruments = document.getElementById("qty-instruments").value;
  updatedHobby.firstInstrument = document.getElementById("first-Instrument").value;
  updatedHobby.yearsInstrument = document.getElementById("how-long").value;
  updatedHobby.musicClasses = document.getElementById("music-classes").value;
  updatedHobby.howToVideos = document.getElementById("howtovids").value;
  updatedHobby.practice = document.getElementById("practice").value;
  updatedHobby.performance = document.getElementById("performance").value;
  updatedHobby.songwriting = document.getElementById("songwriting").value;
  updatedHobby.family = document.getElementById("family").value;
  updatedHobby.top3Artists = document.getElementById("top3artists").value;
  updatedHobby.genre = document.getElementById("genre").value;
  updatedHobby.earworm = document.getElementById("earworm").value;
  updatedHobby.listenHours = document.getElementById("listenhours").value;
  updatedHobby.provider = document.getElementById("provider").value;
  updatedHobby.albums = document.getElementById("albums").value;
  updatedHobby.memorableConcert = document.getElementById("concert-memo").value;
  updatedHobby.dreamConcert = document.getElementById("dream-concert").value;
  updatedHobby.dreamArtist = document.getElementById("dream-artist").value;
  
  
      $.ajax({
      type: 'POST',
      url: "https://cse-120-2021-api-samantha.herokuapp.com/data/update",
      data: updatedHobby,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
}

//new
function loadExistingData() {
  myMusicHobbyData = [];
  myBookData = [];
  $.ajax({
      type : "GET",
      url : "https://cse-120-2021-api-samantha.herokuapp.com/data",
      dataType : "json",
      success : function(data) {
        loadedData = data.data;
        data.data.forEach(elem => {
          if (elem["owner"] == "Samantha Isabella Adalia") {
            if (elem["project"] == "Survey: Music Hobby") {
              myMusicHobbyData.push(elem);
            } else {
              myBookData.push(elem);
            }
            }
        })
        displayData(myMusicHobbyData, "musicDataContainer");
        displayData(myBookData, "bookDataContainer");
      },
      error : function(data) {
          console.log("Error")
      }
  });
}

function displayData(data, containerDivName) {
    document.getElementById(containerDivName).innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })

        if (elem["owner"] == "Samantha Isabella Adalia") {
          var button2 = document.createElement("button");
          button2.innerHTML = "Edit";
          button2.className = "editButton";
          button2.id = "edit_"+ elem["_id"];
          button2.addEventListener("click", function(e){
          editData(e.target.id);
          }, false);
          item.appendChild(button2);
          
        }

        if (elem["owner"] == "Samantha Isabella Adalia" || (elem["fullName"] && elem["fullName"].indexOf("Sam") > -1)) {
          var button = document.createElement("button");
          button.innerHTML = "Delete";
          button.id = elem["_id"];
          button.addEventListener("click", function(e){
          deleteData(e.target.id);
          }, false);
          item.appendChild(button);
         }
         document.getElementById(containerDivName).appendChild(item);
     
    })
    

}


//GitHub from Yervand

/* const express = require('express');
const bodyParser  = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId; 

const uri =
  "mongodb+srv://samantha-admin:R@m1M@lek777$@cluster0.ng69g.mongodb.net/cse120-2021-db?retryWrites=true&w=majority";

const client = new MongoClient(uri);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors())

app.use(function (req, res, next) {
    res.header('Cache-Control',
               'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',
                  'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Max-Age', '30000');
    res.setHeader('Access-Control-Allow-Headers',
                  'Content-Type, Authorization, X-Requested-With');
    next();
});  

app.get('/', function (req, res) {
  res.render('index', {});
})

app.post('/', function (req, res) {
  res.send({"message":"Sent"});
})

app.get('/data', function (req, res) {
  client.connect()
  .then(client => {
    client.db('cse120-2021-db').collection('books').find().toArray()
      .then(results => {
        console.log(results)
        res.send({"data":results});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})

app.post('/data', function (req, res) {
  client.connect()
  .then(client => {
    client.db('cse120-2021-db').collection('books').insertOne(req.body)
      .then(result => {
        console.log(result)
        res.send({"message":"Added"});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})

app.post('/data/update', function (req, res) {
   //ToDo: Please replace this with Edit/Update code
  collection.update(criteria, update[[, options], callback]);

})

app.post('/data/delete', function (req, res) {
  client.connect()
  .then(client => {
    let id = req.body.id;
    const query = { "_id": ObjectId(id)};
    client.db('cse120-2021-db').collection('books').deleteOne(query)
      .then(result => {
        console.log(result.deletedCount)
        res.send({"deleted":result.deletedCount});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})

app.listen(port, function () {
    console.log('Example app listening on port 3001!')
})

app.get('*', function(req, res) {
        res.status(404).send('Bad/Default Route.');
}); */
