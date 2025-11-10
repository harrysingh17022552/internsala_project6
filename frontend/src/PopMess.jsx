/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export default function PopMess({ popMessage, setPopMessage }) {
  const messRef = useRef(null);
  useEffect(() => {
    messRef.current.parentElement.style.display = "flex";
    messRef.current.textContent = popMessage;
    setTimeout(() => {
      messRef.current.parentElement.style.display = "none";
      setPopMessage("");
    }, 2000);
  }, [popMessage]);
  return (
    <section className="flex fixed top-0 w-full bg-gray-500 p-2 justify-center items-center rounded-b-xl animate-[fromUp_1s_ease] z-50">
      <p ref={messRef}></p>
    </section>
  );
}
