import expresso from './../assets/expresso.jpg'
import capuccino from './../assets/capuccino.jpg'
import latte from './../assets/latte.jpg'
import americano from './../assets/amerikano.jpeg'
import macchiato from './../assets/macchiato.jpg'
import mocha from './../assets/mocha.jpg'
import flatWhite from './../assets/flatWhite.jpg'
import affogato from './../assets/affogato.jpg'
import turkish from './../assets/turkish.jpg'
import vienna from './../assets/vienna.jpg'

const style = {
    width: '100%',
    height: '14rem',
    borderRadius: '10px'
}

const coffeeProductsData = [
    {
        name: "Espresso",
        type: "Dark Roast",
        origin: "Italy",
        price: 100,
        description: "A strong and concentrated coffee drink brewed by forcing hot water through finely-ground coffee beans.",
        imageUrl: <img src={expresso}  style={style} />
    },
    {
        name: "Cappuccino",
        type: "Medium Roast",
        origin: "Italy",
        price: 115,
        description: "An Italian coffee drink that is traditionally prepared with double espresso, hot milk, and steamed milk foam.",
        imageUrl: <img src={capuccino} style={style}  />
    },
    {
        name: "Latte",
        type: "Medium Roast",
        origin: "Italy",
        price: 100,
        description: "A coffee drink made with espresso and steamed milk. It contains more milk than a cappuccino and has a creamier texture.",
        imageUrl: <img src={latte} style={style}  />
    },
    {
        name: "Americano",
        type: "Light Roast",
        origin: "United States",
        price: 100,
        description: "A coffee drink prepared by diluting espresso with hot water, giving it a similar strength to traditional brewed coffee.",
        imageUrl: <img src={americano} style={style}  />
    },
    {
        name: "Macchiato",
        type: "Dark Roast",
        origin: "Italy",
        price: 115,
        description: "An espresso coffee drink with a small amount of milk, usually foamed. It means 'stained' or 'spotted' in Italian.",
        imageUrl: <img src={macchiato} style={style}  />
    },
    {
        name: "Mocha",
        type: "Dark Roast",
        origin: "Middle East",
        price: 120,
        description: "A coffee drink made with espresso, steamed milk, chocolate syrup, and topped with whipped cream.",
        imageUrl: <img src={mocha} style={style}  />
    },
    {
        name: "Flat White",
        type: "Medium Roast",
        origin: "Australia",
        price: 115,
        description: "A coffee drink prepared with espresso and microfoam (steamed milk with small, fine bubbles), creating a velvety texture.",
        imageUrl: <img src={flatWhite} style={style}  />
    },
    {
        name: "Affogato",
        type: "Medium Roast",
        origin: "Italy",
        price: 115,
        description: "A dessert consisting of a scoop of vanilla gelato or ice cream topped or 'drowned' with a shot of hot espresso.",
        imageUrl: <img src={affogato} style={style}  />
    },
    {
        name: "Turkish Coffee",
        type: "Dark Roast",
        origin: "Turkey",
        price: 120,
        description: "A traditional method of preparing coffee where finely powdered roast coffee beans are simmered in a pot, typically with sugar, and served unfiltered.",
        imageUrl: <img src={turkish} style={style}  />
    },
    {
        name: "Vienna Coffee",
        type: "Medium Roast",
        origin: "Austria",
        price: 120,
        description: "A coffee drink made by adding whipped cream to a double shot of espresso, creating a luxurious and indulgent beverage.",
        imageUrl: <img src={vienna}  style={style} />
    }
];

export default coffeeProductsData;
