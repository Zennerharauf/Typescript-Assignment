

let Guest_List : string[] = ['Jawad','Sadiq','Qasim'];

// for(let i =0; i<Guest_List.length; i++){
   
   // console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;
    
// }


let absent_Guest :string = 'Qasim';

let new_Guest :string = 'Abdulrauf';

Guest_List[2] = new_Guest;

for(let i =0; i<Guest_List.length; i++){
   
    console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;
     
 }

 console.log(`Mr. ${absent_Guest} is not coming to the party`);

 console.log('GOOD NEWS! We find Big Table So we are invinting 3 more guests.');
 
 Guest_List.unshift('Naseer Ahmeed');
 Guest_List.splice(2, 0, 'Shazia');
 Guest_List.push('Hamza');

 for(let i =0; i<Guest_List.length; i++){
   
   console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;
    
}