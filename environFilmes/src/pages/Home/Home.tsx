import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Col, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import Carousel from "react-multi-carousel";

import {
  Content,
  HomeContainer,
  InfoContainer,
  ListMoviesContainer,
  MenuMovies
} from "./Homestyles";

import { carouselResponsive } from "../../config/carousel";
import { CardMovie } from "../../components/CardMovies/CardMovie";
import { MovieContext } from "../../components/MoviesContext/ContextMovies";

export function Home() {
  const carrousel = useRef<any>();
  const { movies } = useContext(MovieContext);
  const { register, handleSubmit } = useForm();

  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("todos");
  const [moviesFiltered, setMoviesFiltered] = useState<any[]>([]);

  useEffect(() => {
    setMoviesFiltered(movies);
  }, [movies]);

  useEffect(() => {
    setMoviesFiltered(
      movies.filter((movie) => movie.title.toLowerCase().includes(search))
    );
  }, [search]);

  useEffect((): any => {
    const moviesSorted = [...moviesFiltered];
    if (orderBy === "nome") {
      setMoviesFiltered(
        moviesSorted.sort((a, b) => a.title.localeCompare(b.title))
      );
    }
    if (orderBy === "pais") {
      setMoviesFiltered(
        moviesSorted.sort((a, b) => a.paismovie.localeCompare(b.paismovie))
      );
    }
    if (orderBy === "dtlanc") {
      setMoviesFiltered(
        moviesSorted.sort(
          (a, b) =>
            new Date(a.datemovie).getTime() - new Date(b.datemovie).getTime()
        )
      );
    }
    if (orderBy === "todos") {
      moviesSorted.sort();
    }
  }, [orderBy]);

  return (
    <div>
      <Content>
        <div>
          <video id="videoBanner" className="videoBanner" loop autoPlay muted>
            <source
              src={`../../../public/moviesimg/background.mp4`}
              type="video/mp4"
            ></source>
          </video>
        </div>
        <HomeContainer>
          <InfoContainer>
            <Col md={2}>
              <Input
                name="select"
                type="select"
                value={orderBy}
                className="w-100"
                onChange={({ target: { value } }) => setOrderBy(value)}
              >
                <option disabled value="todos">
                  Ordernar por:
                </option>
                <option value="nome">Nome</option>
                <option value="dtlanc">Data de Lançamento</option>
                <option value="pais">País</option>
              </Input>
            </Col>

            <Col md={10}>
              <Input
                placeholder="Pesquisar"
                value={search}
                onChange={({ target: { value } }) => setSearch(value)}
              />
            </Col>
          </InfoContainer>
        </HomeContainer>
        <MenuMovies>
          <strong>Filmes Favoritos:</strong>

          <ListMoviesContainer>
            <Carousel
              responsive={carouselResponsive}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              deviceType={"desktop"}
              dotListClass="custom-dot-list-style"
              className="movies-carousel"
              itemClass="carousel-item-padding-40-px"
            >
              {moviesFiltered.map((movie) => (
                <CardMovie key={movie.id} movie={movie} />
              ))}
            </Carousel>
          </ListMoviesContainer>
        </MenuMovies>
      </Content>
    </div>
  );
}
