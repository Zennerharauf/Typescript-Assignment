

let Guest_List : string[] = ['Jawad','Sadiq','Qasim'];
// for(let i =0; i<Guest_List.length; i++){
   // console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;
// }
let absent_Guest :string = 'Qasim';
let new_Guest :string = 'Abdulrauf';
Guest_List[2] = new_Guest;
//for(let i =0; i<Guest_List.length; i++){
  //  console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;   
 //}
 console.log(`Mr. ${absent_Guest} is not coming to the party`);
 console.log('GOOD NEWS! We find Big Table So we are invinting 3 more guests.');
 
 Guest_List.unshift('Naseer Ahmeed');
 Guest_List.splice(2, 0, 'Shazia');
 Guest_List.push('Hamza');

 // yahan par main ne 6 guest ke array ko print karwaya h. 
 for(let i =0; i<Guest_List.length; i++){
   console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n') ;
    
}
// sorry massage to guest for not inviting.
console.log('\nSorry we can not arrange big table, only two peoples will be invited.');

// yahan par main ne guest remove kiya hn.
while(Guest_List.length > 2){
  let remove_Guest = Guest_List.pop();
  console.log(`Sorry Mr.${remove_Guest}, you are not invited for dinner.`);

}
//hamare bache hue 2 invited guest. 
for(let i =0; i<Guest_List.length; i++){
   console.log('Dear Mr. ' + Guest_List[i] +',\n\nyou are still invited \n\nThank You!\n\n') ;
}
//mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
