// export const BookStyle = 'bookstyle';

export function getBookStyle(){
    return BookStyleData;
}

// export function getBookStyleById(id){
//     return BookStyleData.find(item => item.id === id);
// }
export const BookStyleData = [
    {
        id : '001',
        title : 'Back To Old Day',
        imageUri : require('../assets/bookstyle/science_fiction.jpg'),    
        author : 'King Edward',
        chapter : 'Chapter 221, Big Bomb...'
    },
    {
        id : '002',
        title : 'The Forbidden Love',
        imageUri : require('../assets/bookstyle/romance.jpg'),   
        author : 'Kim Choo',
        chapter : 'Chapter 21, She is...' 
    },
    {
        id : '003',
        title : 'Echoes of the Past',
        imageUri : require('../assets/bookstyle/modern_mystery.jpg'),    
        author : 'Alex Mercer',
        chapter : 'Chapter 15, The Unseen Shadow'
    },
    {
        id : '004',
        title : 'Worlds Beyond',
        imageUri : require('../assets/bookstyle/fan_fiction.jpg'),    
        author : 'Samantha Bee',
        chapter : 'Chapter 8, Through the Portal'
    },
    {
        id : '005',
        title : 'Empires Fallen',
        imageUri : require('../assets/bookstyle/historical_fiction.jpg'),    
        author : 'Jonathan Creek',
        chapter : 'Chapter 34, The Last Stand'
    },
    {
        id : '006',
        title : 'Guardians of Lore',
        imageUri : require('../assets/bookstyle/fantasy.jpg'),    
        author : 'Eliza Thornberry',
        chapter : 'Chapter 12, The Mystic Forest'
    },
];
