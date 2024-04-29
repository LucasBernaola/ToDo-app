import { db } from '../config/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect, useCallback } from "react";

export const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask debe usarse dentro del TaskProvider");
    }
    return context;
};

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTasks = useCallback(async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            const tasksData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setTasks(tasksData);
        } catch (err) {
            console.error("Error al obtener las tareas: ", err);
            setError(err);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const addTask = useCallback(async (taskData) => {
        try {
            const completeTaskData = {...taskData, completed: false}
            const docRef = await addDoc(collection(db, "tasks"), completeTaskData);
            setTasks((prevTasks) => [...prevTasks, { id: docRef.id,  ...completeTaskData }]);
        } catch (err) {
            console.error("Error al agregar la tarea: ", err);
            setError(err);
        }
    }, []);

    const updateTask = useCallback(async (taskId, updatedData) => {
        try {
            await updateDoc(doc(db, "tasks", taskId), updatedData);
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task.id === taskId ? { ...task, ...updatedData } : task))
            );
        } catch (err) {
            console.error("Error al actualizar la tarea: ", err);
            setError(err);
        }
    }, []);

    const deleteTask = useCallback(async (task) => {      
        console.log("deleteTask - task:", task); 
        try {
            await deleteDoc(doc(db, "tasks", task.id));
            setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
        } catch (err) {
            console.error("Error al eliminar la tarea: ", err);
            setError(err);
        }
    }, []);
    

    const value = {
        tasks,
        loading,
        error,
        addTask,
        fetchTasks,
        updateTask,
        deleteTask,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
