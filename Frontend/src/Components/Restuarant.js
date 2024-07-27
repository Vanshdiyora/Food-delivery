import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rest1 from '../images/rest1.jpg'
import rest2 from '../images/rest2.jpg'
import rest3 from '../images/rest3.jpg'
import Headers from './Headers';
const restDetails = [
    {
        id: 1,
        name: 'The Rustic Kitchen',
        description: 'Experience farm-to-table dining with a menu crafted from locally sourced produce and artisanal ingredients.',
        image: rest1,
    },
    {
        id: 2,
        name: 'Spice Avenue',
        description: 'Embark on a culinary journey through vibrant flavors of Asian cuisine, blending traditional recipes with modern techniques.',
        image: rest2,
    },
    {
        id: 3,
        name: 'Mediterraneo Bistro',
        description: 'Indulge in the rich and diverse flavors of the Mediterranean, offering a fusion of Greek, Italian, and Spanish dishes.',
        image: rest3,
    },
    {
        id: 4,
        name: 'Sizzling Salsa Grill',
        description: 'A celebration of Latin American cuisine, offering a fiery blend of authentic flavors and bold spices.',
        image: rest1,
    },
    {
        id: 5,
        name: 'The Olive Tree Taverna',
        description: 'Transport yourself to Greece with a menu inspired by the sun-kissed Mediterranean, featuring classic Greek dishes.',
        image: rest2,
    },
    {
        id: 6,
        name: 'Tokyo Fusion House',
        description: 'Experience the art of Japanese fusion cuisine, merging traditional techniques with contemporary flavors.',
        image: rest3,
    },
    {
        id: 7,
        name: 'Rustic Smokehouse BBQ',
        description: 'Dive into a world of smoky goodness with slow-cooked meats, tantalizing BBQ sauces, and hearty sides.',
        image: rest3,
    },
    {
        id: 8,
        name: 'Café Parisienne',
        description: 'Enjoy a taste of Paris with an array of pastries, sandwiches, and French-inspired dishes, served in a cozy atmosphere.',
        image: rest2,
    },
    {
        id: 9,
        name: 'Noodle Emporium',
        description: 'Satisfy your cravings with a diverse selection of noodle dishes from across Asia, each bowl a burst of unique flavors.',
        image: rest1,
    },
    {
        id: 10,
        name: 'The Coastal Catch',
        description: 'Delight in fresh seafood specialties inspired by coastal cuisines, offering a taste of the ocean\'s bounty.',
        image: rest2,
    },
    {
        id: 11,
        name: 'Fiesta Cantina',
        description: 'Revel in the lively ambiance and authentic Mexican cuisine, featuring flavorful tacos, enchiladas, and margaritas.',
        image: rest3,
    },
    {
        id: 12,
        name: 'Urban Garden Eats',
        description: 'Experience innovative vegetarian and vegan cuisine, highlighting fresh, locally sourced produce in creative dishes.',
        image: rest1,
    },
    {
        id: 13,
        name: 'Taste of India Palace',
        description: 'Immerse yourself in the spices and aromas of India, offering a diverse menu of regional Indian delicacies.',
        image: rest3,
    },
    {
        id: 14,
        name: 'Bella Napoli Pizzeria',
        description: 'Savor traditional Neapolitan-style pizzas crafted with the finest ingredients and baked to perfection.',
        image: rest1,
    },
    {
        id: 15,
        name: 'Sushi Harbor',
        description: 'Explore the art of sushi-making with an array of fresh seafood delicacies and meticulously crafted sushi rolls.',
        image: rest2,
    }
];

function Restuarant() {
    return (
        <>
        <Headers/>
          <div className='rest-container'>
            {restDetails.map((item, index) => (
              <Card key={index} style={{ width: '18rem', margin: '6px', position: 'relative' }}>
                <Card.Img variant="top" src={item.image} style={{width:"286px",height:'180px'}}/>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Button variant="primary" style={{backgroundColor:'brown'}}>Menu</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      );
      }

export default Restuarant;