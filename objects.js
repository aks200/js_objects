function fun1(){
    var person={
                firstname:"Aks",
                lastname:"Kann",
                Age:17,
                Address:"Ahmedabad",

            
             fullnm:function(){
                return this.firstname+this.lastname;
            }
                
            };
            person.fullnm = function(){
                return this.Age;
            }

   
    //document.getElementById("demo1").innerHTML=person.fullnm();
    document.getElementById("demo").innerHTML=" Age is " + person.fullnm();
}



