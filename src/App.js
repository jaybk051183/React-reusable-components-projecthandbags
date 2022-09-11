import React from 'react';
import Button from './components/Button';
import Product from './components/Product';
import Tile from './components/Tile';
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import './App.css';

function App() {
  return (
      <>
      <nav>
        <Button
            isDisabled={false}
            clickHandler={()=>console.log("To the collection")}>
            To the collection
        </Button>
        <Button
            isDisabled={false}
            clickHandler={()=>console.log("Shop all bags")}>
            Shop all bags
        </Button>
        <Button
            isDdisabled={true}
            clickHandler={()=>console.log("Pre-orders")}>
            Pre-orders
        </Button>
      </nav>
      <main>
          <Product
              label="Best seller"
              img={bag_one}
              title="The handy bag"
              price={400}
          />

          <Product
              label="Best seller"
              img={bag_two}
              title="The stylish bag"
              price={250}
          />

          <Product
              label="New collection"
              img={bag_three}
              title="The simple bag"
              price={300}
          />

          <Product
              label="New collection"
              img={bag_four}
              title="The trendy bag"
              price={150}
          />
      </main>
          <footer>
              <Tile title="The brand">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur ducimus exercitationem id minima mollitia nemo nobis, perferendis placeat totam unde voluptas. Dolores, modi quas. Accusamus architecto ea est nobis!</p>
              </Tile>

              <Tile
                  img={brand}
                  imgTitle="Logo"
                  >
              </Tile>

              <Tile
                  img={our_story}
                  imgTitle="story"
                  >
             </Tile>

              <Tile title="Our story">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur dignissimos itaque maiores placeat sunt, vero! A amet aspernatur dolore dolorem, molestiae nobis sit! Illum rem repellat sunt! Placeat, reprehenderit.</p>
              </Tile>
          </footer>
          </>
  );
}

export default App;


