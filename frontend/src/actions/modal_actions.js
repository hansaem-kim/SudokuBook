export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, id=null) => ({
    type: OPEN_MODAL,
    modal,
    id
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});