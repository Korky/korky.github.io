var context_db = {
    get_context:function (params) {
        
        var ret = { title:params, content:[] };
        switch (params){
            
            case "home":
            ret.content = [];
            return ret; 
            
            case "tutorials":
            ret.content = [];
            return ret;
            
            case "about":
            ret.content = [];
            return ret;
           
            
            default:
            console.log("Context does not exist");
            break;
            
        }
    }
};