

let Guest_List : string[] = ['Jawad','Sadiq','Qasim'];

for(let i =0; i<Guest_List.length; i++){
   
   console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;
    
}


let absent_Guest :string = 'Qasim';

let new_Guest :string = 'Abdulrauf';

Guest_List[2] = new_Guest;

for(let i =0; i<Guest_List.length; i++){
   
    console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;
     
 }

 console.log(`Mr. ${absent_Guest} is not coming to the party`);
 