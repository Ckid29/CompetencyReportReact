var catalog = [
    {
            _id: "1",
            price: 12.32,
            stock: 13,
            title: "FF7",
            image: "ff7.jpg",
            discount: 5,
            category: "RPG",
        },
        {
            _id: "2",
            price: 22.71,
            stock: 21,
            title: "ChronoTrigger",
            image: "ChronoTrigger.jpg",
            discount: 10,
            category: "RPG",
        },
        {
            _id: "3",
            price: 32.0,
            stock: 20,
            title: "FF8",
            image: "FF8.jpg",
            discount: 0,
            category: "RPG",
        },
        {
            _id: "4",
            price: 32.0,
            stock: 20,
            title: "GoldenEye",
            image: "Goldeneye.jpg",
            discount: 0,
            category: "Action",
        },
        {
            _id: "5",
            price: 32.0,
            stock: 20,
            title: "PokemonStadium",
            image: "PokemonStadium.jpg",
            discount: 0,
            category: "Rpg",
        },
        {
            _id: "6",
            price: 32.0,
            stock: 20,
            title: "StarCraft",
            image: "starcraft.jpg",
            discount: 0,
            category: "Adventure",
        },
        {
            _id: "7",
            price: 32.0,
            stock: 20,
            title: "StarFox",
            image: "Starfox.jpg",
            discount: 0,
            category: "Action",
        },
        {
            _id: "8",
            price: 32.0,
            stock: 20,
            title: "WorldofWarcraft",
            image: "WorldofWarcraft.jpg",
            discount: 0,
            category: "Strategy",
        },
        {
            _id: "9",
            price: 32.0,
            stock: 20,
            title: "WWFSmackdown",
            image: "WWFSmackdown.jpg",
            discount: 0,
            category: "Action",
        },
        {
            _id: "10",
            price: 32.0,
            stock: 20,
            title: "Zelda",
            image: "Zelda.jpg",
            discount: 0,
            category: "Adventure",
        },
]; 

class DataService{
    getCatalog(){
        //some instructions to
        //retrieve data from the actual server

        return catalog;
    }
}
export default DataService;