"use client";

import React, { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  

  const loadNotes = async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      setNotes(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar las notas:", error);
    }
  };



  useEffect(() => {
    loadNotes();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const contentType = res.headers.get("content-type");
      const data = contentType?.includes("application/json") ? await res.json() : null;

      console.log("Respuesta:", data);
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <NoteForm onNoteCreated={loadNotes} />

        {loading ? (
          <p>Cargando notas...</p>
        ) : notes.length === 0 ? (
          <p>No hay notas disponibles.</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="border border-gray-300 rounded-md p-2 backdrop-blur-sm bg-gray-200 p-4 my-5"
            >
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <p>{note.createdAt}</p>
              <button onClick={() => handleDelete(note.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
