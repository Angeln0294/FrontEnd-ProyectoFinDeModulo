import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Envía el scroll al inicio de la pantalla de forma instantánea al cambiar de ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no dibuja nada en pantalla, solo ejecuta la lógica
}
