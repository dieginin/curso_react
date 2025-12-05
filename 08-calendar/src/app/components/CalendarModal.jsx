import "react-datepicker/dist/react-datepicker.css"

import DatePicker, { registerLocale } from "react-datepicker"
import { addHours, differenceInSeconds } from "date-fns"
import { useMemo, useState } from "react"

import Modal from "react-modal"
import Swal from "sweetalert2"
import { es } from "date-fns/locale"
import { useUiStore } from "../../hooks"

registerLocale("es", es)

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#root")

export const CalendarModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    title: "Diego",
    notes: "Balestra",
    start: new Date(),
    end: addHours(new Date(), 2),
  })

  const titleClass = useMemo(() => {
    if (formSubmitted && formValues.title.length < 1) return "is-invalid"
    return ""
  }, [formValues.title, formSubmitted])

  const onInputChange = ({ target }) =>
    setFormValues({ ...formValues, [target.name]: target.value })

  const onDateChange = (changing, date) =>
    setFormValues({ ...formValues, [changing]: date })

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)

    const difference = differenceInSeconds(formValues.end, formValues.start)

    if (isNaN(difference) || difference <= 0)
      return Swal.fire(
        "Fechas incorrectas",
        "Revisar las fechas ingresadas",
        "error"
      )
    if (formValues.title.length <= 0) return

    console.log(formValues)
    // TODO
    // REMOVER ERRORES EN PANTALLA
    // CERRAR MODAL
  }

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1>Nuevo evento</h1>
      <hr />
      <form className='container' onSubmit={onSubmit}>
        <div className='form-group mb-2'>
          <label>Fecha y hora inicio</label>
          <DatePicker
            className='form-control'
            dateFormat='Pp'
            locale='es'
            onChange={(date) => onDateChange("start", date)}
            selected={formValues.start}
            showTimeSelect
            timeCaption='Hora'
          />
        </div>

        <div className='form-group mb-2'>
          <label>Fecha y hora fin</label>
          <DatePicker
            className='form-control'
            dateFormat='Pp'
            locale='es'
            minDate={formValues.start}
            onChange={(date) => onDateChange("end", date)}
            selected={formValues.end}
            showTimeSelect
            timeCaption='Hora'
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className={`form-control ${titleClass}`}
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id='emailHelp' className='form-text text-muted'>
            Una descripción corta
          </small>
        </div>

        <div className='form-group mb-2'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Información adicional
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  )
}
