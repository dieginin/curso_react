import "react-datepicker/dist/react-datepicker.css"

import DatePicker from "react-datepicker"
import Modal from "react-modal"
import { addHours } from "date-fns"
import { useState } from "react"

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
  const [isOpen, setIsOpen] = useState(true)
  const [formValues, setFormValues] = useState({
    title: "Diego",
    notes: "Balestra",
    start: new Date(),
    end: addHours(new Date(), 2),
  })

  const onCloseModal = () => setIsOpen(false)

  const onInputChange = ({ target }) =>
    setFormValues({ ...formValues, [target.name]: target.value })

  const onDateChange = (changing, date) =>
    setFormValues({ ...formValues, [changing]: date })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1>Nuevo evento</h1>
      <hr />
      <form className='container'>
        <div className='form-group mb-2'>
          <label>Fecha y hora inicio</label>
          <DatePicker
            className='form-control'
            dateFormat='Pp'
            onChange={(date) => onDateChange("start", date)}
            selected={formValues.start}
          />
        </div>

        <div className='form-group mb-2'>
          <label>Fecha y hora fin</label>
          <DatePicker
            className='form-control'
            dateFormat='Pp'
            minDate={formValues.start}
            onChange={(date) => onDateChange("end", date)}
            selected={formValues.end}
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className='form-control'
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
