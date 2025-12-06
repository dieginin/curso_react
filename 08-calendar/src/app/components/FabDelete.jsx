import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {
  const { hasEventSelected, startDeletingEvent } = useCalendarStore()
  const { isDateModalOpen } = useUiStore()

  const handleDelete = async () => startDeletingEvent()

  return (
    <>
      {hasEventSelected & !isDateModalOpen && (
        <button className={`btn btn-danger fd`} onClick={handleDelete}>
          <i className='fas fa-trash' />
        </button>
      )}
    </>
  )
}
