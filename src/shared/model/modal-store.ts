import { create } from 'zustand';

type ModalType =
  | 'createPost'
  | 'createPlan'
  | 'archivePlan'
  | 'unarchivePlan'
  | 'editPlan'
  | 'deletePlan'
  | 'createCategory'
  | 'editCategory'
  | 'deleteCategory'
  | 'createPartner';

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData;
  onOpen: (type: ModalType | null, data?: ModalData) => void;
  onClose: () => void;
}

interface ModalData {
  id?: string | number;
  title?: string;
  description?: string;
  price?: number;
}

export const useModal = create<ModalStore>(set => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) => {
    document.body.style.overflow = 'hidden';
    set({ isOpen: true, type, data });
  },
  onClose: () => {
    document.body.style.overflow = 'auto';
    set({ isOpen: false, type: null });
  },
}));
