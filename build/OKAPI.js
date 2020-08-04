var permissionStatus = "SET STATUS";
var sig;
var currentUserId;
var feedPostingObject = {};
var rParams = FAPI.Util.getRequestParameters();
FAPI.init(rParams["api_server"], rParams["apiconnection"],

    function() {
        alert("OK API is initialized");
    },
    /*
    * Второй параметр:
    * функция, которая будет вызвана, если инициализация не удалась.
    */
    function(error) {
        processError(error);
    }
);

function processError(e) {
    console.log(e);
    alert("Couldn't initialize OK API");
}