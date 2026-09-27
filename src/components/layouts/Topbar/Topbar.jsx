import { Box, Typography } from '@mui/material'
import './Topbar.css'

function Topbar({ section = 'Portfolio', pageTitle = 'Página no encontrada', status = 'Error', actions }) {
	return (
		<Box component="header" className="topbar">
			<Box className="topbar-breadcrumb">
				<Typography className="topbar-breadcrumb__parent">{section}</Typography>
				<Box component="span" className="topbar-breadcrumb__separator" aria-hidden="true">/</Box>
				<Typography className="topbar-breadcrumb__current">{pageTitle}</Typography>
			</Box>
			<Box className="topbar__right">
				{status && (
					<Box className="topbar__status">
						<Box component="span" className="topbar__status-dot" />
						<Typography>{status}</Typography>
					</Box>
				)}
				{actions}
			</Box>
		</Box>
	)
}

export default Topbar