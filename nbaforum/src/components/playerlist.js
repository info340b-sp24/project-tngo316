import React from 'react';
import PlayerCard from './PlayerCard';

const players = [
    // Atlanta Hawks
    { name: 'Bogdan Bogdanovic', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/bogdanbogdanovic.png' },
    { name: 'Clint Capela', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/clintcapela.png' },
    { name: 'Deandre Hunter', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/deandrehunter.png' },
    { name: 'Dejounte Murray', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/dejountemurray.png' },
    { name: 'Trae Young', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/traeyoung.png' },
  
    // Boston Celtics
    { name: 'Derrick White', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/derrickwhite.png' },
    { name: 'Jaylen Brown', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/jaylenbrown.png' },
    { name: 'Jayson Tatum', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/jaysontatum.png' },
    { name: 'Jrue Holiday', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/jrueholiday.png' },
    { name: 'Kristaps Porzingis', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/kristapsporzingis.png' },
  
    // Brooklyn Nets
    { name: 'Cam Thomas', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/camthomas.png' },
    { name: 'Dennis Schroder', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/dennisschroder.png' },
    { name: 'Dorian Finney-Smith', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/dorianfinney-smith.png' },
    { name: 'Mikal Bridges', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/mikalbridges.png' },
    { name: 'Nic Claxton', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/nicclaxton.png' },
  
    // Charlotte Hornets
    { name: 'Brandon Miller', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/brandonmiller.png' },
    { name: 'Cody Martin', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/codymartin.png' },
    { name: 'LaMelo Ball', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/lameloball.png' },
    { name: 'Mark Williams', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/markwilliams.png' },
    { name: 'Miles Bridges', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/milesbridges.png' },
  
    // Chicago Bulls
    { name: 'Alex Caruso', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/alexcaruso.png' },
    { name: 'Ayo Dosunmu', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/ayodosunmu.png' },
    { name: 'Coby White', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/cobywhite.png' },
    { name: 'DeMar DeRozan', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/demarderozan.png' },
    { name: 'Nikola Vucevic', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/nikolavucevic.png' },
  
    // Dallas Mavericks
    { name: 'Daniel Gafford', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/danielgafford.png' },
    { name: 'Derrick Jones Jr.', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/derrickjonesjr.png' },
    { name: 'Kyrie Irving', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/kyrieirving.png' },
    { name: 'Luka Doncic', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/lukadoncic.png' },
    { name: 'P.J. Washington', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/pjwashington.png' },
  
    // Denver Nuggets
    { name: 'Aaron Gordon', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/aarongordon.png' },
    { name: 'Jamal Murray', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/jamalmurray.png' },
    { name: 'Kentavious Caldwell-Pope', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/kentaviouscaldwell-pope.png' },
    { name: 'Michael Porter Jr.', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/michaelporterjr.png' },
    { name: 'Nikola Jokic', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/nikolajokic.png' },
  
    // Detroit Pistons
    { name: 'Ausar Thompson', imgSrc: 'img/detroitpistons/ausarthompson.png' },
    { name: 'Cade Cunningham', imgSrc: 'img/detroitpistons/cadecunningham.png' },
    { name: 'Jaden Ivey', imgSrc: 'img/detroitpistons/jadenivey.png' },
    { name: 'Jalen Duren', imgSrc: 'img/detroitpistons/jalenduren.png' },
    { name: 'Simone Fontecchio', imgSrc: 'img/detroitpistons/simonefontecchio.png' },
  
    // Golden State Warriors
    { name: 'Andrew Wiggins', team: 'Golden State Warriors', imgSrc: 'img/goldenstatewarriors/andrewwiggins.png' },
    { name: 'Draymond Green', team: 'Golden State Warriors', imgSrc: 'img/goldenstatewarriors/draymondgreen.png' },
    { name: 'Klay Thompson', team: 'Golden State Warriors', imgSrc: 'img/goldenstatewarriors/klaythompson.png' },
    { name: 'Steph Curry', team: 'Golden State Warriors', imgSrc: 'img/goldenstatewarriors/stephcurry.png' },
    { name: 'Trayce Jackson Davis', team: 'Golden State Warriors', imgSrc: 'img/goldenstatewarriors/traycejacksondavis.png' },
  
    // Houston Rockets
    { name: 'Alperen Sengun', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/alperensengun.png' },
    { name: 'Dillon Brooks', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/dillonbrooks.png' },
    { name: 'Fred VanVleet', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/fredvanvleet.png' },
    { name: 'Jabari Smith Jr.', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/jabarismithjr.png' },
    { name: 'Jalen Green', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/jalengreen.png' },
  
    // Indiana Pacers
    { name: 'Aaron Nesmith', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/aaronnesmith.png' },
    { name: 'Andrew Nembhard', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/andrewnembhard.png' },
    { name: 'Myles Turner', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/mylesturner.png' },
    { name: 'Pascal Siakam', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/pascalsiakam.png' },
    { name: 'Tyrese Haliburton', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/tyresehaliburton.png' },
  
    // LA Clippers
    { name: 'Ivica Zubac', team: 'LA Clippers', imgSrc: 'img/laclippers/ivicazubac.png' },
    { name: 'James Harden', team: 'LA Clippers', imgSrc: 'img/laclippers/jamesharden.png' },
    { name: 'Kawhi Leonard', team: 'LA Clippers', imgSrc: 'img/laclippers/kawhileonard.png' },
    { name: 'Paul George', team: 'LA Clippers', imgSrc: 'img/laclippers/paulgeorge.png' },
    { name: 'Terrance Mann', team: 'LA Clippers', imgSrc: 'img/laclippers/terancemann.png' },
  
    // Los Angeles Lakers
    { name: 'Anthony Davis', team: 'LA Lakers', imgSrc: 'img/losangeleslakers/anthonydavis.png' },
    { name: 'Austin Reaves', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/austinreaves.png' },
    { name: 'D\'Angelo Russell', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/dlorussel.png' },
    { name: 'LeBron James', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/lebronjames.png' },
    { name: 'Rui Hachimura', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/ruihachimura.png' },
  
    // Memphis Grizzlies
    { name: 'Desmond Bane', team: 'Memphis Grizzlies', imgSrcimgSrc: 'img/memphisgrizzlies/desmondbane.png' },
    { name: 'Ja Morant', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/jamorant.png' },
    { name: 'Jaren Jackson Jr.', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/jarenjacksonjr.png' },
    { name: 'Marcus Smart', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/marcussmart.png' },
    { name: 'Vince Williams Jr.', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/vincewilliamsjr.png' },
  
    // Miami Heat
    { name: 'Bam Adebayo', team: 'Miami Heat', imgSrc: 'img/miamiheat/bamadebayo.png' },
    { name: 'Jimmy Butler', team: 'Miami Heat', imgSrc: 'img/miamiheat/jimmybutler.png' },
    { name: 'Kyle Lowry', team: 'Miami Heat', imgSrc: 'img/miamiheat/kylelowry.png' },
    { name: 'Kevin Love', team: 'Miami Heat', imgSrc: 'img/miamiheat/love.png' },
    { name: 'Tyler Herro', team: 'Miami Heat', imgSrc: 'img/miamiheat/tylerherro.png' },
  
    // Milwaukee Bucks
    { name: 'Bobby Portis', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/bobbyportis.png' },
    { name: 'Brook Lopez', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/brooklopez.png' },
    { name: 'Damian Lillard', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/damianlillard.png' },
    { name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/giannisantetokounmpo.png' },
    { name: 'Khris Middleton', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/khrismiddleton.png' },
  
    // Minnesota Timberwolves
    { name: 'Anthony Edwards', team: 'Minnesota Timberwolves', imgSrc: 'img/minnesotatimberwolves/anthonyedwards.png' },
    { name: 'Karl-Anthony Towns', team: 'Minnesota Timberwolves', imgSrc: 'img/minnesotatimberwolves/karl-anthonytowns.png' },
    { name: 'Kyle Anderson', team: 'Minnesota Timberwolves', imgSrc: 'img/minnesotatimberwolves/kyleanderson.png' },
    { name: 'Mike Conley', team: 'Minnesota Timberwolves', imgSrc: 'img/minnesotatimberwolves/mikeconley.png' },
    { name: 'Rudy Gobert', team: 'Minnesota Timberwolves', imgSrc: 'img/minnesotatimberwolves/rudygobert.png' },
  
    // New Orleans Pelicans
    { name: 'Brandon Ingram', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/brandoningram.png' },
    { name: 'CJ McCollum', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/cjmccollum.png' },
    { name: 'Herbert Jones', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/herbertjones.png' },
    { name: 'Jonas Valanciunas', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/jonasvalanciunas.png' },
    { name: 'Zion Williamson', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/zionwilliamson.png' },
  
    // New York Knicks
    { name: 'Immanuel Quickley', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/immanuelquickley.png' },
    { name: 'Jalen Brunson', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/jalenbrunson.png' },
    { name: 'Julius Randle', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/juliusrandle.png' },
    { name: 'Mitchell Robinson', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/mitchellrobinson.png' },
    { name: 'RJ Barrett', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/rjbarrett.png' },
  
    // Oklahoma City Thunder
    { name: 'Chet Holmgren', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/chetholmgren.png' },
    { name: 'Jalen Williams', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/jalenwilliams.png' },
    { name: 'Josh Giddey', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/joshgiddey.png' },
    { name: 'Luguentz Dort', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/luguentzdort.png' },
    { name: 'Shai Gilgeous-Alexander', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/shaigilgeous-alexander.png' },
  
    // Orlando Magic
    { name: 'Cole Anthony', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/coleanthony.png' },
    { name: 'Franz Wagner', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/franzwagner.png' },
    { name: 'Markelle Fultz', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/markellefultz.png' },
    { name: 'Paolo Banchero', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/paolobanchero.png' },
    { name: 'Wendell Carter Jr.', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/wendellcarterjr.png' },
  
    // Philadelphia 76ers
    { name: 'D\'Anthony Melton', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/d\'anthonymelton.png' },
    { name: 'Joel Embiid', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/joelembiid.png' },
    { name: 'Kelly Oubre Jr.', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/kellyoubrejr.png' },
    { name: 'Tyrese Maxey', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/tyresemaxey.png' },
    { name: 'Tobias Harris', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/tobiasharris.png' },
  
    // Phoenix Suns
    { name: 'Bradley Beal', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/bradleybeal.png' },
    { name: 'Devin Booker', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/devinbooker.png' },
    { name: 'Kevin Durant', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/kevindurant.png' },
    { name: 'Yuta Watanabe', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/yutawatanabe.png' },
    { name: 'Deandre Ayton', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/deandreayton.png' },
  
    // Portland Trail Blazers
    { name: 'Anfernee Simons', team: 'Portland Trailblazers', imgSrc: 'img/portlandtrailblazers/anferneesimons.png' },
    { name: 'Jerami Grant', team: 'Portland Trailblazers', imgSrc: 'img/portlandtrailblazers/jeramigrant.png' },
    { name: 'Scoot Henderson', team: 'Portland Trailblazers', imgSrc: 'img/portlandtrailblazers/loothenderson.png' },
    { name: 'Matisse Thybulle', team: 'Portland Trailblazers', imgSrc: 'img/portlandtrailblazers/matissethybulle.png' },
    { name: 'Shaedon Sharpe', team: 'Portland Trailblazers', imgSrc: 'img/portlandtrailblazers/shaedonsharpe.png' },
  
    // Sacramento Kings
    { name: 'DeAaron Fox', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/de\'aaronfox.png' },
    { name: 'Domantas Sabonis', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/domantassabonis.png' },
    { name: 'Harrison Barnes', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/harrisonbarnes.png' },
    { name: 'Keegan Murray', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/keeganmurray.png' },
    { name: 'Malik Monk', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/malikmonk.png' },
  
    // San Antonio Spurs
    { name: 'Jeremy Sochan', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/jeremysochan.png' },
    { name: 'Keldon Johnson', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/keldonjohnson.png' },
    { name: 'Malaki Branham', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/malakibranham.png' },
    { name: 'Tre Jones', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/trejones.png' },
    { name: 'Victor Wembanyama', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/victorwembanyama.png' },
  
    // Toronto Raptors
    { name: 'Gary Trent Jr.', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/garytrentjr.png' },
    { name: 'Jakob Poeltl', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/jakobpoeltl.png' },
    { name: 'OG Anunoby', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/oganunoby.png' },
    { name: 'Pascal Siakam', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/pascalsiakam.png' },
    { name: 'Scottie Barnes', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/scottiebarnes.png' },
  
    // Utah Jazz
    { name: 'Jordan Clarkson', team: 'Utah Jazz', imgSrc: 'img/utahjazz/jordanclarkson.png' },
    { name: 'Lauri Markkanen', team: 'Utah Jazz', imgSrc: 'img/utahjazz/laurimarkkanen.png' },
    { name: 'Kelly Olynyk', team: 'Utah Jazz', imgSrc: 'img/utahjazz/kellyolynyk.png' },
    { name: 'Talen Horton-Tucker', team: 'Utah Jazz', imgSrc: 'img/utahjazz/talenhorton-tucker.png' },
    { name: 'Walker Kessler', team: 'Utah Jazz', imgSrc: 'img/utahjazz/walkerkessler.png' },
  
    // Washington Wizards
    { name: 'Corey Kispert', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/coreykispert.png' },
    { name: 'Deni Avdija', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/deniavdija.png' },
    { name: 'Daniel Gafford', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/danielgafford.png' },
    { name: 'Jordan Poole', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/jordanpoole.png' },
    { name: 'Kyle Kuzma', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/kylekuzma.png' }
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