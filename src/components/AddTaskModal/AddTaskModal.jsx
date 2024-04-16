import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Modal, Form, Input, Button, DatePicker, notification } from 'antd';
import './AddTaskModal.css';

const { TextArea } = Input;

const AddTaskModal = ({ isOpen, onClose }) => {
    const { addTask } = useContext(TaskContext);
    const [form] = Form.useForm();

    const onFormSubmit = async () => {
        try {
            const values = await form.validateFields();
            await addTask({
                name: values.taskName,
                description: values.description || '',
                date: values.date.format('YYYY-MM-DD'), // Formatea la fecha como cadena
            });
            form.resetFields(); // Reinicia los campos del formulario después de la presentación
            onClose(); // Cierra el modal después de agregar la tarea
        } catch (err) {
            console.error("Error al agregar la tarea: ", err);
            notification.error({
                message: 'Error al agregar la tarea',
                description: 'Error al agregar la tarea, inténtalo de nuevo.',
                duration: 4.5 // Tiempo en segundos que la notificación será visible
            });
        }
    };

    return (
        <Modal
            title="Agregar Nueva Tarea"
            open={isOpen}
            onCancel={onClose}
            footer={[
                <Button key="back" onClick={onClose}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={onFormSubmit}>
                    Agregar Tarea
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="taskName"
                    label="Nombre de la Tarea"
                    rules={[{ required: true, message: 'Por favor ingresa el nombre de la tarea' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Descripción"
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    name="date"
                    label="Fecha de la Tarea"
                    rules={[{ required: true, message: 'Por favor selecciona una fecha' }]}
                >
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddTaskModal;
