export interface MainHeaderProps {
	handleOpen: () => void;
}

export interface MainSiderProps {
	isOpen: boolean;
	handleClose: () => void;
}

export interface SiderRegionsProps {
	isMain?: boolean;
}
