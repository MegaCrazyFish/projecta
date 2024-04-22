// export const Books = 'booksdata';

export function getBooksData(){
    return BooksData;
}

// export function getBookStyleById(id){
//     return BookStyleData.find(item => item.id === id);
// }

export const BooksData = [

    {
        id : '001',
        title : 'Happy',
        imageUri : require('../assets/books/happy.jpg'), 
        author : 'Morgan Maxwell',   
    },

    {
        id : '002',
        title : 'Horror',
        imageUri : require('../assets/books/horror.jpg'),    
        author : 'Regina Phalange',   

    },

    {
        id : '003',
        title : 'Romance',
        imageUri : require('../assets/books/romance.jpg'),   
        author : 'Angelina Aludo',   
 
    },

    {
        id : '004',
        title : 'Fantasy',
        imageUri : require('../assets/books/fantasy.jpg'),  
        author : 'Olivia Wilson',   
  
    },

    {
        id : '005',
        title : 'Non-Fiction',
        imageUri : require('../assets/books/nonfiction.jpg'),  
        author : 'Olivia Wilson',   
  
    },

    {
        id : '006',
        title : 'Sci-fiction',
        imageUri : require('../assets/books/scifi.jpg'),  
        author : 'Olivia Wilson',   
  
    },

];