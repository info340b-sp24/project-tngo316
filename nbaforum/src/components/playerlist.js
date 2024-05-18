import React from 'react';
import PlayerCard from './PlayerCard';

export const players = [
    // Atlanta Hawks
    {id: 1, name: 'Bogdan Bogdanovic', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/bogdanbogdanovic.png'},
    {id: 2, name: 'Clint Capela', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/clintcapela.png'},
    {id: 3, name: 'Deandre Hunter', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/deandrehunter.png'},
    {id: 4, name: 'Dejounte Murray', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/dejountemurray.png'},
    {id: 5, name: 'Trae Young', team: 'Atlanta Hawks', imgSrc: 'img/atlantahawks/traeyoung.png'},

    // Boston Celtics
    {id: 6, name: 'Derrick White', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/derrickwhite.png'},
    {id: 7, name: 'Jaylen Brown', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/jaylenbrown.png'},
    {id: 8, name: 'Jayson Tatum', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/jaysontatum.png'},
    {id: 9, name: 'Jrue Holiday', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/jrueholiday.png'},
    {id: 10, name: 'Kristaps Porzingis', team: 'Boston Celtics', imgSrc: 'img/bostonceltics/kristapsporzingis.png'},

    // Brooklyn Nets
    {id: 11, name: 'Cam Thomas', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/camthomas.png'},
    {id: 12, name: 'Dennis Schroder', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/dennisschroder.png'},
    {id: 13, name: 'Dorian Finney-Smith', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/dorianfinney-smith.png'},
    {id: 14, name: 'Mikal Bridges', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/mikalbridges.png'},
    {id: 15, name: 'Nic Claxton', team: 'Brooklyn Nets', imgSrc: 'img/brooklynnets/nicclaxton.png'},

    // Charlotte Hornets
    {id: 16, name: 'Brandon Miller', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/brandonmiller.png'},
    {id: 17, name: 'Cody Martin', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/codymartin.png'},
    {id: 18, name: 'LaMelo Ball', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/lameloball.png'},
    {id: 19, name: 'Mark Williams', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/markwilliams.png'},
    {id: 20, name: 'Miles Bridges', team: 'Charlotte Hornets', imgSrc: 'img/charlottehornets/milesbridges.png'},

    // Chicago Bulls
    {id: 21, name: 'Alex Caruso', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/alexcaruso.png'},
    {id: 22, name: 'Ayo Dosunmu', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/ayodosunmu.png'},
    {id: 23, name: 'Coby White', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/cobywhite.png'},
    {id: 24, name: 'DeMar DeRozan', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/demarderozan.png'},
    {id: 25, name: 'Nikola Vucevic', team: 'Chicago Bulls', imgSrc: 'img/chicagobulls/nikolavucevic.png'},

    // Dallas Mavericks
    {id: 26, name: 'Daniel Gafford', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/danielgafford.png'},
    {id: 27, name: 'Derrick Jones Jr.', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/derrickjonesjr.png'},
    {id: 28, name: 'Kyrie Irving', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/kyrieirving.png'},
    {id: 29, name: 'Luka Doncic', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/lukadoncic.png'},
    {id: 30, name: 'P.J. Washington', team: 'Dallas Mavericks', imgSrc: 'img/dallasmavericks/pjwashington.png'},

    // Denver Nuggets
    {id: 31, name: 'Aaron Gordon', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/aarongordon.png'},
    {id: 32, name: 'Jamal Murray', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/jamalmurray.png'},
    {
        id: 33,
        name: 'Kentavious Caldwell-Pope',
        team: 'Denver Nuggets',
        imgSrc: 'img/denvernuggets/kentaviouscaldwell-pope.png'
    },
    {id: 34, name: 'Michael Porter Jr.', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/michaelporterjr.png'},
    {id: 35, name: 'Nikola Jokic', team: 'Denver Nuggets', imgSrc: 'img/denvernuggets/nikolajokic.png'},

    // Detroit Pistons
    {id: 36, name: 'Ausar Thompson', imgSrc: 'img/detroitpistons/ausarthompson.png'},
    {id: 37, name: 'Cade Cunningham', imgSrc: 'img/detroitpistons/cadecunningham.png'},
    {id: 38, name: 'Jaden Ivey', imgSrc: 'img/detroitpistons/jadenivey.png'},
    {id: 39, name: 'Jalen Duren', imgSrc: 'img/detroitpistons/jalenduren.png'},
    {id: 40, name: 'Simone Fontecchio', imgSrc: 'img/detroitpistons/simonefontecchio.png'},

    // Golden State Warriors
    {
        id: 41,
        name: 'Andrew Wiggins',
        team: 'Golden State Warriors',
        imgSrc: 'img/goldenstatewarriors/andrewwiggins.png'
    },
    {
        id: 42,
        name: 'Draymond Green',
        team: 'Golden State Warriors',
        imgSrc: 'img/goldenstatewarriors/draymondgreen.png'
    },
    {id: 43, name: 'Klay Thompson', team: 'Golden State Warriors', imgSrc: 'img/goldenstatewarriors/klaythompson.png'},
    {id: 44, name: 'Steph Curry', team: 'Golden State Warriors', imgSrc: 'img/goldenstatewarriors/stephcurry.png'},
    {
        id: 45,
        name: 'Trayce Jackson Davis',
        team: 'Golden State Warriors',
        imgSrc: 'img/goldenstatewarriors/traycejacksondavis.png'
    },

    // Houston Rockets
    {id: 46, name: 'Alperen Sengun', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/alperensengun.png'},
    {id: 47, name: 'Dillon Brooks', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/dillonbrooks.png'},
    {id: 48, name: 'Fred VanVleet', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/fredvanvleet.png'},
    {id: 49, name: 'Jabari Smith Jr.', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/jabarismithjr.png'},
    {id: 50, name: 'Jalen Green', team: 'Houston Rockets', imgSrc: 'img/houstonrockets/jalengreen.png'},

    // Indiana Pacers
    {id: 51, name: 'Aaron Nesmith', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/aaronnesmith.png'},
    {id: 52, name: 'Andrew Nembhard', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/andrewnembhard.png'},
    {id: 53, name: 'Myles Turner', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/mylesturner.png'},
    {id: 54, name: 'Pascal Siakam', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/pascalsiakam.png'},
    {id: 55, name: 'Tyrese Haliburton', team: 'Indiana Pacers', imgSrc: 'img/indianapacers/tyresehaliburton.png'},

    // LA Clippers
    {id: 56, name: 'Ivica Zubac', team: 'LA Clippers', imgSrc: 'img/laclippers/ivicazubac.png'},
    {id: 57, name: 'James Harden', team: 'LA Clippers', imgSrc: 'img/laclippers/jamesharden.png'},
    {id: 58, name: 'Kawhi Leonard', team: 'LA Clippers', imgSrc: 'img/laclippers/kawhileonard.png'},
    {id: 59, name: 'Paul George', team: 'LA Clippers', imgSrc: 'img/laclippers/paulgeorge.png'},
    {id: 60, name: 'Terrance Mann', team: 'LA Clippers', imgSrc: 'img/laclippers/terancemann.png'},

    // Los Angeles Lakers
    {id: 61, name: 'Anthony Davis', team: 'LA Lakers', imgSrc: 'img/losangeleslakers/anthonydavis.png'},
    {id: 62, name: 'Austin Reaves', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/austinreaves.png'},
    {id: 1062, name: 'D\'Angelo Russell', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/dlorussel.png'},
    {id: 64, name: 'LeBron James', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/lebronjames.png'},
    {id: 65, name: 'Rui Hachimura', team: 'LA Lakers', imgSrcimgSrc: 'img/losangeleslakers/ruihachimura.png'},

    // Memphis Grizzlies
    {id: 66, name: 'Desmond Bane', team: 'Memphis Grizzlies', imgSrcimgSrc: 'img/memphisgrizzlies/desmondbane.png'},
    {id: 67, name: 'Ja Morant', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/jamorant.png'},
    {id: 68, name: 'Jaren Jackson Jr.', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/jarenjacksonjr.png'},
    {id: 69, name: 'Marcus Smart', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/marcussmart.png'},
    {id: 70, name: 'Vince Williams Jr.', team: 'Memphis Grizzlies', imgSrc: 'img/memphisgrizzlies/vincewilliamsjr.png'},

    // Miami Heat
    {id: 71, name: 'Bam Adebayo', team: 'Miami Heat', imgSrc: 'img/miamiheat/bamadebayo.png'},
    {id: 72, name: 'Jimmy Butler', team: 'Miami Heat', imgSrc: 'img/miamiheat/jimmybutler.png'},
    {id: 73, name: 'Kyle Lowry', team: 'Miami Heat', imgSrc: 'img/miamiheat/kylelowry.png'},
    {id: 74, name: 'Kevin Love', team: 'Miami Heat', imgSrc: 'img/miamiheat/love.png'},
    {id: 75, name: 'Tyler Herro', team: 'Miami Heat', imgSrc: 'img/miamiheat/tylerherro.png'},

    // Milwaukee Bucks
    {id: 76, name: 'Bobby Portis', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/bobbyportis.png'},
    {id: 77, name: 'Brook Lopez', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/brooklopez.png'},
    {id: 78, name: 'Damian Lillard', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/damianlillard.png'},
    {
        id: 79,
        name: 'Giannis Antetokounmpo',
        team: 'Milwaukee Bucks',
        imgSrc: 'img/milwaukeebucks/giannisantetokounmpo.png'
    },
    {id: 80, name: 'Khris Middleton', team: 'Milwaukee Bucks', imgSrc: 'img/milwaukeebucks/khrismiddleton.png'},

    // Minnesota Timberwolves
    {
        id: 81,
        name: 'Anthony Edwards',
        team: 'Minnesota Timberwolves',
        imgSrc: 'img/minnesotatimberwolves/anthonyedwards.png'
    },
    {
        id: 82,
        name: 'Karl-Anthony Towns',
        team: 'Minnesota Timberwolves',
        imgSrc: 'img/minnesotatimberwolves/karl-anthonytowns.png'
    },
    {
        id: 83,
        name: 'Kyle Anderson',
        team: 'Minnesota Timberwolves',
        imgSrc: 'img/minnesotatimberwolves/kyleanderson.png'
    },
    {id: 84, name: 'Mike Conley', team: 'Minnesota Timberwolves', imgSrc: 'img/minnesotatimberwolves/mikeconley.png'},
    {id: 85, name: 'Rudy Gobert', team: 'Minnesota Timberwolves', imgSrc: 'img/minnesotatimberwolves/rudygobert.png'},

    // New Orleans Pelicans
    {id: 86, name: 'Brandon Ingram', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/brandoningram.png'},
    {id: 87, name: 'CJ McCollum', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/cjmccollum.png'},
    {id: 88, name: 'Herbert Jones', team: 'New Orleans Pelicans', imgSrc: 'img/neworleanspelicans/herbertjones.png'},
    {
        id: 89,
        name: 'Jonas Valanciunas',
        team: 'New Orleans Pelicans',
        imgSrc: 'img/neworleanspelicans/jonasvalanciunas.png'
    },
    {
        id: 90,
        name: 'Zion Williamson',
        team: 'New Orleans Pelicans',
        imgSrc: 'img/neworleanspelicans/zionwilliamson.png'
    },

    // New York Knicks
    {id: 91, name: 'Immanuel Quickley', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/immanuelquickley.png'},
    {id: 92, name: 'Jalen Brunson', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/jalenbrunson.png'},
    {id: 93, name: 'Julius Randle', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/juliusrandle.png'},
    {id: 94, name: 'Mitchell Robinson', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/mitchellrobinson.png'},
    {id: 96, name: 'RJ Barrett', team: 'New York Knicks', imgSrc: 'img/newyorkknicks/rjbarrett.png'},

    // Oklahoma City Thunder
    {id: 196, name: 'Chet Holmgren', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/chetholmgren.png'},
    {
        id: 97,
        name: 'Jalen Williams',
        team: 'Oklahoma City Thunder',
        imgSrc: 'img/oklahomacitythunder/jalenwilliams.png'
    },
    {id: 98, name: 'Josh Giddey', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/joshgiddey.png'},
    {id: 99, name: 'Luguentz Dort', team: 'Oklahoma City Thunder', imgSrc: 'img/oklahomacitythunder/luguentzdort.png'},
    {
        id: 100,
        name: 'Shai Gilgeous-Alexander',
        team: 'Oklahoma City Thunder',
        imgSrc: 'img/oklahomacitythunder/shaigilgeous-alexander.png'
    },

    // Orlando Magic
    {id: 101, name: 'Cole Anthony', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/coleanthony.png'},
    {id: 102, name: 'Franz Wagner', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/franzwagner.png'},
    {id: 103, name: 'Markelle Fultz', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/markellefultz.png'},
    {id: 104, name: 'Paolo Banchero', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/paolobanchero.png'},
    {id: 105, name: 'Wendell Carter Jr.', team: 'Orlando Magic', imgSrc: 'img/orlandomagic/wendellcarterjr.png'},

    // Philadelphia 76ers
    {
        id: 106,
        name: 'D\'Anthony Melton',
        team: 'Philadelphia 76ers',
        imgSrc: 'img/philadelphia76ers/d\'anthonymelton.png'
    },
    {id: 107, name: 'Joel Embiid', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/joelembiid.png'},
    {id: 108, name: 'Kelly Oubre Jr.', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/kellyoubrejr.png'},
    {id: 109, name: 'Tyrese Maxey', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/tyresemaxey.png'},
    {id: 110, name: 'Tobias Harris', team: 'Philadelphia 76ers', imgSrc: 'img/philadelphia76ers/tobiasharris.png'},

    // Phoenix Suns
    {id: 111, name: 'Bradley Beal', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/bradleybeal.png'},
    {id: 112, name: 'Devin Booker', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/devinbooker.png'},
    {id: 113, name: 'Kevin Durant', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/kevindurant.png'},
    {id: 114, name: 'Yuta Watanabe', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/yutawatanabe.png'},
    {id: 115, name: 'Deandre Ayton', team: 'Phoenix Suns', imgSrc: 'img/phoenixsuns/deandreayton.png'},

    // Portland Trail Blazers
    {
        id: 116,
        name: 'Anfernee Simons',
        team: 'Portland Trailblazers',
        imgSrc: 'img/portlandtrailblazers/anferneesimons.png'
    },
    {id: 117, name: 'Jerami Grant', team: 'Portland Trailblazers', imgSrc: 'img/portlandtrailblazers/jeramigrant.png'},
    {
        id: 118,
        name: 'Scoot Henderson',
        team: 'Portland Trailblazers',
        imgSrc: 'img/portlandtrailblazers/loothenderson.png'
    },
    {
        id: 119,
        name: 'Matisse Thybulle',
        team: 'Portland Trailblazers',
        imgSrc: 'img/portlandtrailblazers/matissethybulle.png'
    },
    {
        id: 120,
        name: 'Shaedon Sharpe',
        team: 'Portland Trailblazers',
        imgSrc: 'img/portlandtrailblazers/shaedonsharpe.png'
    },

    // Sacramento Kings
    {id: 121, name: 'DeAaron Fox', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/de\'aaronfox.png'},
    {id: 122, name: 'Domantas Sabonis', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/domantassabonis.png'},
    {id: 123, name: 'Harrison Barnes', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/harrisonbarnes.png'},
    {id: 124, name: 'Keegan Murray', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/keeganmurray.png'},
    {id: 125, name: 'Malik Monk', team: 'Sacramento Kings', imgSrc: 'img/sacramentokings/malikmonk.png'},

    // San Antonio Spurs
    {id: 126, name: 'Jeremy Sochan', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/jeremysochan.png'},
    {id: 127, name: 'Keldon Johnson', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/keldonjohnson.png'},
    {id: 128, name: 'Malaki Branham', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/malakibranham.png'},
    {id: 129, name: 'Tre Jones', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/trejones.png'},
    {id: 130, name: 'Victor Wembanyama', team: 'San Antonio Spurs', imgSrc: 'img/sanantoniospurs/victorwembanyama.png'},

    // Toronto Raptors
    {id: 131, name: 'Gary Trent Jr.', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/garytrentjr.png'},
    {id: 132, name: 'Jakob Poeltl', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/jakobpoeltl.png'},
    {id: 133, name: 'OG Anunoby', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/oganunoby.png'},
    {id: 134, name: 'Pascal Siakam', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/pascalsiakam.png'},
    {id: 135, name: 'Scottie Barnes', team: 'Toronto Raptors', imgSrc: 'img/torontoraptors/scottiebarnes.png'},

    // Utah Jazz
    {id: 136, name: 'Jordan Clarkson', team: 'Utah Jazz', imgSrc: 'img/utahjazz/jordanclarkson.png'},
    {id: 137, name: 'Lauri Markkanen', team: 'Utah Jazz', imgSrc: 'img/utahjazz/laurimarkkanen.png'},
    {id: 138, name: 'Kelly Olynyk', team: 'Utah Jazz', imgSrc: 'img/utahjazz/kellyolynyk.png'},
    {id: 139, name: 'Talen Horton-Tucker', team: 'Utah Jazz', imgSrc: 'img/utahjazz/talenhorton-tucker.png'},
    {id: 140, name: 'Walker Kessler', team: 'Utah Jazz', imgSrc: 'img/utahjazz/walkerkessler.png'},

    // Washington Wizards
    {id: 141, name: 'Corey Kispert', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/coreykispert.png'},
    {id: 142, name: 'Deni Avdija', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/deniavdija.png'},
    {id: 143, name: 'Daniel Gafford', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/danielgafford.png'},
    {id: 144, name: 'Jordan Poole', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/jordanpoole.png'},
    {id: 145, name: 'Kyle Kuzma', team: 'Washington Wizards', imgSrc: 'img/washingtonwizards/kylekuzma.png'}
];

const PlayerList = () => {
    return (
        <section className="players">
            <h2>NBA Players</h2>
            <div className="card-container">
                {players.map(player => (
                    <PlayerCard key={player.id} imgSrc={player.imgSrc} name={player.name}/>
                ))}
            </div>
        </section>
    );
};

export default PlayerList;