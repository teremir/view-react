
import image_logotipo_brand from "../../assets/images/iwana-cash/logotipo-brand.png"
 
import phone from "../../assets/images/iwana-cash/iPhone.png" 

import group_extension from "../../assets/images/iwana-cash/group_extension.png" 
import icon_google from "../../assets/images/iwana-cash/icon-google.png" 

import Header from "../../components/iwana-cash/Layout/Header"
import Footer from "../../components/iwana-cash/Layout/Footer"
import PanelMainDsk from "../../components/iwana-cash/Home/PanelMainDsk"
import PanelMainMobile from "../../components/iwana-cash/Home/PanelMainMobile"
import ProductSlider from "../../components/iwana-cash/Home/ProductSlider"
import OfferSlider from "../../components/iwana-cash/Home/OfferSlider"
import ItemFans from "../../components/iwana-cash/Home/Fans/ItemFans"
import MediaQuery from 'react-responsive'

import search_home_mobile from "../../assets/images/iwana-cash/search-home-mobile.png"
import search_home_dsk from "../../assets/images/iwana-cash/search-home-dsk.png"



const Home = () => {

	return (
		<div className="container-fluid">
			<Header />
			<div className="row">
				<div className="col-12 col-main">
					<p className="title-h1">¿Dónde comprarás hoy?</p>
					<div className="group-form">
						<input 
							type="text" 
							className="form-control form-input" 
							name="search" 
							id="search" 
							placeholder="Encuentra aquí tu tienda"
						/>
						<span></span>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<MediaQuery minWidth={768}>
						<PanelMainDsk item={[1,2,3,4]} />
					</MediaQuery>
					<MediaQuery maxWidth={767}>
						<PanelMainMobile item={[1,2,3,4]} />
					</MediaQuery>
				</div>
			</div>
			<div className="row mb-5 mb-md-0">
				<div className="col-12 mb-5">
					<p className="offers-h3 text-center mb-4"><span>También puedes buscar por</span> <span className="pl-md-4">nuestras categorías</span></p>
					<section className="search-home__container">
						<div className="search-home__item">
							<p>Grandes Tiendas</p>
						</div>
						<div className="search-home__item">
							<p>Infantil</p>
						</div>
						<div className="search-home__item">
							<p>Viajes</p>
						</div>
						<div className="search-home__item">
							<p>Moda y Accesorios</p>
						</div>
						<div className="search-home__item">
							<p>Licores</p>
						</div>
						<div className="search-home__item">
							<p>Mascotas</p>
						</div>
					</section>
					<section className="search-home__body">
						<div className="search-home__image">
							<MediaQuery maxWidth={767}>
								<img src={search_home_mobile} alt="Marcas asociadas" />
							</MediaQuery>
							<MediaQuery minWidth={768}>
								<img src={search_home_dsk} alt="Marcas asociadas" />
							</MediaQuery>
						</div>
						<section className="search-home__footer">
							<p className="search-home__number">180+</p>
							<p className="offers-h3 mb-3">marcas asociadas</p>
							<button type="button" className="btn btn-blue btn-search-home">Ver todas</button>
							<p className="search-home__small">Revisa nuestras marcas y sus % de cashback</p>
						</section>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12 text-center">
					<div className="container">
						<div className="clic-title">
							<p>ofertas de cashback</p>
						</div>
						<section className="offers">
							<p className="offers-h3"><span>¡Ofertas imperdibles!</span> <span className="pl-md-4">¡Vuelve con todo a clases!</span></p>
							<section className="offers-container">
								<ProductSlider item={[1,2,3,4]} />
							</section>
						</section>

						<section className="offers mt-5">
							<p className="offers-h3 mt-7"><span>¡Disfruta el verano!</span> <span className="pl-md-4">Aprovecha estas oportunidades </span><span>y otras novedades!</span></p>
							<section className="offers-container">
								<ProductSlider item={[1,2,3,4]} />
							</section>
						</section>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-clic">
					<div className="container d-md-flex">
						<div>
							<div className="clic-title">
								<p className="mb-0">Gana Dinero</p>
								<p className="mb-0 pl-md-5 pl-0">en sólo 1 click</p>
							</div>
							<p className="clic-subtitle">Instala nuestra extensión para GOOGLE CHROME</p>
							<div className="clic-button">
								<img src={icon_google} alt="Icono Google Chrome" />
								<button type="button" className="btn btn-blue btn-extension">instalar extensión</button>
							</div>
						</div>
						<div className="clic-background">
							<img src={group_extension} alt="Instalar extensión Google" className="clic-background__image" />
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 mb-5">
					<div className="container">
						<div className="clic-title text-center mt-5">
							<p>Tiendas destacadas con cashback</p>
						</div>
						<p className="offers-h3 text-center"><span>Revisa cada alianza que </span><span>tenemos especialmente para ti</span></p>
						<section className="card-featured__container">
							<OfferSlider item={[1,2,3,4]} />
						</section>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="container">
						<div className="card-fans__header">
							<p className="subtitle-main">¿Que dicen nuestros Iwana Fans?</p>
							<p className="card-fans__subtitle">¡Obtén hasta un 10% de devolución de dinero!</p>
						</div>
						<section className="card-fans__body">
							<ItemFans  item={[1,2,3,4]} />
						</section>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<p className="subtitle-main">¿Tienes una Empresa?</p>
					<p className="company-h3">Únete a Iwana Partners y deja que miles de clientes disfruten de tus productos y servicios.</p>
					<div className="company-mobile">
						<img src={phone} alt="Quiero unirme" />
						<div className="company-container">
							<div className="company-logo">
								<img src={image_logotipo_brand} alt="IWANA CASH" />
							</div>
							<button type="button" className="btn btn-blue btn-join">Quiero Unirme</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home