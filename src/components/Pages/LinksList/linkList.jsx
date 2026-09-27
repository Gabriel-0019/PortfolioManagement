import {
    Button,
    IconButton,
    Paper,
    SvgIcon,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { Box } from '@mui/material'
import Sidebar from '../../layouts/Sidebar/Sidebar.jsx'
import Topbar from '../../layouts/Topbar/Topbar.jsx'
import './linkList.css'

const demoLinks = [
    {
        id: 'EN-01',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gabriel-mora-torres-054492179/',
        category: 'Proyecto',
        status: 'Published',
    },
]

function LinksList({
    links = demoLinks,
    onEdit,
    onDelete,
    onNewLink,
    siteUrl = 'https://www.linkedin.com/in/gabriel-mora-torres-054492179/',
}) {
    return (
        <Box component="main" className="links-page">
            <Sidebar currentItem="Enlaces" />
            <Box className="links-page__workspace">
                <Topbar pageTitle="Enlaces" status="Activa" />
                <Box component="section" className="links-page__content">
                    <Box className="links-page__heading">
                        <Box className="links-page__heading-copy">
                            <Typography component="h1" className="links-page__title">Mantenimiento de Enlaces</Typography>
                            <Typography className="links-page__description">Gestiona los enlaces de tu portfolio.</Typography>
                        </Box>
                        <Box className="links-page__topbar-actions">
                            <Button
                                component="a"
                                href={siteUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="links-page__view-site"
                            >
                                <span aria-hidden="true">↗</span>
                                Ver sitio
                            </Button>
                            <Button onClick={() => onNewLink?.()} className="links-page__new-link">
                                <span aria-hidden="true">+</span>
                                Nuevo enlace
                            </Button>
                        </Box>
                    </Box>
                    <TableContainer component={Paper} variant="outlined" className="links-list">
                        <Table aria-label="Lista de enlaces" className="links-list__table">
                            <TableHead>
                                <TableRow className="links-list__header-row">
                                    <TableCell className="links-list__heading links-list__heading--id">ID</TableCell>
                                    <TableCell className="links-list__heading links-list__heading--name">Nombre</TableCell>
                                    <TableCell className="links-list__heading">URL</TableCell>
                                    <TableCell className="links-list__heading links-list__heading--category">Categoría</TableCell>
                                    <TableCell className="links-list__heading links-list__heading--status">Estado</TableCell>
                                    <TableCell align="right" className="links-list__heading links-list__heading--actions">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {links.length === 0 ? (
                                    <TableRow>
                                            <TableCell colSpan={6} align="center" className="links-list__empty-cell">
                                            <Typography className="links-list__empty-message">
                                                No hay enlaces registrados
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ) : links.map((link) => (
                                    <TableRow key={link.id} hover>
                                        <TableCell className="links-list__cell links-list__cell--id">{link.id}</TableCell>
                                        <TableCell className="links-list__cell links-list__cell--name">{link.name}</TableCell>
                                        <TableCell className="links-list__url-cell">
                                            <Typography
                                                component="a"
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                noWrap
                                                className="links-list__url"
                                            >
                                                {link.url}
                                            </Typography>
                                        </TableCell>
                                        <TableCell className="links-list__cell">
                                            <span className="links-list__category">{link.category}</span>
                                        </TableCell>
                                        <TableCell className="links-list__cell">
                                            <span className={`links-list__status ${link.status === 'Published' ? 'links-list__status--published' : 'links-list__status--draft'}`}>
                                                <span className="links-list__status-dot" aria-hidden="true" />
                                                {link.status}
                                            </span>
                                        </TableCell>
                                        <TableCell align="right" className="links-list__actions-cell">
                                            <IconButton
                                                size="small"
                                                title="Editar enlace"
                                                aria-label={`Editar ${link.name}`}
                                                disabled={!onEdit}
                                                onClick={() => onEdit?.(link)}
                                                className="links-list__action"
                                            >
                                                <SvgIcon fontSize="small" aria-hidden="true">
                                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                                </SvgIcon>
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                color="error"
                                                title="Eliminar enlace"
                                                aria-label={`Eliminar ${link.name}`}
                                                disabled={!onDelete}
                                                onClick={() => onDelete?.(link)}
                                                className="links-list__action links-list__action--delete"
                                            >
                                                <SvgIcon fontSize="small" aria-hidden="true">
                                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                                </SvgIcon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Box className="links-list__footer">
                            Mostrando {links.length} {links.length === 1 ? 'enlace' : 'enlaces'}
                        </Box>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    )
}

export default LinksList
