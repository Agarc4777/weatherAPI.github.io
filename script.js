function buildQueryURL() {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?";
    var queryParameters = {"api-key": "4d78d4ca9d2b33386d0f53a11781c0de"};
    
    queryParameters.q = $("#search-term")
      .val()
      .trim();
}
function addChanges () {
    

}

function addButtons () {
    var button = $(":button").addClass("<div>");
} 