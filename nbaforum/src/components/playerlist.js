import React from 'react';
import PlayerCard from './components/PlayerCard';

const players = [
    // Atlanta Hawks
    { name: 'Bogdan Bogdanovic', imgSrc: 'img/atlantahawks/bogdanbogdanovic.png' },
    { name: 'Clint Capela', imgSrc: 'img/atlantahawks/clintcapela.png' },
    { name: 'Deandre Hunter', imgSrc: 'img/atlantahawks/deandrehunter.png' },
    { name: 'Dejounte Murray', imgSrc: 'img/atlantahawks/dejountemurray.png' },
    { name: 'Trae Young', imgSrc: 'img/atlantahawks/traeyoung.png' },
  
    // Boston Celtics
    { name: 'Derrick White', imgSrc: 'img/bostonceltics/derrickwhite.png' },
    { name: 'Jaylen Brown', imgSrc: 'img/bostonceltics/jaylenbrown.png' },
    { name: 'Jayson Tatum', imgSrc: 'img/bostonceltics/jaysontatum.png' },
    { name: 'Jrue Holiday', imgSrc: 'img/bostonceltics/jrueholiday.png' },
    { name: 'Kristaps Porzingis', imgSrc: 'img/bostonceltics/kristapsporzingis.png' },
  
    // Brooklyn Nets
    { name: 'Cam Thomas', imgSrc: 'img/brooklynnets/camthomas.png' },
    { name: 'Dennis Schroder', imgSrc: 'img/brooklynnets/dennisschroder.png' },
    { name: 'Dorian Finney-Smith', imgSrc: 'img/brooklynnets/dorianfinney-smith.png' },
    { name: 'Mikal Bridges', imgSrc: 'img/brooklynnets/mikalbridges.png' },
    { name: 'Nic Claxton', imgSrc: 'img/brooklynnets/nicclaxton.png' },
  
    // Charlotte Hornets
    { name: 'Brandon Miller', imgSrc: 'img/charlottehornets/brandonmiller.png' },
    { name: 'Cody Martin', imgSrc: 'img/charlottehornets/codymartin.png' },
    { name: 'LaMelo Ball', imgSrc: 'img/charlottehornets/lameloball.png' },
    { name: 'Mark Williams', imgSrc: 'img/charlottehornets/markwilliams.png' },
    { name: 'Miles Bridges', imgSrc: 'img/charlottehornets/milesbridges.png' },
  
    // Chicago Bulls
    { name: 'Alex Caruso', imgSrc: 'img/chicagobulls/alexcaruso.png' },
    { name: 'Ayo Dosunmu', imgSrc: 'img/chicagobulls/ayodosunmu.png' },
    { name: 'Coby White', imgSrc: 'img/chicagobulls/cobywhite.png' },
    { name: 'DeMar DeRozan', imgSrc: 'img/chicagobulls/demarderozan.png' },
    { name: 'Nikola Vucevic', imgSrc: 'img/chicagobulls/nikolavucevic.png' },
  
    // Dallas Mavericks
    { name: 'Daniel Gafford', imgSrc: 'img/dallasmavericks/danielgafford.png' },
    { name: 'Derrick Jones Jr.', imgSrc: 'img/dallasmavericks/derrickjonesjr.png' },
    { name: 'Kyrie Irving', imgSrc: 'img/dallasmavericks/kyrieirving.png' },
    { name: 'Luka Doncic', imgSrc: 'img/dallasmavericks/lukadoncic.png' },
    { name: 'P.J. Washington', imgSrc: 'img/dallasmavericks/pjwashington.png' },
  
    // Denver Nuggets
    { name: 'Aaron Gordon', imgSrc: 'img/denvernuggets/aarongordon.png' },
    { name: 'Jamal Murray', imgSrc: 'img/denvernuggets/jamalmurray.png' },
    { name: 'Kentavious Caldwell-Pope', imgSrc: 'img/denvernuggets/kentaviouscaldwell-pope.png' },
    { name: 'Michael Porter Jr.', imgSrc: 'img/denvernuggets/michaelporterjr.png' },
    { name: 'Nikola Jokic', imgSrc: 'img/denvernuggets/nikolajokic.png' },
  
    // Detroit Pistons
    { name: 'Ausar Thompson', imgSrc: 'img/detroitpistons/ausarthompson.png' },
    { name: 'Cade Cunningham', imgSrc: 'img/detroitpistons/cadecunningham.png' },
    { name: 'Jaden Ivey', imgSrc: 'img/detroitpistons/jadenivey.png' },
    { name: 'Jalen Duren', imgSrc: 'img/detroitpistons/jalenduren.png' },
    { name: 'Simone Fontecchio', imgSrc: 'img/detroitpistons/simonefontecchio.png' },
  
    // Golden State Warriors
    { name: 'Andrew Wiggins', imgSrc: 'img/goldenstatewarriors/andrewwiggins.png' },
    { name: 'Draymond Green', imgSrc: 'img/goldenstatewarriors/draymondgreen.png' },
    { name: 'Klay Thompson', imgSrc: 'img/goldenstatewarriors/klaythompson.png' },
    { name: 'Steph Curry', imgSrc: 'img/goldenstatewarriors/stephcurry.png' },
    { name: 'Trayce Jackson Davis', imgSrc: 'img/goldenstatewarriors/traycejacksondavis.png' },
  
    // Houston Rockets
    { name: 'Alperen Sengun', imgSrc: 'img/houstonrockets/alperensengun.png' },
    { name: 'Dillon Brooks', imgSrc: 'img/houstonrockets/dillonbrooks.png' },
    { name: 'Fred VanVleet', imgSrc: 'img/houstonrockets/fredvanvleet.png' },
    { name: 'Jabari Smith Jr.', imgSrc: 'img/houstonrockets/jabarismithjr.png' },
    { name: 'Jalen Green', imgSrc: 'img/houstonrockets/jalengreen.png' },
  
    // Indiana Pacers
    { name: 'Aaron Nesmith', imgSrc: 'img/indianapacers/aaronnesmith.png' },
    { name: 'Andrew Nembhard', imgSrc: 'img/indianapacers/andrewnembhard.png' },
    { name: 'Myles Turner', imgSrc: 'img/indianapacers/mylesturner.png' },
    { name: 'Pascal Siakam', imgSrc: 'img/indianapacers/pascalsiakam.png' },
    { name: 'Tyrese Haliburton', imgSrc: 'img/indianapacers/tyresehaliburton.png' },
  
    // LA Clippers
    { name: 'Ivica Zubac', imgSrc: 'img/laclippers/ivicazubac.png' },
    { name: 'James Harden', imgSrc: 'img/laclippers/jamesharden.png' },
    { name: 'Kawhi Leonard', imgSrc: 'img/laclippers/kawhileonard.png' },
    { name: 'Paul George', imgSrc: 'img/laclippers/paulgeorge.png' },
    { name: 'Terrance Mann', imgSrc: 'img/laclippers/terancemann.png' },
  
    // Los Angeles Lakers
    { name: 'Anthony Davis', imgSrc: 'img/losangeleslakers/anthonydavis.png' },
    { name: 'Austin Reaves', imgSrc: 'img/losangeleslakers/austinreaves.png' },
    { name: 'D\'Angelo Russell', imgSrc: 'img/losangeleslakers/dlorussel.png' },
    { name: 'LeBron James', imgSrc: 'img/losangeleslakers/lebronjames.png' },
    { name: 'Rui Hachimura', imgSrc: 'img/losangeleslakers/ruihachimura.png' },
  
    // Memphis Grizzlies
    { name: 'Desmond Bane', imgSrc: 'img/memphisgrizzlies/desmondbane.png' },
    { name: 'Ja Morant', imgSrc: 'img/memphisgrizzlies/jamorant.png' },
    { name: 'Jaren Jackson Jr.', imgSrc: 'img/memphisgrizzlies/jarenjacksonjr.png' },
    { name: 'Marcus Smart', imgSrc: 'img/memphisgrizzlies/marcussmart.png' },
    { name: 'Vince Williams Jr.', imgSrc: 'img/memphisgrizzlies/vincewilliamsjr.png' },
  
    // Miami Heat
    { name: 'Bam Adebayo', imgSrc: 'img/miamiheat/bamadebayo.png' },
    { name: 'Jimmy Butler', imgSrc: 'img/miamiheat/jimmybutler.png' },
    { name: 'Kyle Lowry', imgSrc: 'img/miamiheat/kylelowry.png' },
    { name: 'Kevin Love', imgSrc: 'img/miamiheat/love.png' },
    { name: 'Tyler Herro', imgSrc: 'img/miamiheat/tylerherro.png' },
  
    // Milwaukee Bucks
    { name: 'Bobby Portis', imgSrc: 'img/milwaukeebucks/bobbyportis.png' },
    { name: 'Brook Lopez', imgSrc: 'img/milwaukeebucks/brooklopez.png' },
    { name: 'Damian Lillard', imgSrc: 'img/milwaukeebucks/damianlillard.png' },
    { name: 'Giannis Antetokounmpo', imgSrc: 'img/milwaukeebucks/giannisantetokounmpo.png' },
    { name: 'Khris Middleton', imgSrc: 'img/milwaukeebucks/khrismiddleton.png' },
  
    // Minnesota Timberwolves
    { name: 'Anthony Edwards', imgSrc: 'img/minnesotatimberwolves/anthonyedwards.png' },
    { name: 'Karl-Anthony Towns', imgSrc: 'img/minnesotatimberwolves/karl-anthonytowns.png' },
    { name: 'Kyle Anderson', imgSrc: 'img/minnesotatimberwolves/kyleanderson.png' },
    { name: 'Mike Conley', imgSrc: 'img/minnesotatimberwolves/mikeconley.png' },
    { name: 'Rudy Gobert', imgSrc: 'img/minnesotatimberwolves/rudygobert.png' },
  
    // New Orleans Pelicans
    { name: 'Brandon Ingram', imgSrc: 'img/neworleanspelicans/brandoningram.png' },
    { name: 'CJ McCollum', imgSrc: 'img/neworleanspelicans/cjmccollum.png' },
    { name: 'Herbert Jones', imgSrc: 'img/neworleanspelicans/herbertjones.png' },
    { name: 'Jonas Valanciunas', imgSrc: 'img/neworleanspelicans/jonasvalanciunas.png' },
    { name: 'Zion Williamson', imgSrc: 'img/neworleanspelicans/zionwilliamson.png' },
  
    // New York Knicks
    { name: 'Immanuel Quickley', imgSrc: 'img/newyorkknicks/immanuelquickley.png' },
    { name: 'Jalen Brunson', imgSrc: 'img/newyorkknicks/jalenbrunson.png' },
    { name: 'Julius Randle', imgSrc: 'img/newyorkknicks/juliusrandle.png' },
    { name: 'Mitchell Robinson', imgSrc: 'img/newyorkknicks/mitchellrobinson.png' },
    { name: 'RJ Barrett', imgSrc: 'img/newyorkknicks/rjbarrett.png' },
  
    // Oklahoma City Thunder
    { name: 'Chet Holmgren', imgSrc: 'img/oklahomacitythunder/chetholmgren.png' },
    { name: 'Jalen Williams', imgSrc: 'img/oklahomacitythunder/jalenwilliams.png' },
    { name: 'Josh Giddey', imgSrc: 'img/oklahomacitythunder/joshgiddey.png' },
    { name: 'Luguentz Dort', imgSrc: 'img/oklahomacitythunder/luguentzdort.png' },
    { name: 'Shai Gilgeous-Alexander', imgSrc: 'img/oklahomacitythunder/shaigilgeous-alexander.png' },
  
    // Orlando Magic
    { name: 'Cole Anthony', imgSrc: 'img/orlandomagic/coleanthony.png' },
    { name: 'Franz Wagner', imgSrc: 'img/orlandomagic/franzwagner.png' },
    { name: 'Markelle Fultz', imgSrc: 'img/orlandomagic/markellefultz.png' },
    { name: 'Paolo Banchero', imgSrc: 'img/orlandomagic/paolobanchero.png' },
    { name: 'Wendell Carter Jr.', imgSrc: 'img/orlandomagic/wendellcarterjr.png' },
  
    // Philadelphia 76ers
    { name: 'D\'Anthony Melton', imgSrc: 'img/philadelphia76ers/d\'anthonymelton.png' },
    { name: 'Joel Embiid', imgSrc: 'img/philadelphia76ers/joelembiid.png' },
    { name: 'Kelly Oubre Jr.', imgSrc: 'img/philadelphia76ers/kellyoubrejr.png' },
    { name: 'Tyrese Maxey', imgSrc: 'img/philadelphia76ers/tyresemaxey.png' },
    { name: 'Tobias Harris', imgSrc: 'img/philadelphia76ers/tobiasharris.png' },
  
    // Phoenix Suns
    { name: 'Bradley Beal', imgSrc: 'img/phoenixsuns/bradleybeal.png' },
    { name: 'Devin Booker', imgSrc: 'img/phoenixsuns/devinbooker.png' },
    { name: 'Kevin Durant', imgSrc: 'img/phoenixsuns/kevindurant.png' },
    { name: 'Yuta Watanabe', imgSrc: 'img/phoenixsuns/yutawatanabe.png' },
    { name: 'Deandre Ayton', imgSrc: 'img/phoenixsuns/deandreayton.png' },
  
    // Portland Trail Blazers
    { name: 'Anfernee Simons', imgSrc: 'img/portlandtrailblazers/anferneesimons.png' },
    { name: 'Jerami Grant', imgSrc: 'img/portlandtrailblazers/jeramigrant.png' },
    { name: 'Scoot Henderson', imgSrc: 'img/portlandtrailblazers/loothenderson.png' },
    { name: 'Matisse Thybulle', imgSrc: 'img/portlandtrailblazers/matissethybulle.png' },
    { name: 'Shaedon Sharpe', imgSrc: 'img/portlandtrailblazers/shaedonsharpe.png' },
  
    // Sacramento Kings
    { name: 'DeAaron Fox', imgSrc: 'img/sacramentokings/de\'aaronfox.png' },
    { name: 'Domantas Sabonis', imgSrc: 'img/sacramentokings/domantassabonis.png' },
    { name: 'Harrison Barnes', imgSrc: 'img/sacramentokings/harrisonbarnes.png' },
    { name: 'Keegan Murray', imgSrc: 'img/sacramentokings/keeganmurray.png' },
    { name: 'Malik Monk', imgSrc: 'img/sacramentokings/malikmonk.png' },
  
    // San Antonio Spurs
    { name: 'Jeremy Sochan', imgSrc: 'img/sanantoniospurs/jeremysochan.png' },
    { name: 'Keldon Johnson', imgSrc: 'img/sanantoniospurs/keldonjohnson.png' },
    { name: 'Malaki Branham', imgSrc: 'img/sanantoniospurs/malakibranham.png' },
    { name: 'Tre Jones', imgSrc: 'img/sanantoniospurs/trejones.png' },
    { name: 'Victor Wembanyama', imgSrc: 'img/sanantoniospurs/victorwembanyama.png' },
  
    // Toronto Raptors
    { name: 'Gary Trent Jr.', imgSrc: 'img/torontoraptors/garytrentjr.png' },
    { name: 'Jakob Poeltl', imgSrc: 'img/torontoraptors/jakobpoeltl.png' },
    { name: 'OG Anunoby', imgSrc: 'img/torontoraptors/oganunoby.png' },
    { name: 'Pascal Siakam', imgSrc: 'img/torontoraptors/pascalsiakam.png' },
    { name: 'Scottie Barnes', imgSrc: 'img/torontoraptors/scottiebarnes.png' },
  
    // Utah Jazz
    { name: 'Jordan Clarkson', imgSrc: 'img/utahjazz/jordanclarkson.png' },
    { name: 'Lauri Markkanen', imgSrc: 'img/utahjazz/laurimarkkanen.png' },
    { name: 'Kelly Olynyk', imgSrc: 'img/utahjazz/kellyolynyk.png' },
    { name: 'Talen Horton-Tucker', imgSrc: 'img/utahjazz/talenhorton-tucker.png' },
    { name: 'Walker Kessler', imgSrc: 'img/utahjazz/walkerkessler.png' },
  
    // Washington Wizards
    { name: 'Corey Kispert', imgSrc: 'img/washingtonwizards/coreykispert.png' },
    { name: 'Deni Avdija', imgSrc: 'img/washingtonwizards/deniavdija.png' },
    { name: 'Daniel Gafford', imgSrc: 'img/washingtonwizards/danielgafford.png' },
    { name: 'Jordan Poole', imgSrc: 'img/washingtonwizards/jordanpoole.png' },
    { name: 'Kyle Kuzma', imgSrc: 'img/washingtonwizards/kylekuzma.png' }
  ];

const PlayerList = () => {
  return (
    <section className="players">
      <h2>NBA Players</h2>
      <div className="card-container">
        {players.map(player => (
          <PlayerCard key={player.name} imgSrc={player.imgSrc} name={player.name} />
        ))}
      </div>
    </section>
  );
};

export default PlayerList;