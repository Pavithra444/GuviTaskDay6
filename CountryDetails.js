const countriesjson=require('./all.json');  //json file assigned to an object

//Task-A
function AsianCountries()
{
    var Arr=[];
    var resultArr=[];
        Arr=[...countriesjson];

        resultArr=Arr.filter(filterElements);  //Filter Method

        console.log("AsianCountries");
        console.log("**************");
        for(i in resultArr)
            {
                console.log(resultArr[i].name.common);
            }
       
            function filterElements(element, index, array) {
            
                     return element.region=="Asia";
                
            
          }
         
}
//_________________________________________________________________________________________________

//Task-B

function Population()
{
    var Arr=[];
    var resultArr=[];
        Arr=[...countriesjson];

        resultArr=Arr.filter(filterElements);  //Filter Method

        console.log("Population Less Than 2 Lakhs");
        console.log("****************************");
        for(i in resultArr)
            {
                console.log(resultArr[i].name.common);
            }
       
            function filterElements(element, index, array) {

                return element.population<200000;

            
          }
}
//_________________________________________________________________________________________________

//Task-C

function PrintDetails()
{

    countriesjson.forEach((element) => {                //ForEach Method
    
        console.log("Name = " +element.name.common);
        console.log("Capital = " +element.capital);
        console.log("Flag = " + element.flag);
        console.log("**********");
    });

}
//_________________________________________________________________________________________________

//Task-D
function totalPopulation()
 {

    var Arr=[];
    var result=0;
    for(i in countriesjson)
        {
            Arr.push(countriesjson[i].population);
        }

        console.log("Total Population");
        console.log("****************");

        result=Arr.reduce(sumPopulation);  //Reduce Method
        console.log(result);
       
            function sumPopulation(carry,nextElement) {

                return carry+nextElement;

            
          }
 }

 //________________________________________________________________________________________________

//Task-E
function USDCountries()
{
console.log("USD Using Countries:");
let count=1;
for(i in countriesjson)
    {
        for(j in countriesjson[i].currencies)
            {
                if(countriesjson[i].currencies[j].name=='United States dollar')
                    {
                        console.log(count+" . " +countriesjson[i].name.common);
                        count++;
                    }
                
            }
            
       
    }

}
//_________________________________________________________________________________________________
console.log("BEGINNING OF OUTPUT OF TASK A");
AsianCountries();   //TaskA
console.log("END OF OUTPUT OF TASK A");

console.log("BEGINNING OF OUTPUT OF TASK B");
Population();       //TaskB
console.log("END OF OUTPUT OF TASK B");

console.log("BEGINNING OF OUTPUT OF TASK C");
PrintDetails();     //TaskC
console.log("END OF OUTPUT OF TASK C");

console.log("BEGINNING OF OUTPUT OF TASK D");
totalPopulation();  //TaskD
console.log("END OF OUTPUT OF TASK D");

console.log("BEGINNING OF OUTPUT OF TASK E");
USDCountries();     //TaskE
console.log("END OF OUTPUT OF TASK E");









