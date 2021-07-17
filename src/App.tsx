import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
	
	const [nomeCadeira, setNomeCadeira] = useState('')
	const [backColor, setBackColor] = useState('0');
	const [coachColor, setCoachColor] = useState('0');
	const [frontColor, setFrontColor] = useState('0');
	const [neonColor, setNeonColor] = useState('0');
	const [backValue, setBackValue] = useState(0);
	const [coachValue, setCoachValue] = useState(0);
	const [neonValue, setNeonValue] = useState(0);
	const [registered, setRegistered] = useState(false);
	const nome = useRef(null);
	const email = useRef(null);
	
	const newsletterCadastro = window.localStorage.getItem("newsletterEmail")
	
	function changeThemes(back: any, coach: any, front: any, neon: any) {
		
		if(back) {
			setBackValue(back);
			setBackColor('hue-rotate('+back+'deg)')
		}
		
		if(coach) {
			setCoachValue(coach);
			setCoachColor('hue-rotate('+coach+'deg)')
		}
		
		if(front) {
			setFrontColor('hue-rotate('+front+'deg)')
		}
		
		if(neon) {
			setNeonValue(neon);
			setNeonColor('hue-rotate('+neon+'deg)')
		}
	}
	
	useEffect(() => {
		setNomeCadeira("Tech Chair 5000")
		changeThemes('0', '0', '0', '0');
		if(newsletterCadastro) {
			setRegistered(true)
		} else {
			setRegistered(false)
		}
	}, [])
	
	const Registrado = () => {
		return (
			<>
				<h1>Seu email foi cadastrado!</h1>
				<h2>Em breve você receberá novidades sobre a <b>{nomeCadeira}</b> e nossos outros produtos!</h2>
			</>
		)
	}
	
	const NaoRegistrado = () => {
		return (
			<>
				<h1>Vai ficar de fora dessa?</h1>
				<h2>Cadastre o seu email abaixo para ficar sabendo quando a <b>{nomeCadeira}</b> estará disponível!</h2>
				
				<div className="newsLetter">
					
					<input ref={nome} id="nome" type="text" placeholder="Nome" ></input>
					<input ref={email} id="email" type="text" placeholder="Email"></input>
					<div className="button" onClick={() => { cadastrar() }}>CADASTRAR</div>
					
				</div>
			</>
		)
	}
	
	function cadastrar() {
		// Fingimos que foi verificado o email e nome...
		// @ts-ignore: Object is possibly 'null'.
		const n = nome.current.value
		// @ts-ignore: Object is possibly 'null'.
		const e = email.current.value
		if(n && e) {
			setRegistered(true);
			window.localStorage.setItem("newsletterEmail", e)
		}
	}
	
	return (
		<div className="App">
			
			<div className="top" style={{ height: window.innerHeight }}>
				
				<div className="topLeft">
					<h1><span>Dormir</span> nunca foi tão produtivo!</h1>
					<h2>Conheça a <b>{nomeCadeira}</b>, sua oportunidade de fazer todas as tarefas do dia. DORMINDO!</h2>
				</div>
				
				<div className="topRight">
					
					<div className="product topProduct">
						
						<div className="border"></div>
						<div className="back" id="back"></div>
						<div className="coach"></div>
						<div className="mid"></div>
						<div className="front"></div>
						<div className="legs"></div>
						<div className="neon"></div>
						
					</div>
					
				</div>
				
			</div>
			
			<div className="content" style={{ height: window.innerHeight }}>
				
				<div className="contentRow pessoal">
					
					<div className="contentLeft">
						<div className="varrendo"></div>
					</div>
					<div className="contentRight">
						<h1>Tarefas pessoais</h1>
						<p>A <b>{nomeCadeira}</b> é capaz de realizar todas as tarefas pessoais imagináveis. Seu núcleo está repleto de funções e mais de 8.459 tarefas gravadas que irão suprir suas necessidades.</p>
					</div>
					
				</div>
				
				<div className="contentRow profissional">
					
					<div className="contentRight">
						<h1>Tarefas profissionais</h1>
						<p>Com a <b>{nomeCadeira}</b> você nunca mais irá precisar se preparar profundamente para aquela palestra importantíssima na sua empresa. Do Jr até o CEO, 2678 cargos conhecidos e utilizados em todo o mundo.</p>
					</div>
					<div className="contentLeft">
						<div className="apresentando"></div>
					</div>
					
				</div>
				
			</div>
			
			<div className="bottom" style={{ height: window.innerHeight }}>
				
				<h1>Totalmente customizável</h1>
				
				<div className="customize">
					
					<div className="product">
						
						<div className="backCircle"></div>
							
						<div className="border"></div>
						<div className="back" style={{ filter: backColor }}></div>
						<div className="coach" style={{ filter: coachColor }}></div>
						<div className="mid"></div>
						<div className="front" style={{ filter: frontColor }}></div>
						<div className="legs"></div>
						<div className="neon" style={{ filter: neonColor }}></div>
						
					</div>
					
					<div className="customization">
						
						<p>A <b>{nomeCadeira}</b> tem 3 padrões de cores iniciais:</p>
						
						<div className="custom" onClick={() => { changeThemes('0', '0', '0', '0') }}>
							<span>Sono Profundo</span>
							<div className="colors">
								<div style={{ backgroundColor: '#036AE7' }} className="primaryColor"></div>
								<div style={{ backgroundColor: '#7F7DF8' }} className="secondaryColor"></div>
							</div>
						</div>
						
						<div className="custom" onClick={() => {changeThemes('240', '250', '240', '250')}}>
							<span>Só mais 5 minutinhos...</span>
							<div className="colors">
								<div style={{ backgroundColor: '#F0BB23' }} className="primaryColor"></div>
								<div style={{ backgroundColor: '#0DA84B' }} className="secondaryColor"></div>
							</div>
						</div>
						
						<div className="custom" onClick={() => {changeThemes('150', '340', '150', '340')}}>
							<span>Hoje é Sábado!</span>
							<div className="colors">
								<div style={{ backgroundColor: '#ff5972' }} className="primaryColor"></div>
								<div style={{ backgroundColor: '#4B84F4' }} className="secondaryColor"></div>
							</div>
						</div>
						
						<p>Você pode criar sua própria combinação!</p>
						
						<div className="custom range">
							
							<input type="range" min={0} max={360} value={backValue} onChange={(e) => { changeThemes(e.target.value, '', e.target.value, '') }}></input>
							
							<div className="colors">
								<div style={{ backgroundColor: '#036AE7', filter: backColor }} className="secondaryColor"></div>
							</div>
						</div>
						
						<div className="custom range">
							
							<input type="range" min={0} max={360} value={coachValue} onChange={(e) => { changeThemes('', e.target.value, '', '') }}></input>
							
							<div className="colors">
								<div style={{ backgroundColor: '#7F7DF8', filter: coachColor }} className="secondaryColor"></div>
							</div>
						</div>
						
						<div className="custom range">
							
							<input type="range" min={0} max={360} value={neonValue} onChange={(e) => { changeThemes('', '', '', e.target.value) }}></input>
							
							<div className="colors">
								<div style={{ backgroundColor: '#036AE7', filter: neonColor }} className="secondaryColor"></div>
							</div>
						</div>
						
					</div>
				
				</div>
				
			</div>
			
			<div className="footer">
				
				{ registered ? <Registrado/> : <NaoRegistrado/> }
				
			</div>
			
		</div>
	);
}

export default App;
