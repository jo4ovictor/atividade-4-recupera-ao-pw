import Card from "./Card";
import "./App.css"
function App(){
	const sites = [
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
		{	
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
		{
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			nome: "Grama",
		},
	];

	return(
		<div className="conteiner">
			{
				sites.map((site) => {
					return <Card 
							foto={site.foto}
							nome={site.nome}
						/>;
				})
			}
		</div>
	);
}

export default App;