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
          message: "Updated task",
          duration: 2.5,
        });
      } else {
        await addTask(taskData);
        notification.success({
          message: "Added task",
          duration: 2.5,
        });
      }

      form.resetFields();
      onClose();
    } catch (err) {
      notification.error({
        message: "Error processing task",
        description: "There was a problem, try again.",
        duration: 4.5,
      });
    }
  };

  return (
    <Modal
      title={taskExist ? "Edit Task" : "Add New Task"}
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onFormSubmit}>
          {taskExist ? "Update Task" : "Add Task"}
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="taskName"
          label="Task name"
          rules={[
            {
              required: true,
              message: "Please enter the name of the task",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="date"
          label="Task Date"
          rules={[
            { required: true, message: "Please select a date" },
          ]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskModal;
