"use client";
import { useState } from "react";

interface NoteFormProps {
  onNoteCreated?: () => void; // opcional
}

export default function NoteForm({ onNoteCreated }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createdAt = new Date();
    const updatedAt = new Date();

    if (!title.trim() || !content.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, createdAt, updatedAt }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const contentType = res.headers.get("content-type");
      const data = contentType?.includes("application/json") ? await res.json() : null;

      console.log("Nota creada:", data);

      // Limpia el formulario
      setTitle("");
      setContent("");

      // Llama al callback si est� definido
      onNoteCreated?.();
    } catch (error) {
      console.error("Error al enviar la nota:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form className="max-w-7xl space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        className="border border-gray-300 rounded-md p-2 w-full"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        name="content"
        value={content}
        placeholder="Content"
        className="border border-gray-300 rounded-md p-2 w-full"
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="submit"
        value={loading ? "Enviando..." : "Crear nota"}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        disabled={loading}
      />
    </form>
  );
}
