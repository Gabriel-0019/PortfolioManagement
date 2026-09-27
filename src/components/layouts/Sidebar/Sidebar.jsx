import { Box, Typography } from '@mui/material'
import './Sidebar.css'

function Sidebar({ currentItem = 'Página actual' }) {
	return (
		<Box component="aside" className="sidebar">
			<Box className="sidebar-brand">
				<Box className="sidebar-brand__mark" aria-hidden="true">GM</Box>
				<Box>
					<Typography className="sidebar-brand__caption">Gabriel Mora</Typography>
					<Typography className="sidebar-brand__caption">Software Engineer</Typography>
				</Box>
			</Box>

			<Box component="nav" aria-label="Navegación" className="sidebar-navigation">
				<Typography className="sidebar-navigation__label">Espacio de trabajo</Typography>
				<Box className="sidebar-navigation__item" aria-current="page">
					<Box component="span" className="sidebar-navigation__icon" aria-hidden="true">↗</Box>
					<Typography className="sidebar-navigation__text">{currentItem}</Typography>
				</Box>
			</Box>

			<Box className="sidebar__footer">
				<Box className="sidebar__avatar" aria-hidden="true">GM</Box>
				<Box>
					<Typography className="sidebar__account">Gabriel Mora</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Sidebar