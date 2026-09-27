import { Box, Button, Typography } from '@mui/material'
import Sidebar from '../../layouts/Sidebar/Sidebar.jsx'
import Topbar from '../../layouts/Topbar/Topbar.jsx'
import './error404.css'

function Error404() {
	const currentPath = window.location.pathname

	return (
		<Box component="main" className="error404-shell">
			<Sidebar />

			<Box className="error404-workspace">
				<Topbar />

				<Box component="section" className="error404-content">
					<Box className="error404-page-heading">
						<Box>
							<Typography component="h1" className="error404-page-heading__title">
								Página no encontrada
							</Typography>
							<Typography className="error404-page-heading__description">
								No encontramos el recurso solicitado en tu portfolio.
							</Typography>
						</Box>
						<Button onClick={() => window.history.back()} variant="outlined" className="error404-back-top">
							Volver atrás
						</Button>
					</Box>

					<Box className="error404-grid">
						<Box component="section" className="error404-panel">
							<Box className="error404-panel__topline">
								<Typography className="error404-panel__section-label">ESTADO DE LA PÁGINA</Typography>
								<Box className="error404-status-chip">
									<Box component="span" className="error404-status-chip__dot" />
									<Typography>No disponible</Typography>
								</Box>
							</Box>

							<Box className="error404-route-graphic" aria-hidden="true">
								<Box className="error404-route-graphic__node error404-route-graphic__node--start">↗</Box>
								<Box className="error404-route-graphic__path" />
								<Box className="error404-route-graphic__break">!</Box>
								<Box className="error404-route-graphic__path error404-route-graphic__path--broken" />
								<Box className="error404-route-graphic__node error404-route-graphic__node--end">?</Box>
							</Box>

							<Typography component="h2" className="error404-panel__title">
								Este destino no está en tu portfolio.
							</Typography>
							<Typography className="error404-panel__description">
								Es posible que el enlace haya cambiado, se haya eliminado o que la dirección esté escrita incorrectamente.
							</Typography>
							<Box className="error404-panel__actions">
								<Button onClick={() => window.history.back()} variant="contained" disableElevation className="error404-home-button">
									Volver a la página anterior
								</Button>
								<Button component="a" href="/" variant="text" className="error404-root-button">
									Ir al inicio
								</Button>
							</Box>
						</Box>

						<Box component="aside" className="error404-details">
							<Typography className="error404-details__eyebrow">DETALLES DE LA SOLICITUD</Typography>
							<Typography component="h2" className="error404-details__title">Información del error</Typography>
							<Box className="error404-detail-row">
								<Typography className="error404-detail-row__label">Código</Typography>
								<Typography className="error404-detail-row__value">404</Typography>
							</Box>
							<Box className="error404-detail-row">
								<Typography className="error404-detail-row__label">Estado</Typography>
								<Typography className="error404-detail-row__value error404-detail-row__value--state">No encontrado</Typography>
							</Box>
							<Box className="error404-detail-row error404-detail-row--path">
								<Typography className="error404-detail-row__label">Dirección solicitada</Typography>
								<Box component="code" className="error404-detail-row__path">{currentPath}</Box>
							</Box>
							<Box className="error404-details__note">
								<Box className="error404-details__note-icon" aria-hidden="true">i</Box>
								<Typography>Comprueba la dirección o vuelve a una sección anterior de tu portfolio.</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Error404
