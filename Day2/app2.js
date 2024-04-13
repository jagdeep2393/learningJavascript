// Here we go with literals 
// This will set the ipArr with value of above array elements
const ipArr = ["172.17.208.190","172.17.208.191","172.17.124.20"];

// putting extra commas inside array behave accroding the position of commas
const alphaArr=['a',,'c',]; //should be length 3
console.log(alphaArr.length);
const alphaArr1=['a',,'c',,]; //should be length 3 because last commas got ignored 
console.log(alphaArr.length);
const tempratureToday = -98.4;
console.log(typeof tempratureToday);


const print = (segments,...args)=>{
    console.log(segments);
}
const rulerCount=4;
print `There are 
${rulerCount}`;

// For Multiline String need to use  \ in end of each line because all the extra spaces and new lines are ignored by string by Default 
const textMessage="hello Dear Sir, \
this is requested to you \
thanks \
abc";
console.log(textMessage);