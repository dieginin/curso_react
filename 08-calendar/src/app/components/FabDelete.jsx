import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {
  const { hasEventSelected, startDeletingEvent } = useCalendarStore()

  const handleDelete = async () => startDeletingEvent()

  return (
    <>
      {hasEventSelected && (
        <button className={`btn btn-danger fd`} onClick={handleDelete}>
          <i className='fas fa-trash' />
        </button>
      )}
    </>
  )
}
