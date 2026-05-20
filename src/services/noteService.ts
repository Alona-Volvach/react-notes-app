import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface CreateNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}

interface FetchNotesParams {
  search?: string;
  tag?: string;
  page?: number;
  perPage?: number;
  sortBy?: string;
}

export async function fetchNotes(
  params?: FetchNotesParams
): Promise<FetchNotesResponse> {
  const res = await axios.get<FetchNotesResponse>("/notes", {
    params,
  });

  return res.data;
}

export async function createNote(
  data: CreateNoteData
): Promise<Note> {
  const res = await axios.post<Note>("/notes", data);
  return res.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const res = await axios.delete<Note>(`/notes/${id}`);
  return res.data;
}