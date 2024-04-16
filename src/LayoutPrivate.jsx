import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import appFirebase from './config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate, Outlet } from 'react-router-dom';
// se necesita importar el contexto de usuario para que funcione

const auth = getAuth(appFirebase);

const LayoutPrivate = () => {
    // aqui se necesita el contexto de usuario y su estado

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Hook para manejar la navegación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            setUser(usuarioFirebase);
            setLoading(false);
            if (usuarioFirebase) {
                navigate('/ToDo'); // Redirige si hay usuario
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" replace={true} />;
    }

    return <Outlet />;
};

export default LayoutPrivate;