import { onCloseDateModal, onOpenDateModal } from "../store"
import { useDispatch, useSelector } from "react-redux"

export const useUiStore = () => {
  const dispatch = useDispatch()

  const { isDateModalOpen } = useSelector((state) => state.ui)

  const closeDateModal = () => dispatch(onCloseDateModal())
  const openDateModal = () => dispatch(onOpenDateModal())
  const toggleDateModal = () =>
    isDateModalOpen ? openDateModal() : closeDateModal()

  return {
    //* Propiedades
    isDateModalOpen,

    //* Métodos
    closeDateModal,
    openDateModal,
    toggleDateModal,
  }
}
