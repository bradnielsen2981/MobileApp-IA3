alert("loaded");

/* This helper function sends and receive data to and from a server so to avoid a page refresh
urlstring, methodstring="GET"or"POST", parameterobject={var1:value,var1:value}, crossdomain=true or false, responsehandler=functionname */
function AJAXrequest(urlstring, methodstring, responsehandler=null, parametersobject=null, sendtype="json", crossdomainbool=true )
{
    $(document).ready(function() { //make sure script is fully loaded, otherwise errors will occur
        $.ajax({
            type: methodstring,
            headers: { 'Access-Control-Allow-Origin': '*' },
            crossDomain: crossdomainbool, //THIS IS REQUIRED IF COMMUNICATING TO NON-LOCAL SERVER
            url: urlstring,
            data: parametersobject, //{var1:1,var2:"hello"} //like a Python Dictionary
            dataType : sendtype,  //calls json.parse to convert results (JSON) to Javascript Object
            success: function(result) {
                responsehandler(result); //send results to responsehandler function
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
}

function defaulthandler(results)
{
    console.log(results.message);
}

//login
function login()
{
    alert("login");
    //get all form variables using getElement and store in Parameters object
    //create an AJAXrequest using Parameters object
}

//get the weather api
function readWeatherAPI()
{
    //create an AJAX requestion to weather api
    //display weather api
}