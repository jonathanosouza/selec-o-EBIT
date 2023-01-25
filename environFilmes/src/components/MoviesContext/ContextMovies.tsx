import { createContext, ReactNode, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

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
}
interface MoviePropsProviderProps {
  children: ReactNode;
}


export const MovieContext = createContext({} as MovieProps);
export const MovieProvider = ({ children }: MoviePropsProviderProps) => {
  const [movies, setMovies] = useState<movies[]>([]);
  const firebaseConfig = {
    apiKey: "AIzaSyABAHxUZhI0xU_pxRb-AY9R_kjsuQ_QVjs",
    authDomain: "environbitteste.firebaseapp.com",
    databaseURL: "https://environbitteste-default-rtdb.firebaseio.com",
    projectId: "environbitteste",
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const userTable = collection(db, "movies")

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(userTable)
      const moviesDb: any = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setMovies(moviesDb)
    }
    getMovies()
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
