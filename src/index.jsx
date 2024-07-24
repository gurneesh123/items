import React from "react";
import ReactDOM from "react-dom";
import ItemCard from "./ItemCard";



function App() {
  return (
    <div className="container">
      <h1>Red Wines</h1>
      <div className="flexItems">
        <ItemCard
          name="Bordeaux"
          image="/images/wines/red wines/BORDEAUX.jpg"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />
        <ItemCard
          name="Bourgogne"
          image="/images/wines/red wines/BURGUNDY.jpg"
          info="Description of product 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="25.00"
        />
        <ItemCard
          name="Chinon"
          image="/images/wines/red wines/CHINON.jpg"
          info="Description of product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="30.00"
        />
        <ItemCard
          name="Côtes du Rhône"
          image="/images/wines/red wines/COTES.jpg"
          info="Description of product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="30.00"
        />
        <ItemCard
          name="Saumur-Champigny"
          image="/images/wines/red wines/SAMUR.jpg"
          info="Description of product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="30.00"
        />
      </div>

      <h1>White Wines</h1>
      <div className="flexItems">
        <ItemCard
          name="Bordeaux Blanc"
          image="/images/wines/white wines/BLANC.png"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />
        <ItemCard
          name="Chablis"
          image="/images/wines/white wines/CHABLIS.jpg"
          info="Description of product 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="25.00"
        />
        <ItemCard
          name=" Gewürztraminer"
          image="/images/wines/white wines/GWA.png"
          info="Description of product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="30.00"
        />
        <ItemCard
          name="Pouilly-Fumé"
          image="/images/wines/white wines/POLLY.jpg"
          info="Description of product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="30.00"
        />
        <ItemCard
          name="Riesling"
          image="/images/wines/white wines/REL.jpg"
          info="Description of product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="30.00"
        />
        <ItemCard
          name="Sancerre"
          image="/images/wines/white wines/SANCERRE.jpg"
          info="Description of product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="30.00"
        />
      </div>

      <h1>Rosé Wines</h1>
      <div className="flexItems">
        <ItemCard
          name="Provence Rosé"
          image="/images/wines/rose wines/PROVENCE 2.jpg"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />
         <ItemCard
          name=" Rosé d'Anjou"
          image="/images/wines/rose wines/ROSE DJO.jpg"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        /> 
        <ItemCard
        name="Tavel"
        image="/images/wines/rose wines/TAVEL.jpg"
        info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
        price="20.00"
      />
      </div>

      <h1>Sparkling Wines</h1>
      <div className="flexItems">
        <ItemCard
          name="Blanc de Blancs"
          image="/images/wines/sparkling wines/BLNC DE.png"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />
          <ItemCard
          name="Brut"
          image="/images/wines/sparkling wines/BRUT.png"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />
          <ItemCard
          name="CrémantdeBourgogne"
          image="/images/wines/sparkling wines/C BOURG.jpg"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />
          <ItemCard
          name="Champagne  Rosé"
          image="/images/wines/sparkling wines/C ROSE.png"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />
          <ItemCard
          name="Crémant de Loire"
          image="/images/wines/sparkling wines/LOIRE.jpg"
          info="Description of product 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil expedita te"
          price="20.00"
        />

      </div>



    </div>

    

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
