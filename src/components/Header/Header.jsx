import s from './Header.module.scss'
import SearchForm from '../SearchForm/SearchForm.jsx'

const Header = ({ onSearch }) => {
	return (
		<div className='container'>
			<header className={s.header}>
				<a href='#'>
					<h1>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='164'
							height='24'
							viewBox='0 0 164 24'
							fill='none'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M27.8696 24C33.7309 24 38.5394 19.2626 38.5394 13.4724C38.5394 10.428 37.4724 7.85299 35.2958 5.67635L32.9626 3.32899C30.9567 1.32306 28.2395 0 25.1808 0C19.291 0 14.511 4.75163 14.511 10.6414C14.511 13.7427 15.8056 16.4173 17.8257 18.409L19.7178 20.2869C22.4351 22.9757 24.6544 24 27.8696 24ZM16.46 23.6586H2.98755L0 20.671V0.398343H4.85121L7.98103 3.37167V16.0759H13.4724L16.46 19.0634V23.6586ZM5.00772 1.25192V16.0759H7.46889V3.59929L5.00772 1.25192ZM2.24776 18.6793V2.50385H2.75991V18.1956H11.5376V18.6793H2.24776ZM0.867776 20.8275L3.18669 23.1464H15.9478V19.2626L13.6289 16.9437V20.8275H0.867776ZM16.8015 10.6414C16.8015 15.3646 20.5146 19.1203 25.1808 19.1203C29.8471 19.1203 33.5602 15.3646 33.5602 10.6414C33.5602 5.94665 29.8613 2.19087 25.1808 2.19087C20.4576 2.23355 16.8015 5.93242 16.8015 10.6414ZM25.1809 18.6366C29.5768 18.6366 33.0339 15.1085 33.0339 10.6414C33.0339 6.1885 29.5768 2.67457 25.1809 2.67457C20.7849 2.67457 17.3279 6.1885 17.3279 10.6414C17.3279 15.1085 20.7849 18.6366 25.1809 18.6366ZM19.604 10.6271C19.6325 12.7469 20.4719 14.4683 22.1079 15.5495C21.8091 14.8524 21.6384 14.0699 21.6384 13.0456C21.6384 9.53171 24.313 6.75756 27.7273 6.75756C28.4956 6.75756 29.15 6.92827 29.7617 7.24125C28.7232 5.74748 27.0729 4.89389 25.1808 4.86544C22.051 4.86544 19.6183 7.36929 19.604 10.6271ZM27.8696 23.4878C24.8394 23.4878 22.5632 22.5489 20.0451 19.9597C21.61 20.8133 23.3599 21.3112 25.1808 21.3112C31.0706 21.3112 35.8507 16.5311 35.8507 10.6414C35.7938 8.72081 35.4381 7.2128 34.5561 5.61944C36.9319 7.93835 38.0273 10.3142 38.0273 13.4724C38.0273 18.9781 33.4464 23.4878 27.8696 23.4878ZM22.9614 16.0047C23.6301 16.2893 24.3699 16.4458 25.1808 16.4458C28.2964 16.4458 30.7575 13.8992 30.7575 10.6414C30.7575 9.70243 30.5726 8.84884 30.2311 8.09484C29.5056 7.52578 28.7089 7.26971 27.7273 7.26971C24.5975 7.26971 22.1505 9.78779 22.1505 13.0456C22.1505 14.3972 22.3924 15.2507 22.9614 16.0047ZM53.0788 24C55.7819 24 59.1535 23.2602 60.818 22.3071V11.7368L57.6882 8.76349H49.5649V12.9603L52.396 15.6633L52.9224 15.6918V16.2324C52.2964 16.3889 51.5851 16.4742 50.8453 16.4742C49.6787 16.4742 48.626 16.2608 47.7297 15.8625C47.1322 15.1369 46.8477 14.2549 46.8477 13.0599C46.8477 9.50326 49.3942 7.09899 53.1073 7.09899C55.4831 7.09899 58.0296 8.08062 59.5661 9.11915V4.15412L56.607 1.19502C54.7291 0.355661 52.1541 0 50.3758 0C44.0877 0 39.3219 4.42442 39.3219 10.6556C39.3219 13.8566 40.588 16.5738 42.6509 18.5797L44.9555 20.8275C47.0895 22.9046 49.8068 24 53.0788 24ZM44.4434 10.741C44.4434 12.7611 45.2827 14.3545 46.9046 15.4215C46.5204 14.767 46.3355 14.013 46.3355 13.0456C46.3355 9.21873 49.1381 6.58684 53.1215 6.58684C55.1417 6.58684 57.2899 7.26971 59.0539 8.23711V4.35329L56.735 2.03438V6.43035C55.4973 5.4914 53.1926 4.83699 51.0729 4.83699C47.1037 4.83699 44.4434 7.1559 44.4434 10.741ZM50.2478 19.1346C45.1974 19.1346 41.6266 15.6064 41.6266 10.6414C41.6266 5.77593 45.2828 2.29046 50.3901 2.29046C51.6847 2.29046 53.4772 2.51808 54.6722 2.91642V3.4428C53.5341 3.016 51.7131 2.77415 50.3901 2.77415C45.5673 2.77415 42.153 6.04624 42.153 10.6414C42.153 15.3503 45.4819 18.6509 50.2478 18.6509C51.7274 18.6509 53.6479 18.2952 55.1275 17.7261V11.182H51.6562V10.6983H55.6396V18.0391C54.1174 18.6935 51.955 19.1346 50.2478 19.1346ZM44.6995 19.917C47.1749 22.4209 49.6361 23.4878 53.0789 23.4878C55.5543 23.4878 58.6414 22.8477 60.3059 21.9941V11.9644L57.8447 9.61707V19.4618C56.2087 20.5145 52.9224 21.3112 50.2051 21.3112C48.3272 21.3112 46.3924 20.8133 44.6995 19.917ZM52.9224 15.1654L52.6236 15.1512L50.4328 13.1168H52.9224V15.1654ZM86.4115 13.4724C86.4115 19.2626 81.603 24 75.7417 24C72.5265 24 70.3072 22.9757 67.5899 20.2869L65.6978 18.409C63.6776 16.4173 62.383 13.7427 62.383 10.6414C62.383 4.75163 67.1631 0 73.0529 0C76.1115 0 78.8288 1.32306 80.8347 3.32899L83.1679 5.67635C85.3445 7.85299 86.4115 10.428 86.4115 13.4724ZM73.0528 19.1203C68.3865 19.1203 64.6734 15.3646 64.6734 10.6414C64.6734 5.93242 68.3296 2.23355 73.0528 2.19087C77.7333 2.19087 81.4322 5.94665 81.4322 10.6414C81.4322 15.3646 77.7191 19.1203 73.0528 19.1203ZM80.9058 10.6414C80.9058 15.1085 77.4488 18.6366 73.0528 18.6366C68.6569 18.6366 65.1998 15.1085 65.1998 10.6414C65.1998 6.1885 68.6569 2.67457 73.0528 2.67457C77.4488 2.67457 80.9058 6.1885 80.9058 10.6414ZM69.9799 15.5495C68.3438 14.4683 67.5045 12.7469 67.476 10.6271C67.4902 7.36929 69.923 4.86544 73.0528 4.86544C74.9449 4.89389 76.5952 5.74748 77.6337 7.24125C77.0219 6.92827 76.3675 6.75756 75.5993 6.75756C72.185 6.75756 69.5104 9.53171 69.5104 13.0456C69.5104 14.0699 69.6811 14.8524 69.9799 15.5495ZM67.9171 19.9597C70.4351 22.5489 72.7114 23.4878 75.7416 23.4878C81.3184 23.4878 85.8993 18.9781 85.8993 13.4724C85.8993 10.3142 84.8038 7.93835 82.428 5.61944C83.3101 7.2128 83.6657 8.72081 83.7226 10.6414C83.7226 16.5311 78.9426 21.3112 73.0528 21.3112C71.2318 21.3112 69.482 20.8133 67.9171 19.9597ZM73.0528 16.4458C72.2419 16.4458 71.5022 16.2893 70.8335 16.0047C70.2645 15.2507 70.0226 14.3972 70.0226 13.0456C70.0226 9.78779 72.4696 7.26971 75.5994 7.26971C76.581 7.26971 77.3777 7.52578 78.1032 8.09484C78.4447 8.84884 78.6296 9.70243 78.6296 10.6414C78.6296 13.8992 76.1684 16.4458 73.0528 16.4458ZM98.1767 23.6586H93.1832L90.1957 20.671V7.95258H87.8341L84.8465 4.96503V0.398343H100.396L103.384 3.3859V7.95258H98.1767V23.6586ZM93.3824 23.1464L91.0635 20.8275H95.2034V5.12152H100.553V1.26615L102.871 3.58506V7.44043H97.6645V23.1464H93.3824ZM92.4435 2.98755V18.722H92.9556V2.98755H98.4613V2.51808H86.9379V2.98755H92.4435ZM88.0333 7.44042L85.7144 5.12151H90.1957V7.44042H88.0333ZM118.407 23.6586H113.413L110.426 20.671V12.6758L102.473 0.398343H108.59L113.314 3.30054L114.395 5.10729L117.197 0.398343H123.045L125.207 3.18672L118.407 13.4582V23.6586ZM113.612 23.1464L111.294 20.8275H115.433V12.6758L122.931 1.09544L124.581 3.21518L117.895 13.3159V23.1464H113.612ZM109.273 1.42264L112.93 7.55424L114.096 5.60522L112.944 3.67042L109.273 1.42264ZM112.674 18.722V12.1209L106.627 2.50385H107.225L112.93 11.6657L118.663 2.50385H119.26L113.186 12.1494V18.722H112.674ZM134.355 23.6586H129.361L126.374 20.671V0.398343H134.426C136.83 0.398343 138.864 1.29461 140.273 2.70303L142.563 4.99348C144 6.43035 144.655 8.08062 144.655 10.2573C144.655 14.3829 141.098 17.6266 136.546 17.6266H134.355V23.6586ZM128.621 18.722V2.41849H134.426C137.627 2.41849 139.832 4.45287 139.832 7.4262C139.832 10.6129 137.428 12.9318 134.141 12.9318H129.134V18.722H128.621ZM134.141 12.4481H129.133V2.90219H134.426C137.342 2.90219 139.305 4.72317 139.305 7.4262C139.305 10.3426 137.129 12.4481 134.141 12.4481ZM129.56 23.1464L127.241 20.8275H131.381V14.9378H134.141C138.679 14.9378 142.094 11.7226 142.108 7.45465C142.108 6.43035 141.923 5.51986 141.525 4.63782C143.531 6.52993 144.142 7.82454 144.142 10.2573C144.142 14.0984 140.828 17.1144 136.545 17.1144H133.842V23.1464H129.56ZM131.381 4.92235V10.4422H133.558V7.09899H136.986C136.745 5.81861 135.72 4.9508 134.369 4.92235H131.381ZM134.07 10.4422V7.61114H137.043V7.71073C137.043 9.23296 135.848 10.4422 134.312 10.4422H134.07ZM163.177 23.6586H149.278L146.291 20.671V0.398343H159.792L162.779 3.3859V7.24126H154.072V8.10907H158.454L161.442 11.0966V15.3503H154.072V16.2181H160.19L163.177 19.2057V23.6586ZM151.241 8.10907V4.9508H159.948V1.26615L162.267 3.58506V6.72911H153.56V8.10907H151.241ZM148.496 2.43272V18.7647H158.255V18.281H149.008V10.6841H156.519V10.2004H149.008V2.91642H157.857V2.43272H148.496ZM151.241 16.2181V12.7753H158.611V8.97688L160.93 11.2958V14.8382H153.56V16.2181H151.241ZM147.158 20.8275L149.477 23.1464H162.665V19.4049L160.346 17.0859V20.8275H147.158Z'
								fill='black'
							/>
						</svg>
					</h1>
				</a>
				<SearchForm onSearch={onSearch} />
			</header>
		</div>
	)
}

export default Header