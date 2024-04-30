import React, { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Modal, Form, Input, Button, DatePicker, notification } from "antd";
import moment from "moment";
import "./taskModal.css";

const { TextArea } = Input;

const TaskModal = ({ isOpen, onClose, task }) => {
  const { addTask, updateTask } = useContext(TaskContext);
  const [form] = Form.useForm();
  const taskExist = !!task;

  useEffect(() => {
    if (taskExist && task) {
      form.setFieldsValue({
        taskName: task.name,
        description: task.description,
        date: moment(task.date),
      });
    }
  }, [task, form, taskExist]);

  const onFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      const taskData = {
        name: values.taskName,
        description: values.description || "",
        date: values.date.format("YYYY-MM-DD"),
      };

      if (taskExist) {
        await updateTask(task.id, taskData);
        notification.success({
          message: "Tarea actualizada",
          duration: 2.5,
        });
      } else {
        await addTask(taskData);
        notification.success({
          message: "Tarea agregada",
          duration: 2.5,
        });
      }

      form.resetFields();
      onClose();
    } catch (err) {
      notification.error({
        message: "Error al procesar la tarea",
        description: "Hubo un problema, inténtalo de nuevo.",
        duration: 4.5,
      });
    }
  };

  return (
    <Modal
      title={taskExist ? "Editar Tarea" : "Agregar Nueva Tarea"}
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={onFormSubmit}>
          {taskExist ? "Actualizar Tarea" : "Agregar Tarea"}
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="taskName"
          label="Nombre de la Tarea"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el nombre de la tarea",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Descripción">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="date"
          label="Fecha de la Tarea"
          rules={[
            { required: true, message: "Por favor selecciona una fecha" },
          ]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskModal;
