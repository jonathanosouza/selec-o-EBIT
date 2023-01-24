import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../service/api";

export interface movies {
  id: number;
  tipes: string[];
  title: string;
  description: string;
  price: number;
  quantity: number;
  photo: string;
  nameauth: string;
  datemovi: string;
  paismovie: string;
  video: string;
}

interface MovieProps {
  movies: movies[];
  setMovies: any;
  loadMoviesPage: () => void;
}
interface MoviePropsProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext({} as MovieProps);
export const MovieProvider = ({ children }: MoviePropsProviderProps) => {
  const [movies, setMovies] = useState<movies[]>([]);

  async function loadMoviesPage() {
    const response = await api.get("dbmovies");
    setMovies(response.data);
  }

  useEffect(() => {
    loadMoviesPage();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        loadMoviesPage,
        setMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
